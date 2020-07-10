import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hireMeButtonHovered: boolean = false;

  constructor() {
  }

  ngOnInit(): void {}

  toggleImg(){
    this.hireMeButtonHovered = !this.hireMeButtonHovered;
  }

}
