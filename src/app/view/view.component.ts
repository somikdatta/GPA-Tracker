import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import registrationNos from "../../assets/19.json";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  regNo: number;
  result = registrationNos;
  subjects = [];
  marks = [];
  gpa: string;
  numerator: number;
  denominator: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      try {
        this.regNo = params["reg"];
      } catch {
        this.router.navigate(["/search"]);
      }
    });
    this.result = this.result[this.regNo];
    this.subjects = Object.keys(this.result);
    this.marks = Object.values(this.result);
    this.calculateGPA();
  }

  calculateGPA() {
    (this.numerator = 0), (this.denominator = 0);
    this.marks.forEach(element => {
      this.numerator += this.grade(element.grade) * element.credit;
      this.denominator += element.credit;
    });
    this.gpa = (this.numerator / this.denominator).toFixed(2);
  }

  grade(grade: string) {
    if (grade == "S") return 10;
    else if (grade == "A") return 9;
    else if (grade == "B") return 8;
    else if (grade == "C") return 7;
    else if (grade == "D") return 6;
    else if (grade == "E") return 5;
    return 0;
  }
}
