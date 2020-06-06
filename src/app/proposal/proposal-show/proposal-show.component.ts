import { Component, OnInit } from '@angular/core';

import {Proposal} from '../proposal-list/proposal';
import {ActivatedRoute,Params} from "@angular/router";

@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit {
  
  id:number;
  routeid:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeid = this.route.params.subscribe(
      params =>{
        this.id=+params['id'];
      }
    )
  }

}
