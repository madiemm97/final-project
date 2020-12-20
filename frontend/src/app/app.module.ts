import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
// import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { CommonModule } from '@angular/common';
// import { DataService } from './data.service'; 

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
