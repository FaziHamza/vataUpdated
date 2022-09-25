import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-desktop-popular-categories',
  templateUrl: './desktop-popular-categories.component.html',
  styleUrls: ['./desktop-popular-categories.component.scss']
})
export class DesktopPopularCategoriesComponent implements OnInit {
  popular_categories: any = [];

  constructor(private homepageService: HomeService) { }
  ngOnInit() {
    // get popular services
    this.homepageService.getPopularCategories().subscribe(
      (data: any) => {
        console.log(data);
        let tem = data.results.filter((item) => item.parent == null);
        var temp = [];
        tem.forEach(element => {
          if (element.parent == null) {
            if (element.icon_content) element.icon_content = element.icon_content.replace('fill="#121212"', 'fill="' + element.icon_fill + '"');
            temp.push(element);
          }
        });
        this.popular_categories = temp
      }, error => {
        alert('The server responsed with: ' + error.error);
        return Observable.throw(new Error(error.status));
      }
    );
  }
}
