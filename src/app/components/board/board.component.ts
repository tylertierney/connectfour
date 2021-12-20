import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  @Input() redIsNext: boolean;
  @Input() winner: string | null;
  @Input() makeMove: Function;
  @Input() gameState: number[][];

  constructor() {}

  ngOnInit(): void {}
}
