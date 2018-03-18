import { Component } from '@angular/core';
import { CountryService } from '../../services/CountryService';
import { Country, State, City,  Astrology } from '../../models/index';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MyDatePicker, IMyDpOptions, MyDatePickerModule} from 'mydatepicker';

@Component({
    selector: 'astro',
    templateUrl: './astro.component.html',
    styleUrls: ['./astro.component.css'],
    providers: [CountryService]
})
export class AstroComponent {

  selectedCountryId:number=0; 
  selectedStateId:number=0;
  selectedCityId:number=0;
  countries: Country[];
  states: State[];
  cities: City[];
  astrology: Astrology;

  myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
 
    // Initialized to specific date (09.10.2018).
    model: any = { date: { year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()  } };

     

   constructor( private _dataService: CountryService) {
    this.countries = this._dataService.getCountries();

    this.astrology = new Astrology();



 
  }






  public onCountrySelect(event):void{


        var countrySelected = this.astrology.countryId;

        if(countrySelected ==0)
            {
                this.states=[];
               
            }
            else
            {
                this.states = this._dataService.getStates().filter((item)=> item.countryid == countrySelected);

            }

            this.astrology.stateId=0;
                 this.cities=[];
                this.astrology.cityId  =0;

 }


  public onStateSelect(event):void{


        var stateSelected =  this.astrology.stateId;

        if(stateSelected ==0)
            {
                 this.cities=[];
                
            }
            else
            {
                this.cities = this._dataService.getCities().filter((item)=> item.stateid == stateSelected);
            }


             this.astrology.cityId  =0;
 }


}
