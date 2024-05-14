import { AfterViewInit, Component } from '@angular/core';
import { environment } from '@environments/environment';
import { PaddleService } from '@paddle/paddle.service';

@Component({
  selector: 'app-paddle-inline-checkout',
  templateUrl: './paddle-inline-checkout.component.html',
  styleUrls: ['./paddle-inline-checkout.component.css'],
})
export class PaddleInlineCheckoutComponent implements AfterViewInit {
  vendor = 1;
  productId = 60871;
  env = 'sandbox';

  checkout?: IPaddle.PaddleEventDataCheckout;

  constructor() {}

  get checkOutName() {
    return (
      this.checkout?.recurring_prices?.['customer']?.items?.[0]?.name ?? ''
    );
  }

  get checkOutDetail() {
    const displayDetail =
      this.checkout?.recurring_prices?.['customer']?.items?.[0]?.[
        'display_recurring_price'
      ];
    if (!displayDetail) {
      return '';
    }
    return `${displayDetail.trial_days} ${displayDetail?.period}s free`;
  }

  ngAfterViewInit(): void {}

  checkEvent(data: IPaddle.PaddleEventCallbackData) {
    console.log('~~~~~~~', data);
    this.checkout = data?.eventData?.checkout;
  }
}
