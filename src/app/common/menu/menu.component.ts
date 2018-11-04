import { Component, OnInit } from '@angular/core';
import {PuzzleComponent} from '../../puzzle/puzzle.component';
import {PositionService} from '../../services/position.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends PuzzleComponent implements OnInit {
  actualComponent: string;

  constructor(positionService: PositionService) {
    super(positionService);
    this.actualComponent = 'intro';
  }

  ngOnInit() {
    this.positionService.actualComponent.subscribe(this.changeComponent.bind(this));
  }

  changeComponent(component: string) {
    this.actualComponent = component;
  }

}
