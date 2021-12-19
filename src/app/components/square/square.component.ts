import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() squareValue: number;
  circleColor: string = 'white';

  constructor() {}

  ngOnInit(): void {}

  onClick = () => {
    console.log(this.squareValue);
  };
}
