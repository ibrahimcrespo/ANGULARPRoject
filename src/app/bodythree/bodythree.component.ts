import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-bodythree',
  templateUrl: './bodythree.component.html',
  styleUrls: ['./bodythree.component.css']
})
export class BodythreeComponent implements OnInit {

  constructor() {

  }
  onSubmit(form: NgForm){
    console.log(form);
  }
  ngOnInit() {


  }

}

