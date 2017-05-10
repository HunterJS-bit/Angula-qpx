import { QpxService } from './../qpx.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _qpx: QpxService) { }

  today = new Date()

  searchFlight = {
    'origin': '',
    'destination': '',
    'start_date': {
      'year': this.today.getFullYear(),
      'month': this.today.getMonth() + 1,
      'day': this.today.getDate() + 1
    },
    'end_date': {},
    'adultCount': 1,
    'childCount': 0,
    'infantInSeatCount': 0,
  }

  searchRequest = {}
  searchResults = []

  ngOnInit() {

  }

  doResults() {
    this._qpx.get().subscribe((data) => {
      this.searchResults = data
    }, (error) => {
      // ERROR
    })
  }

  doSearch() {
    // proveri da li ima sva polja
    if (this.searchFlight.adultCount <= 0
      || this.searchFlight.origin.length <= 0
      || this.searchFlight.destination.length <= 0
    ) {
      alert('Nisi upisao u sva obavezna polja!')
      return
    }

    // Procesiraj pretragu
    this.doResults()
    /*this._qpx.post(this.searchFlight.origin, this.searchFlight.destination, 
    this.searchFlight.start_date, this.searchFlight.end_date, 
    this.searchFlight.adultCount, this.searchFlight.childCount, 
    this.searchFlight.infantInSeatCount).subscribe((data) => {
      // Success
      this.searchResults = data
    }, (error) => {
      // Error
      console.log(error)
    })*/





  }

}
