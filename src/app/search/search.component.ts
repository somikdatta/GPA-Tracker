import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { isNull } from "util";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  selected = "28";
  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(reg: number) {
    if (isNull(reg) || reg < 1) {
      alert("Please enter your registration number");
      return;
    }
    this.router.navigate([`/search/${this.selected}/${reg}`]);
  }
}
