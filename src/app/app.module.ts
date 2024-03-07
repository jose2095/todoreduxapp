import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
