import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle.component';
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss']
})
export class PilotComponent extends PuzzleComponent implements OnInit {

  constructor(positionService: PositionService) { 
    super(positionService);
  }

  ngOnInit() {
  }

}
