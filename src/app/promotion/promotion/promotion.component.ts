import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
url: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/place/11+St+Helier+Rd,+Winston+Park,+Gillitts,+3610/@-29.804697,30.7735629,17z/data=!3m1!4b1!4m5!3m4!1s0x1ef6fbc43e96e7f3:0x6be61b1c242303f0!8m2!3d-29.804697!4d30.7757516' + '&output=embed')
  }

}
