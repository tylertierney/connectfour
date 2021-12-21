import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  checkVertically,
  checkHorizontally,
  checkDiagUpRight,
  checkDiagDownRight,
} from '../helperFunctions';

@Injectable({
  providedIn: 'root',
})
export class GamestateService {
  redIsNext: boolean = true;
  gameState: number[][] = Array(7)
    .fill(0)
    .map(() => Array(6).fill(0));
  winner: string | null = null;

  private gamestateStore = new BehaviorSubject(this.gameState);
  currentGamestate = this.gamestateStore.asObservable();

  private currentPlayerStore = new BehaviorSubject(this.redIsNext);
  currentPlayer = this.currentPlayerStore.asObservable();

  private winnerStore = new BehaviorSubject(this.winner);
  currentWinner = this.winnerStore.asObservable();

  constructor() {}

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

    this.gamestateStore.next(board);
    this.redIsNext = !this.redIsNext;
    this.currentPlayerStore.next(this.redIsNext);

    return null;
  };

  calculateWinner = (playerValue: number) => {
    for (let i = 0; i < this.gameState.length; i++) {
      for (let j = 0; j < this.gameState[i].length; j++) {
        if (
          checkVertically(i, j, playerValue, this.gameState) ||
          checkHorizontally(i, j, playerValue, this.gameState) ||
          checkDiagUpRight(i, j, playerValue, this.gameState) ||
          checkDiagDownRight(i, j, playerValue, this.gameState)
        ) {
          this.winner = playerValue === 1 ? 'Red' : 'Blue';
          this.winnerStore.next(this.winner);
        }
      }
    }
  };
}
