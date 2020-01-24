import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

gamesList: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
      this.games();
  }

  games(){
     let games = this._httpService.getGames();
     games.subscribe( data => {
         console.log(data);
         this.gamesList = data;
     }) 
  }

}
