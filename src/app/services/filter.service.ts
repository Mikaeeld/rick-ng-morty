import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Character, FilterCharacter } from './rickAndMortyGraphql.service';

@Injectable({ providedIn: 'root' })
export class FilterService {
  filter = new BehaviorSubject<FilterCharacter>({});

  setFilter(filter: FilterCharacter) {
    this.filter.next(filter);
  }

  getFilter() {
    return this.filter.asObservable();
  }

  clearFilter() {
    this.filter.next({});
  }
}
