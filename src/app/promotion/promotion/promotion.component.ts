import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
quote: FormGroup;
ButtonClicked: boolean;
totalPrice: number;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.quote = this.fb.group({
      name: [''],
      email: [''],
      trip:[],
      carType:[0],
      distance:[0]
    });
   
  }

  submit() {
    const distance = this.quote.controls.distance.value;
    let ratesPerKm = 0; 
    let trip = 1;
    if(CarType.Mercedes === this.quote.controls.carType.value) {
      ratesPerKm = 350;
    } else {
      ratesPerKm = 500;
    }
    if(this.quote.controls.trip.value === 'twoWay') {
    trip = 2;
    }
    this.totalPrice = distance * ratesPerKm * trip;
    this.ButtonClicked = true;
  }
}

export enum CarType {
  Mercedes,
  Audi
}
