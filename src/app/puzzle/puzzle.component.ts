import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {
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

  public setComponent(component: string) {
    this.positionService.setPosition(component);
  }

}

export class PuzzlePosition {
  constructor(public x: number, public y: number){};
}
