import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'portfolio';
  isMobile: boolean = false;
  menuExpanded: boolean;
  darkTheme: boolean;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches;
      });
  }

  onThemeToggle(value) {
    this.darkTheme = !this.darkTheme;
    console.log('darktheme: ', this.darkTheme);

  }

  onScroll(e) {
    console.log(window.screenTop);
  }

  onMenuExpanded(state) {
    this.menuExpanded = state;
  }

}
