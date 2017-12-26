import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
// import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  // menu : Menu[];

  menu =[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu();
    console.log(this.menu)
  }

}
