import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Common/Header/Header.component";
import { FooterComponent } from "./Common/Footer/Footer.component";
import { HomeComponent } from "./Home/Home.component";
import { AboutComponent } from "./About/About.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [BrowserModule, Routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
