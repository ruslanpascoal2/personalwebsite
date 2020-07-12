import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() theme = new EventEmitter;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.theme.emit(true);
  }

}
