import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todoItem/todoItem.component';
import { DayListComponent } from './components/day-list/day-list.component';
import { DeletebtnchangeDirective } from './directives/deletebtnchange.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DayListFormComponent } from './components/day-list-form/day-list-form.component';
import { LocalstorageUpdaterService } from './services/localstorage-updater.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    DayListComponent,
    DeletebtnchangeDirective,
    DayListFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [LocalstorageUpdaterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
