import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Home/Home.component";
import { AboutComponent } from "./About/About.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutComponent }
];
export const Routing = RouterModule.forRoot(routes, { useHash: true });
