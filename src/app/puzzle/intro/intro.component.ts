import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle.component'
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent extends PuzzleComponent implements OnInit {

  constructor(public positionService: PositionService) {
    super(positionService);
  }

  ngOnInit() {
    
  }

}
