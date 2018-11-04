import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle.component';
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent extends PuzzleComponent implements OnInit {

  constructor(positionService: PositionService) { 
    super(positionService);
  }

  ngOnInit() {
  }

}
