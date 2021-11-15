import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plots } from '../models/plots';

@Injectable({
  providedIn: 'root'
})
export class PlotsService {
  plotUrl = "http://localhost:8000/water/plots/"
  constructor( private httpClient:HttpClient) {}
  public list(): Array<Plots> {
    // return this.httpClient.get<Plots[]>(this.plotUrl)
    let response = [
      {
        "id": 1,
        "name": "A1",
        "farm_name": "Los cuervos",
        "crop": "Maiz",
        "water_per_week": 10100,
        "rains": [],
        "irrigations": [],
        "total_rain":0,
        "total_irrigations":0,
      },
      {
        "id": 2,
        "name": "A2",
        "farm_name": "Los cuervos",
        "crop": "Trigo",
        "water_per_week": 5100,
        "rains": [],
        "irrigations": [],
        "total_rain":0,
        "total_irrigations":0,
      },
      {
        "id": 3,
        "name": "A3",
        "farm_name": "Los cuervos",
        "crop": "Soja",
        "water_per_week": 12100,
        "rains": [],
        "irrigations": [],
        "total_rain":0,
        "total_irrigations":0,
      },
    ]
    return response;
  }

  public detail(id:number): Observable<Plots> {
    return this.httpClient.get<Plots>(this.plotUrl + id)
  }
}
