import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle.component';
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'geophysicist',
  templateUrl: './geophysicist.component.html',
  styleUrls: ['./geophysicist.component.scss']
})
export class GeophysicistComponent extends PuzzleComponent implements OnInit {

  constructor(positionService: PositionService) { 
    super(positionService);
  }

  ngOnInit() {
  }

}
