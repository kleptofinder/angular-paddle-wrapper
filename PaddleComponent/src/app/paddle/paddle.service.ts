import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaddleService {
  private loaded?: Promise<void>;

  constructor() {}

  /**
   * Create a Paddle instance as soon as Paddle has loaded.
   *
   * @param config
   */
  public async create({ env, ...rest }: IPaddle.PaddleConfig): Promise<void> {
    this.load().then(() => {
      if (env) {
        Paddle.Environment.set(env);
      }
      Paddle.Setup(rest);
    });
  }

  public open(checkout: IPaddle.PaddleCheckoutOptions): void {
    if (this.loaded) {
      Paddle.Checkout.open(checkout);
    }
  }

  /**
   * Load or wait for the Paddle Script to load.
   *
   * @returns
   */
  private load(): Promise<void> {
    if (!this.loaded) {
      this.loaded = new Promise<void>((resolve, reject) => {
        const script: any = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdn.paddle.com/paddle/paddle.js';
        script.onerror = (e: any) => reject(e);
        if (script.readyState) {
          script.onreadystatechange = () => {
            if (
              script.readyState === 'loaded' ||
              script.readyState === 'complete'
            ) {
              script.onreadystatechange = null;
              resolve();
            }
          };
        } else {
          script.onload = () => {
            resolve();
          };
        }
        document.getElementsByTagName('body')[0].appendChild(script);
      });
    }

    return this.loaded;
  }
}
