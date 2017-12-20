import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.styl']
})
export class ContactComponent implements OnInit {
  lat: number = 31.307071;
  lng: number = 75.576477;
  zoom: number = 16;


  constructor() { }

  ngOnInit() {
  }

}
