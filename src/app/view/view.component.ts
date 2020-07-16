import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
// import "rxjs/add/operator/toPromise";
// import registrationNos from "../../assets/19.json";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  examName = {
    21: "May/June 2020",
    19: "Nov/Dec 2019",
    17: "May/June 2019",
    15: "Nov/Dec 2018",
    13: "May/June 2018",
    11: "Nov/Dec 2017",
  }
  examId: number;
  regNo: number;
  result;
  subjects = [];
  marks = [];
  cgpamarks = [];
  gpa: string;
  cgpa: string;
  gpanumerator: number;
  gpadenominator: number;
  cgpanumerator: number;
  cgpadenominator: number;
  isLoaded = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      try {
        this.regNo = params["reg"];
        if (this.regNo == 201700291) {
          alert("No.");
          this.router.navigate(["/search"]);
        }
        this.examId = params["examId"];
        if (this.examId % 2 != 1) {
          this.router.navigate(["/search"]);
        }
        this.storeData();
        this.calculateCGPA();
      } catch {
        this.router.navigate(["/search"]);
      }
    });
  }

  storeData() {
    try {
      this.http.get(`../../assets/${this.examId}.json`).subscribe(data => {
        try {
          this.result = data[this.regNo];
          this.subjects = Object.keys(this.result);
          this.marks = Object.values(this.result);
          this.calculateGPA();
        } catch {
          this.router.navigate(["/search"]);
        }
      });
    } catch (err) {
      this.router.navigate(["/search"]);
    }
  }

  calculateCGPA() {
    let res = [];
    this.cgpanumerator = 0;
    this.cgpadenominator = 0;
    for (let i = 11; i <= this.examId; i += 2) {
      this.http.get(`../../assets/${i}.json`).subscribe(data => {
        res = Object.values(data[this.regNo]);
        res.forEach(element => {
          this.cgpanumerator += this.grade(element.grade) * element.credit;
          this.cgpadenominator += element.credit;
          this.cgpa = (this.cgpanumerator / this.cgpadenominator).toFixed(2);
        });
      });
    }
  }

  calculateGPA() {
    this.gpanumerator = 0;
    this.gpadenominator = 0;
    this.marks.forEach(element => {
      this.gpanumerator += this.grade(element.grade) * element.credit;
      this.gpadenominator += element.credit;
    });
    this.gpa = (this.gpanumerator / this.gpadenominator).toFixed(2);
    this.isLoaded = true;
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
