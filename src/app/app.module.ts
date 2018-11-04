import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './puzzle/intro/intro.component';
import { UiDeveloperComponent } from './puzzle/ui-developer/ui-developer.component';
import { GeophysicistComponent } from './puzzle/geophysicist/geophysicist.component'
import { PuzzleComponent } from './puzzle/puzzle.component';

import { PositionService } from './services/position.service';
import { MenuComponent } from './common/menu/menu.component';
import { ImgViewerComponent } from './common/img-viewer/img-viewer.component';
import { MentorComponent } from './puzzle/mentor/mentor.component';
import { PilotComponent } from './puzzle/pilot/pilot.component';
import { TravelerComponent } from './puzzle/traveler/traveler.component';

/* const appRoutes: Routes = [
  { path: '/intro', component: AppComponent },
  { path: '/ui-developer', component: UiDeveloperComponent },
  /* {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  }, 
  { path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  }, 
  { path: '**', component: AppComponent }
]; */

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    UiDeveloperComponent,
    PuzzleComponent,
    GeophysicistComponent,
    MenuComponent,
    ImgViewerComponent,
    MentorComponent,
    PilotComponent,
    TravelerComponent
  ],
  imports: [
    BrowserModule,
    /* RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) */
  ],
  providers: [PositionService],
  bootstrap: [AppComponent]
})

export class AppModule { }
