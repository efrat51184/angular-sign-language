import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Card } from '../../card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private gameService: GameService) { }

  cardCount: number = 8;

  ngOnInit(): void {
    this.newGame();
  }

  cards: Card[] = [];
  boardWidth: number;

  newGame() {
    this.gameService.getCards(this.cardCount).subscribe(r => { this.cards = r;  this.calulateWidth()});
  }

  calulateWidth(){
    this.boardWidth=this.cardCount/2*90; 
  }



}
