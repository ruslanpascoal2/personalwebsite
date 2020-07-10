import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides: Array<any> = [
    {
      img: '../../../assets/img/pokethumb.png', title: 'Pokélib',
      description: 'Projeto em Angular 9 + Bootstrap com consumo de API REST'
    },
    {
      img: 'https://images.unsplash.com/photo-1585429839791-95728b3bb0fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    },
    { img: 'https://images.unsplash.com/photo-1585429828786-2214353d3b0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80', },
    { img: 'https://images.unsplash.com/photo-1585429828786-2214353d3b0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80', },
  ];

  currentSlide = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onNext() {

    let array = [...this.slides];

    array.unshift(this.slides[this.slides.length - 1]);

    array.pop();

    this.slides = [];

    this.slides = [...array];

  }

  onPrevious() {

    let array = [...this.slides]

    array.push(this.slides[0]);

    array.shift();

    this.slides = [];

    this.slides = [...array];

  }

}
