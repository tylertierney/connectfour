import { Component, OnInit } from '@angular/core';
import { GamestateService } from './services/gamestate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GamestateService],
})
export class AppComponent implements OnInit {
  title = 'connectfour';
  winner: string | null;
  gameState: number[][];
  redIsNext: boolean;
  subscription: Subscription;

  constructor(private gameStateService: GamestateService) {}

  ngOnInit(): void {
    this.subscription = this.gameStateService.currentPlayer.subscribe(
      (player) => (this.redIsNext = player)
    );

    this.subscription = this.gameStateService.currentGamestate.subscribe(
      (gamestate) => (this.gameState = gamestate)
    );

    this.subscription = this.gameStateService.currentWinner.subscribe(
      (winner) => (this.winner = winner)
    );
  }

  makeMove = (i: number) => {
    this.gameStateService.makeMove(i);
  };

  startNewGame = () => {
    this.gameStateService.startNewGame();
  };
}
