import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

guid: any;
game: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        console.log(params['id']);
        this.guid = params['id'];
    });
    }

}
