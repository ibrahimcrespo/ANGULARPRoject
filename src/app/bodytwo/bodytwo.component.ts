import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodytwo',
  templateUrl: './bodytwo.component.html',
  styleUrls: ['./bodytwo.component.css']
})
export class BodytwoComponent implements OnInit {
Desgination: string ;
UserName: string ;
NoOfTeamNumber: number;
TotalCost: number;
PendingTask: number;
UpCommingProject: number;
ProjectCost: number;
CurrentExpenditure: number;
AvaliableFounds: number;
  constructor() { }

  ngOnInit() {
    this.Desgination = "Team Leader";
    this.UserName = "Ibrahim Ezzat" ;
    this.NoOfTeamNumber = 12 ;
    this.TotalCost = 1233 ;
    this.PendingTask = 22 ;
    this.UpCommingProject = 344 ;
    this.ProjectCost = 12334 ;
    this.CurrentExpenditure = 23 ;
    this.AvaliableFounds = 12 ;
  }

}
