import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  gameState: number[][] = Array(7)
    .fill(0)
    .map(() => Array(6).fill(0));
  redIsNext: boolean = true;
  winner: null | string = null;

  constructor() {}

  ngOnInit(): void {}

  makeMove = (index: number) => {
    if (this.winner != null) {
      return null;
    }
    let board = [...this.gameState];
    const playerValue = this.redIsNext ? 1 : 2;

    for (let i = board[index].length - 1; i >= 0; i--) {
      if (board[index][i] === 0) {
        board[index][i] = playerValue;
        break;
      }
    }
    this.calculateWinner(playerValue);

    this.gameState = board;
    this.redIsNext = !this.redIsNext;
    return null;
  };

  calculateWinner = (playerValue: number) => {
    const checkVertically = (column: number, square: number) => {
      if (square >= 3) {
        return false;
      }
      for (let k = 0; k < 4; k++) {
        if (this.gameState[column][square + k] !== playerValue) {
          return false;
        }
      }
      return true;
    };

    const checkHorizontally = (column: number, square: number) => {
      if (column > 3) {
        return false;
      }
      for (let k = 0; k < 4; k++) {
        if (this.gameState[column + k][square] !== playerValue) {
          return false;
        }
      }
      return true;
    };

    for (let i = 0; i < this.gameState.length; i++) {
      for (let j = 0; j < this.gameState[i].length; j++) {
        if (checkVertically(i, j) || checkHorizontally(i, j)) {
          this.winner = playerValue === 1 ? 'Red' : 'Blue';
        }
      }
    }

    console.log(this.winner);
  };
}
