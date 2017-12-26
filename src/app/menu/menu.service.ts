import { Menu } from './menu.model';

export class MenuService {
  private menu: Menu[]=[
    {
      title: "Appetizer",
      item:[{
        name: "Paneer Tikka",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
        price: 12
      },{
        name: "Samosa",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
        price: 11
      }]
    },
    {
      title: "Entree",
      item:[{
        name: "Pasta",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
        price: 12
      },{
        name: "Pizza",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A temporibus dolorum animi.",
        price: 11
      }]
    }
  ];

  getMenu(){
    return this.menu;
  }
}
