import { Component, OnInit, Input, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { Pattern } from '../../regex.pattern';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  @Input() slides = ["/src/assets/img/Group-244.png"];
  @Input() videos = [];

  imagesSlider = {
    speed:300,
    slidesToShow:1,
    slidesToScroll:1,
    centerMode:true,
    cssEase:'linear',
    fade:true,
    focusOnSelect: false,
    draggable:false,
    asNavFor:".thumbs",
    "prevArrow": false,
      "nextArrow": false,
  };
  thumbnailsSlider = {
    speed:300,
    slidesToShow:3,
    slidesToScroll:1,
    cssEase:'linear',
    centerMode:true,
    draggable:true,
    focusOnSelect:true,
    asNavFor:".feedback",
    "prevArrow": false,
      "nextArrow": false,
  };

  constructor(private _lightbox: Lightbox) { }

  ngOnInit() {
  }

  afterChange(event) {
    if (document.getElementById('slide-video')) {
      (document.getElementById('slide-video') as HTMLVideoElement).pause();
    }
  }

  beforeChange(event) {
    // console.log(event);
  }

  
  open(images, index: number): void {
    // open lightbox
    images = images.map(img => {
      return {
        src: img,
        caption: "",
        thumb: img
      }
    })
    this._lightbox.open(images, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
