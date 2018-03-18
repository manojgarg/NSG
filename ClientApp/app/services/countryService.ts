
import { Injectable } from '@angular/core';
import { Country,State, City } from '../models/index';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {
  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' )
    ];
  }
  
  getStates() {
   return [
     new State(1, 1, 'Arizona' ),
     new State(2, 1, 'Alaska' ),
     new State(3, 1, 'Florida'),
     new State(4, 1, 'Hawaii'),
     new State(5, 2, 'Gujarat' ),
     new State(6, 2, 'Goa'),
     new State(7, 2, 'Punjab' ),
     new State(8, 3, 'Queensland' ),
     new State(9, 3, 'South Australia' ),
     new State(10, 3, 'Tasmania')
    ];
  }


   getCities() {
   return [
     new City(1, 1, 'City Arizona' ),
     new City(2, 2, 'City Alaska' ),
     new City(3, 3, 'City Florida'),
     new City(4, 4, 'City Hawaii'),
     new City(5, 5, 'City Gujarat' ),
     new City(6, 6, 'City Goa'),
     new City(7, 7, 'City Punjab' ),
     new City(8, 8, 'City Queensland' ),
     new City(9, 9, 'City South Australia' ),
     new City(10, 10, 'City Tasmania')
    ];
  }
}
