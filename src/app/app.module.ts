import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';
import { BooksComponent }      from './books/books.component';

import {NgxPaginationModule} from 'ngx-pagination';

import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  imports: [
    NgxPaginationModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
