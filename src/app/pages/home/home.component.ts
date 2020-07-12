import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { gsap, Power2, Elastic, CSSRulePlugin } from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() darkTheme;
  hireMeButtonHovered: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    // this.gsapService.fadeOpening('.stagger');
  }

  toggleImg() {
    this.hireMeButtonHovered = !this.hireMeButtonHovered;
  }



}
