import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  constructor() { }
  menu=["gra","umiejętności","konstrukcja","technologia","obliczenia","misje","jednostki","uszkodzenia"]
  baseSkill=["charyzma","pancerz","zręczność","inteligencja","wiedza","siła","wytrzymałość","szczęscie"]
  secendarySkill=["atak","obrona","punkty życia","precyzja",]
  ngOnInit(): void {
  }

}
