import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { FilterCharacter, GetCountsGQL,  } from '../services/rickAndMortyGraphql.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() filterClear = new EventEmitter<FilterCharacter>();
  constructor() {}

  clearFilter() {
    this.filterClear.emit({});
  }

  ngOnInit(): void {}
}
