import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.scss']
})
export class ImgViewerComponent implements OnInit {
  isInfoActive: boolean;

  constructor(public galleryService: GalleryService) {
    this.isInfoActive = false;
  }

  ngOnInit() {
/*     console.log(this.galleryService.getActualGallery()[this.galleryService.getActualImage()].path);
 */  }

  setInfoActive() {
    this.isInfoActive = true;
  }

  setInfoInActive() {
    this.isInfoActive = false;
  }

}
