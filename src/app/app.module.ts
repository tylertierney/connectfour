import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { ColumnComponent } from './components/column/column.component';
import { SquareComponent } from './components/square/square.component';
import { InstructionsComponent } from './components/instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ColumnComponent,
    SquareComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
