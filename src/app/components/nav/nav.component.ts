import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() menuExpandedEmiter = new EventEmitter;
  menuExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuExpanded = !this.menuExpanded;
    this.menuExpandedEmiter.emit(this.menuExpanded);
  }
}
