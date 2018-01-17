import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl'],
  providers: []
})
export class MenuComponent implements OnInit {

  data = {};

  constructor(private dataService :DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
    console.log(this.data);
    // console.log(this.menu);
  }

}
