import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebcamComponent} from './webcam/webcam.component';
import { BrowserModule } from '@angular/platform-browser';
const COMPONENTS = [
  WebcamComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WebcamComponent
  ],
  exports: [
    WebcamComponent
  ]
})
export class WebcamModule {
}
