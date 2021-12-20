import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GamestateService {
  redIsNext: boolean = true;

  gameState: number[][] = Array(7)
    .fill(0)
    .map(() => Array(6).fill(0));

  constructor() {}

  getGameState() {
    return this.gameState;
  }

  getCurrentPlayer() {
    return this.redIsNext;
  }

  changePlayer() {
    this.redIsNext = !this.redIsNext;
  }
}
