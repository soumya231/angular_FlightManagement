import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flight, ScheduleFlight } from './scheduleflights/FlightDetails';
import { ScheduleflightsComponent } from './scheduleflights/scheduleflights.component';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }
  flight:Flight[]=[];
  scheduleFlight:ScheduleFlight[]=[];
  
  public AddFlight(flight){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.http.post("http://localhost:8885/flight/AddFlight",flight,  { headers, responseType: 'text'});
}
public updateSchedule(scheduleFlight){
 
  const headers=new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.put("http://localhost:8001/flight/update",scheduleFlight,{ headers, responseType: 'text'});
}
getflight():Flight[]{
  return this.flight;
}
getscheduleFlight():ScheduleFlight[]{
  return this.scheduleFlight;
}


}
