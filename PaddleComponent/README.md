# Angular Paddle Wrapper Module #

This project was generated with Angular CLI version 15.2.

## How To Use ##

### 1. Import Paddle Module ###

```ts
import { PaddleModule } from '@paddle/paddle.module';

@NgModule({
  ...
  imports: [..., PaddleModule],
})
export class AppModule {}
```

### 2. Use `appPaddle` directive in html template ###

#### Inline Checkout Example ####

*Note: Must define `frameTarget`, `frameStyle`, `frameInitialHeight` props

```html
<button appPaddle [vendor]="vendor" [env]="env" [product]="productId" email="test@test.com" [method]="'inline'"
  (onCheckoutEvent)="checkEvent($event)" [frameTarget]="'checkout-container'" [frameInitialHeight]='450'
  [frameStyle]="'width:100%; min-width:312px; background-color: transparent; border: none;'">
  Subscribe(inline)
</button>
```

#### Overlay Checkout Example ####

```html
<button appPaddle [vendor]="vendor" [env]="env" [product]="productId" email="test@test.com" [method]="'overlay'"
  (onCheckoutEvent)="checkEvent($event)" style="margin-left: 30px;">
  Subscribe(overlay)
</button>
```

### 3. Please check available options ####

In `paddle.d.ts` file, `IPaddle.PaddleCheckoutOptions` interface

### 4. Can hook checkout event result via `onCheckoutEvent` event listener ####

`(onCheckoutEvent)="checkEvent($event)"`

In the `inline` checkout, you will need to get the product details via this event callback.
