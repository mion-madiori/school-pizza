import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './router';

import { AppComponent } from './app.component';
import { PizzaContainerComponent } from './pizza-container/pizza-container.component';
import { PizzaComponent } from './pizza-container/pizza/pizza.component';
import { FormPizzaComponent } from './pizza-container/form-pizza/form-pizza.component';

import { HttpService } from './http.service';
import { EventService } from './event.service';

import {InputTextModule} from 'primeng/primeng';
import {SpinnerModule} from 'primeng/primeng';
import {DragDropModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {MenuModule, MenuItem} from 'primeng/primeng';
import {ShopComponent} from './shop/shop.component';
import {TabViewModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    PizzaContainerComponent,
    PizzaComponent,
    FormPizzaComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    InputTextModule,
    SpinnerModule,
    DragDropModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    MenuModule,
    TabViewModule,
    FileUploadModule
  ],
  providers: [
    HttpService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
