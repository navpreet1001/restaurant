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
// Working from here

  // public menu = {
	// "food": [{
	// 		"title": "Appetizer",
	// 		"id": "01",
	// 		"item": [{
  //       "name": "Paneer Tikka",
  //       "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
  //       "price": 152
	// 			},
	// 			{
  //         "name": "Samosa",
  //       	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
  //       	"price": 110
	// 			},{
  //         "name": "Chicken Tikka",
  //       	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
  //       	"price": 140
	// 			},{
  //         "name": "Chicken Wings",
  //       	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
  //       	"price": 150
	// 			}
	// 		]
	// 	},
	// 	{
	// 		"title": "Entree",
	// 		"id": "02",
	// 		"item": [{
  //         "name": "Pizza",
  //         "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
  //         "price": 130
	// 			},{
  //         "name": "Pasta",
  //       	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
  //       	"price": 140
	// 			},{
  //         "name": "Butter Chicken",
  //       	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
  //       	"price": 170
	// 			},{
  //         "name": "Sahi Paneer",
  //       	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
  //       	"price": 160
	// 			}
	// 		]
	// 	}
  //
	// ]
  // };
  constructor(private dataService :DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
    console.log(this.data);
    // console.log(this.menu);
  }

}
