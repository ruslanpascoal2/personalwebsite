import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { gsap, Power2, Power1, Elastic, CSSRulePlugin, TweenMax, Timeline } from 'gsap/all';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  tl = gsap.timeline();
  contentLoaded: boolean = false;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
  }

  imageLoaded() {
    this.contentLoaded = true;
    this.spinner.hide();
    this.tl.from('.desc', { duration: 1, opacity: 0, x: 200, ease: Power1, })
    this.tl.from('.social-media', { duration: 1, opacity: 0, y: 200., ease: Power1 }, '-=0.5')

  }

}
