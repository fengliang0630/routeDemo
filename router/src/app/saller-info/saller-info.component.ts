import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-saller-info',
  templateUrl: './saller-info.component.html',
  styleUrls: ['./saller-info.component.css']
})
export class SallerInfoComponent implements OnInit {

  private sallerId : number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.sallerId = this.routeInfo.snapshot.params['id'];
  }

}
