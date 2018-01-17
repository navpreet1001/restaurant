import {Data} from './data.model'
export class DataService {
  private data:Data ={
  	"owner": {
  		"name": "mannat",
  		"phone": 9815216710,
  		"address": {
  			"street": "241 Model town",
  			"city": "Jalandhar, 144001",
  			"province": "Punjab"
  		},
  		"hours": [{
  				"day": "Mon to Wed",
  				"hour": "12 - 10"
  			},
  			{
  				"day": "Thu -Sat",
  				"hour": "12 - 12"
  			}, {
  				"day": "Closed",
  				"hour": "Closed"
  			}]
      },
    "menu": [{
			"title": "Appetizer",
			"id": "01",
			"item": [{
        "name": "Paneer Tikka",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
        "price": 152
				},
				{
          "name": "Samosa",
        	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
        	"price": 110
				},{
          "name": "Chicken Tikka",
        	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
        	"price": 140
				},{
          "name": "Chicken Wings",
        	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
        	"price": 150
				}]
		},{
			"title": "Entree",
			"id": "02",
			"item": [{
          "name": "Pizza",
          "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
          "price": 130
				},{
          "name": "Pasta",
        	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
        	"price": 140
				},{
          "name": "Butter Chicken",
        	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
        	"price": 170
				},{
          "name": "Sahi Paneer",
        	"desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
        	"price": 160
				}]
		},{
			"title": "Desserts",
			"id": "03",
			"item": [{
          "name": "Gulab Jamun",
          "desc": "Round milk dumplings fried and immersed in a sweet cardamom rose water.",
          "price": 90
				},{
          "name": "Kheer",
        	"desc": "A favourite silky rice pudding served with an infusion of rose syrup and sprinkled with raisin and nuts.",
        	"price": 95
				},{
          "name": "Kulfi",
        	"desc": "An Indian variety of gelato available in a variety of flavours.",
        	"price": 75
				},{
          "name": "Gajar Halwa",
        	"desc": "Grated carrots cooked gently in milk and sprinkled generously with nuts.",
        	"price": 80
				},{
          "name": "Rasmlai",
        	"desc": "Delicate patties of shaped cheese soaked in a thick milk flavoured with cardamom and saffron.",
        	"price": 100
				}]
      }],
      "drinks":{
        "title": "Beverages",
        "item": [{
            "name": "Mango Lassi",
            "desc": "Cold sweetened mango and yogurt drink",
            "price": 90
          },{
            "name": "Sweet Lassi",
            "desc": "Cold sweetened yogurt drink",
            "price": 95
          },{
            "name": "Tea",
            "desc": "Chai Tea, Spiced Tea, Iced Tea ",
            "price": 75
          },{
            "name": "Coffe",
            "desc": "Black coffe or with milk",
            "price": 80
          },{
            "name": "Soda Pop",
            "desc": "Coke, Diet Coke, Sprite, Lemonade, Fanta",
            "price": 100
          }]
      }
  };

  getData(){
    return this.data;
  }
}
