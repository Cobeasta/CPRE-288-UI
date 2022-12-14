import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { Obstacle } from './models/Obstacle';
import {ScenarioService} from "./scenario.service";
import {SocketioService} from "./socketio.service";

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ScenarioService,
    SocketioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
