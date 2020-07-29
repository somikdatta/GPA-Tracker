import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { ViewComponent } from "./view/view.component";
import { DevComponent } from "./dev/dev.component";

const routes: Routes = [
  { path: "", redirectTo: "search", pathMatch: "full" },
  { path: "search", component: SearchComponent },
  { path: "search/:examId/:reg", component: ViewComponent },
  { path: "dev", component: DevComponent },
  { path: "**", redirectTo: "search", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
