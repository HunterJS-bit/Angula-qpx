import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }

  isNavOpen = false

  ngOnInit() {
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen
  }

}
