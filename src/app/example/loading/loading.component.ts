import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.peliculas =[
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio:1400.99
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio:300.99
        }
      ]
    },3000)
  }
  peliculas:any;

}
