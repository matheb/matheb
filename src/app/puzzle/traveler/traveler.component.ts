import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle.component';
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.scss']
})
export class TravelerComponent extends PuzzleComponent implements OnInit {

  constructor(positionService: PositionService) { 
    super(positionService);
  }

  ngOnInit() {
  }

}
