import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterService } from '../services/filter.service';
import { FilterCharacter } from '../services/rickAndMortyGraphql.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  filter: FilterCharacter = {};
  filter$ = new Observable<FilterCharacter>();
  @Output() filterChange = new EventEmitter<FilterCharacter>();
  statuses: string[] = ['Alive', 'Dead', 'unknown'];
  characterStatus: string = '';

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.filter$ = this.filterService.getFilter();
    this.filter$.subscribe((filter) => {
      this.filter = filter;
    });
  }

  ngOnDestroy(): void {
  }

  setName(event: any) {
    this.filter.name = event.target.value;
    this.filterService.setFilter(this.filter);
  }

  setStatus(event: any) {
    this.filter.status = event.value;
    this.filterService.setFilter(this.filter);
  }
}
