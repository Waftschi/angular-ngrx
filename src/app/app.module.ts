import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { counterReducer } from './counter';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './counter/counter.component';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
      StoreModule.forRoot({ counter: counterReducer }),
      StoreDevtoolsModule.instrument()
  ],
  providers: [OrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
