import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle.component'
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'ui-developer',
  templateUrl: './ui-developer.component.html',
  styleUrls: ['./ui-developer.component.scss']
})
export class UiDeveloperComponent extends PuzzleComponent implements OnInit {

  constructor(public positionService: PositionService) {
    super(positionService);
  }

  ngOnInit() {
    
  }

}
