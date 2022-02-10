import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryCardComponent } from './memory-card/memory-card.component';
import { BoardComponent } from './board/board.component';



@NgModule({
  declarations: [MemoryCardComponent,BoardComponent],
  imports: [
    CommonModule
  ]
})
export class LearningModule { }
