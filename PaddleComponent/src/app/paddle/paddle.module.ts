import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaddleDirective } from './paddle.directive';
import { PaddleService } from './paddle.service';

@NgModule({
  declarations: [PaddleDirective],
  providers: [PaddleService],
  imports: [CommonModule],
  exports: [PaddleDirective],
})
export class PaddleModule {}
