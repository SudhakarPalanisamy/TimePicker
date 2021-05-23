import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight, fas, faUser} from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, far } from '@fortawesome/free-regular-svg-icons';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TimePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
    library.addIcons(faUser, faCalendarAlt, faChevronLeft, faChevronRight);
  }

}
