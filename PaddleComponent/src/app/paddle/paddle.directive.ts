import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { PaddleService } from './paddle.service';

@Directive({
  selector: '[appPaddle]',
})
export class PaddleDirective {
  // Listen Check out result
  @Output() onCheckoutEvent: EventEmitter<IPaddle.PaddleEventCallbackData> =
    new EventEmitter();

  // Must be define
  @Input() vendor!: number;
  @Input() product!: number;

  // Optional parameters
  @Input() env?: string;
  @Input() title?: string;
  @Input() message?: string;
  @Input() coupon?: string;
  @Input() email?: string;
  @Input() method: 'inline' | 'overlay' = 'overlay';

  // Should be define if use 'inline' checkout
  @Input() frameTarget?: string;
  @Input() frameStyle?: string;
  @Input() frameInitialHeight?: number;

  constructor(private paddleService: PaddleService) {}

  async ngOnInit() {
    await this.paddleService.create({
      vendor: this.vendor,
      env: this.env,
      eventCallback: (data: IPaddle.PaddleEventCallbackData) => {
        this.onCheckoutEvent.emit(data);
      },
    });
  }

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    this.paddleService.open({
      method: this.method,
      product: this.product,
      title: this.title,
      message: this.message,
      coupon: this.coupon,
      email: this.email,
      frameTarget: this.frameTarget,
      frameStyle: this.frameStyle,
      frameInitialHeight: this.frameInitialHeight,
      allowQuantity: false,
      disableLogout: true,
    });
  }
}
