import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { ViewComponent } from "./view/view.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { DevComponent } from "./dev/dev.component";

@NgModule({
  declarations: [AppComponent, SearchComponent, ViewComponent, DevComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
