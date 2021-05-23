import { Component,  Input, OnInit, Output, EventEmitter } from '@angular/core';
import {NgModel, FormControl, NgForm } from '@angular/forms';
import { AppTime } from './time-picker.model';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {
  @Input('model') model: string ='';
  @Input('disabled') disabled: boolean = false;
  @Input('required') required: boolean = false;

  
  @Output('onSelectedItem') onSelectedItem=new EventEmitter<any>();

  timemodel: AppTime = new AppTime;
  minuteRegex: RegExp= /^[0-5][0-9]$/;
  hourRegex: RegExp= /^(10|11|12|[1-9])$/;

  constructor() { }

  ngOnInit(): void {
    if(this.model != null && this.model != undefined && this.model != ''){
      this.timemodel = AppTime.fromString(this.model);
    }
  }


  updateParent(){
    this.model = this.timemodel.toString();
    this.onSelectedItem.emit(this.model);
  }
}
