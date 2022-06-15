import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

enum DealTypes {
  Buy = 'Buy',
  Sell = 'Sell',
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit, OnDestroy {
  form: FormGroup;

  private subscription?: Subscription;

  readonly dealTypes = [
    {
      value: DealTypes.Sell,
      label: DealTypes.Sell,
    },
    {
      value: DealTypes.Buy,
      label: DealTypes.Buy,
    },
  ];

  constructor() {
    const uah = new FormControl(0);
    const usd = new FormControl(0);
    const dealType = new FormControl(DealTypes.Sell);

    this.form = new FormGroup({
      uah,
      usd,
      dealType,
    });
  }

  ngOnInit(): void {
    this.subscription = this.form.valueChanges
      .subscribe((values) => console.log(values));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
