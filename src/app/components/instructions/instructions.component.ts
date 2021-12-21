import { Component, OnInit, Input } from '@angular/core';
import { GamestateService } from '../../services/gamestate.service';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css'],
  providers: [GamestateService],
})
export class InstructionsComponent implements OnInit {
  @Input() winner: string | null;
  @Input() redIsNext: boolean;
  @Input() startNewGame: Function;
  faSync = faSync;

  constructor(private gameStateService: GamestateService) {}

  ngOnInit(): void {
    this.redIsNext = this.gameStateService.redIsNext;
    this.winner = this.gameStateService.winner;
  }
}
