import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { ProductService } from '../../product.service';
import { AskQuestionModalComponent } from 'src/app/shared/components/ask-question-modal/ask-question-modal.component';
import { UserService } from 'src/app/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-desktop-customer-questions-and-answers',
  templateUrl: './desktop-customer-questions-and-answers.component.html',
  styleUrls: ['./desktop-customer-questions-and-answers.component.scss']
})
export class DesktopCustomerQuestionsAndAnswersComponent implements OnInit {
  @Input() sellerId;
  @Input() productId;
  @Input() isSelf = false;
  qnaData = [];
  isQACollapsed = false;
  showReply = [];
  showAnswers = [];
  user = null;
  constructor(
    private dialog: MatDialog,
    private productService: ProductService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.getQA();
  }

  askQuestionDialog(): void {
    const dialogRef = this.dialog.open(AskQuestionModalComponent, {
      width: '35%',
      data: {
        type: 'border',
        title: 'Ask a question',
        subTitle: 'If you have any question, just ask and we provide feedback as soon as we can',
        userId: this.userService.getUser().user_details.id,
        seller_id: this.sellerId,
        productId: this.productId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getQA();
      }
    });
  }

  answerQuestion(inputEle: HTMLInputElement, queId, index) {
    const data = {
      que_id: queId,
      user_id: this.userService.getUser().user_details.id,
      answer: inputEle.value
    };
    this.productService.addAnswer(data).subscribe(res => {
      this.getQA();
      this.showAnswers[index] = !this.showAnswers[index];
    }, err => {
      console.log(err);
    });
  }

  replyAnswer(inputEle: HTMLInputElement, answer_id, index) {
    if (inputEle.value) {
      const data = {
        ans_id: answer_id,
        user_id: this.userService.getUser().user_details.id,
        reply: inputEle.value
      };
      this.productService.addReply(data).subscribe(res => {
        this.getQA();
        this.showReply[index] = !this.showReply[index];
      }, err => {
        console.log(err);
      });
    }
    }

  getQA() {
    this.productService.getCustomerQA(this.productId, 'limited').subscribe((res: any) => {
      this.qnaData = res.customer_qna;
    });
  }

}
