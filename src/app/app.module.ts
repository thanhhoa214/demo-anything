import { AiaProgressBarModule } from './aia-progress-bar/aia-progress-bar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
const matModules = [MatIconModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AiaProgressBarModule,
    BrowserAnimationsModule,
    matModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
