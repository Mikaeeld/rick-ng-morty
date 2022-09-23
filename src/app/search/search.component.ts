import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterCharacter } from '../services/rickAndMortyGraphql.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  private filter: FilterCharacter = {};
  @Output() filterChange = new EventEmitter<FilterCharacter>();
  statuses: string[] = ['Alive', 'Dead', 'unknown'];
  characterStatus: string = '';

  constructor() {}

  ngOnInit(): void {}

  setName(event: any) {
    this.filter.name = event.target.value;
    this.filterChange.emit(this.filter);
  }

  setStatus(event: any) {
    this.filter.status = event.value;
    this.filterChange.emit(this.filter);
  }
}
