import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time-picker';
  disabled = true;
  required = true;
  model1: string = '';
  model2: string = '';
  model3: string = '10:15AM'
  model4: string = '';
}
