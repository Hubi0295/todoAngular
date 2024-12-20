import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { AddTodoFormComponent } from './todo-list/add-todo-form/add-todo-form.component';
import { TodoComponent } from './todo-list/todo/todo.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import localPl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { FirstLetterUppercasePipe } from './shared/pipes/first-letter-uppercase.pipe';
registerLocaleData(localPl);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    FooterComponent,
    AlertComponent,
    AddTodoFormComponent,
    TodoComponent,
    ModalComponent,
    FirstLetterUppercasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:LOCALE_ID,useValue: 'pl'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
