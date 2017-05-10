import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class QpxService {

  searchUrlAPI = 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCC8fh8TDaARC3FXpCS2301RupqY3nw23s/'
  resultsURLAPI = 'https://miff.me/flights/results.json'
  constructor(private _http: Http) { }

  // G hack
  get(): Observable<any> {
    return this._http.get(this.resultsURLAPI)
    .map(this.extractData)
    .catch(this.handleError)
  }

  // POST - poziva servis i vraca JSON
  post(origin: string, destination: string, startDate: any, endDate: any,
    adults: number, child: number, infant: number
  ): Observable<any> {
    var body = {
      "request": {
        "slice": [
          {
            "origin": origin,
            "date": startDate.year + '-' + startDate.month + '-' + startDate.day,
            "destination": destination
          },
          {
            "destination": origin,
            "date": endDate.year + '-' + endDate.month + '-' + endDate.day,
            "origin": destination
          }
        ],
          "passengers": {
          "adultCount": adults,
          "childCount": child,
          "infantInSeatCount": infant
        },
        "solutions": 20
      }
    }

    console.log(JSON.stringify(body))

    return this._http.post(this.searchUrlAPI, body)
    .map(this.extractData)
    .catch(this.handleError)
  }


  // MARK: - Extract Data from Response

  private extractData = (res: Response) => {
    if (res.status < 200 || res.status>= 300) {
      throw new Error('Bad status ' + res.status)
    }

    let body = res.json()

    if (body.success == false) {
      throw new Error(body.message)
    }
    return body || {}
  }



  // MARK: Handle the errors 

  private handleError = (error: any) => {
    var message = error._body ? JSON.parse(error._body) : error.message
    return Observable.throw(message)
  }







}
