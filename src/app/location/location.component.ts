import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CharacterComponent } from '../character/character.component';
import {
  GetLocationGQL,
  Location,
} from '../services/rickAndMortyGraphql.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  constructor(
    private getLocation: GetLocationGQL,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {}

  public location: Location = {};

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getLocation.fetch({ id: params['id'] }).subscribe((result) => {
        if (result.data.location) {
          this.location = result.data.location;
        }
      });
    });
  }

  openCharacterDialog(id: string | null | undefined) {
    this.dialog.open(CharacterComponent, { data: { id: id } });
  }
}
