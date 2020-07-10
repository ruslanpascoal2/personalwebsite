import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  imagesLoaded: number = 0;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
  }

  thumbLoaded() {
    this.imagesLoaded++;

    if (this.imagesLoaded == 2) {
      this.spinner.hide();
      return;
    }
  }

  goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
