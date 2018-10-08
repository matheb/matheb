import { Injectable } from '@angular/core';
import { PuzzlePosition } from '../puzzle/puzzle.component'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  public position: BehaviorSubject<PuzzlePosition>;
  private puzzle: any = {
    intro: { x: 0, y: 0 },
    developer: { x: 1, y: 0 },
    geophisicist: { x: 2, y: 0 },
    mentor: { x: 0, y: 1 },
    pilot: { x: 1, y: 1 },
    traveler: { x: 2, y: 1 },
  }

  constructor() {
    this.position = new BehaviorSubject({ x: 0, y: 0 });
  }

  public setPosition(component: string) {
    this.position.next(this.puzzle[component]);
  }

  public getPosition(): PuzzlePosition {
    return this.position.getValue();
  }
}
