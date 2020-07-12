import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { gsap, Power2, Elastic, CSSRulePlugin } from 'gsap/all';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() menuExpandedEmiter = new EventEmitter;
  tl = gsap.timeline();
  menuExpanded: boolean = false;
  animationIcon: any;

  options: AnimationOptions = {
    path: '../../../assets/animations/lf30_editor_ATtvkG.json',
    loop: false,
    autoplay: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {

    if (this.menuExpanded) {
      this.animationIcon.setDirection(-1);
      this.animationIcon.play();
    }
    else {
      this.animationIcon.setDirection(1);
      this.animationIcon.play();
    }
    this.menuExpanded = !this.menuExpanded;
    this.menuExpandedEmiter.emit(this.menuExpanded);

  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationIcon = animationItem;
  }





}
