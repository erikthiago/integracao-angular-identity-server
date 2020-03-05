import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  response: any = [];

  constructor(public service: BaseService) { }

  ngOnInit() {
    this.service.basicGet().subscribe(result => {
      this.response = result;
    });
  }

}
