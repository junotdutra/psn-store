import { Component, OnInit } from '@angular/core';
import {gameData} from '../../../data/gameData'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  game:any[] = gameData

  constructor() { }

  ngOnInit(): void {
  }

}
