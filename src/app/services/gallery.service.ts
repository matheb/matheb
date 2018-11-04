import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  public actualGallery: BehaviorSubject<any>;
  public actualImage: BehaviorSubject<number>;
  public viewerIsActive: BehaviorSubject<boolean>;

  constructor() {
    this.actualImage = new BehaviorSubject(0);
    this.actualGallery = new BehaviorSubject([]);
    this.viewerIsActive = new BehaviorSubject(false);
  }

  setGallery(gallery) { 
    this.actualGallery.next(gallery);
  }

  setNextImage() { 
    if (this.actualImage.getValue() + 1 <= this.actualGallery.getValue().length) { 
      this.actualImage.next(this.actualImage.getValue() + 1);
    } else {
      this.actualImage.next(0);
    }
  }

  setPreviousImage() { 
    if (this.actualImage.getValue() - 1 >= 0) { 
      this.actualImage.next(this.actualImage.getValue() - 1);
    } else {
      this.actualImage.next(this.actualGallery.getValue().length - 1);
    }
  }

  setActualImage(index) {
    this.actualImage.next(index);
  }

  getActualGallery() {
    return this.actualGallery.getValue();
  }

  getActualImage() {
    return this.actualImage.getValue();
  }

  activateViewer() {
    this.viewerIsActive.next(true);
  }
  
  deactivateViewer() {
    this.viewerIsActive.next(false);
  }

  getViewerStatus() {
    return this.viewerIsActive.getValue();
  }

}
