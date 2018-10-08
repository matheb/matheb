import { Component } from '@angular/core';
import { PositionService } from './services/position.service';
import { PuzzlePosition } from './puzzle/puzzle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posX: number;
  posY: number;

  constructor(public positionService: PositionService) {
    this.posX = 0;
    this.posY = 0;
  }

  ngOnInit() {
    this.positionService.position.subscribe(this.setPosition.bind(this));
  }

  setPosition(position: PuzzlePosition) {
    if (position) {
      this.posX = position.x;
      this.posY = position.y;
    }
  }
}
