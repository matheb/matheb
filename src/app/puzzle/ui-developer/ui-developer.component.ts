import { Component, OnInit } from '@angular/core';
import { PuzzleComponent } from '../puzzle.component'
import { PositionService } from '../../services/position.service';
import gallery from '../../../assets/dev-gallery-data';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'ui-developer',
  templateUrl: './ui-developer.component.html',
  styleUrls: ['./ui-developer.component.scss']
})
export class UiDeveloperComponent extends PuzzleComponent implements OnInit {
  actualTab: string;
  gallery;
  galleryContainerHeight: number = null;
  galleryNeededHeight: number = null;
  galleryStep: number = 100;
  galleryPosition: number = 0;

  constructor(public positionService: PositionService, public galleryService: GalleryService) {
    super(positionService);
    this.actualTab = 'nokia';
    this.galleryService.setGallery(gallery);
  }

  ngOnInit() {
    this.actualTab = 'nokia';
    this.galleryContainerHeight = document.getElementById('gallery-slider').clientHeight;
    this.galleryNeededHeight = gallery.length * 100;
    /* console.log(this.galleryService.getActualGallery()); */
  }

  changeTab(chosenTab: string) {
    this.actualTab = chosenTab;
  }

  scrollUpGallery() {
    if (-this.galleryPosition + this.galleryContainerHeight <= this.galleryNeededHeight + 100) {
      this.galleryPosition -= this.galleryStep;
    }
  }

  scrollDownGallery() {
    if (this.galleryPosition + this.galleryStep <= 0 ) {
      this.galleryPosition += this.galleryStep;
    }
  }

}
