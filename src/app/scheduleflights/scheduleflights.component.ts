import { Component, OnInit } from '@angular/core';
import { formatDate} from '@angular/common';

import { FlightService } from '../flight.service';
import { ScheduleFlight } from './schedule';

@Component({
  selector: 'app-scheduleflights',
  templateUrl: './scheduleflights.component.html',
  styleUrls: ['./scheduleflights.component.css']
})
export class ScheduleflightsComponent implements OnInit {
 
  scheduling:ScheduleFlight={flightNumber:0,scheduleFlightId:0,
  schedule:{scheduleId:0,sourceAirport:'',destinationAirport:'',arrivalDate:"",departureDate:""}}
    result:string;

  constructor(private scheduleservice:FlightService) {
    setInterval(()=>{
      
    },1000)
    }

  ngOnInit() {}
  updateSchedule():void{
    
    this.scheduleservice.updateSchedule(this.scheduling)
        .subscribe(data => {this.result=data});
        
       
}
}
