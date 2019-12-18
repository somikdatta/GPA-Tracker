import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log(
      "Hi Geek,\nI love to be friends with like minded people.\nMessage me, maybe we could help each other.\nCheers,\nSomik Datta"
    );
  }
}
