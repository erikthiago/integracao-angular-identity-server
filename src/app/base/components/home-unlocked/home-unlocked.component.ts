import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-home-unlocked',
  templateUrl: './home-unlocked.component.html'
})
export class HomeUnlockedComponent implements OnInit {

  response: any = [];

  constructor(public service: BaseService) { }

  ngOnInit() {
    this.service.basicGetUnlocked().subscribe(result => {
      this.response = result;
    });
  }

}
