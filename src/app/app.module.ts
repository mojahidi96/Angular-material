import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToggleComponent } from './toggle/toggle.component';
import { FormsModule } from '@angular/forms';
import { MatModules } from './material.modules';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    ToggleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ...MatModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
