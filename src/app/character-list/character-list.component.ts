import { ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CharacterComponent } from '../character/character.component';
import { SearchComponent } from '../search/search.component';
import { FilterService } from '../services/filter.service';
import {
  Character,
  FilterCharacter,
  GetCharactersGQL,
} from '../services/rickAndMortyGraphql.service';
import { SavedCharactersService } from '../services/savedCharacters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  public characters$;
  public page: number = 1;
  public characters: number = 20;
  public filter: FilterCharacter = {};
  filter$ = new Observable<FilterCharacter>();
  constructor(
    private route: ActivatedRoute,
    private characterService: GetCharactersGQL,
    private savedCharacterService: SavedCharactersService,
    public dialog: MatDialog,
    private filterService: FilterService
  ) {
    this.route.params.subscribe((params) => {
      this.page = +params['id'];
      this.getCharacters(this.filter);
    });
    this.characters$ = this.characterService
      .fetch({ page: this.page, filter: this.filter })
      .pipe(map((result) => result.data.characters));
  }

  getCharacters(filter?: FilterCharacter) {
    this.characters$ = this.characterService
      .fetch({ page: this.page, filter: filter })
      .pipe(map((result) => result.data.characters));
  }

  saveCharacter(character: Character | null) {
    if (character) {
      this.savedCharacterService.addCharacter(character);
    }
  }

  openDialog(id: string | null | undefined) {
    this.dialog.open(CharacterComponent, { data: { id: id } });
  }

  ngOnInit(): void {
    this.filter$ = this.filterService.getFilter();
    this.filter$.subscribe((filter) => {
      this.filter = filter;
      this.getCharacters(this.filter);
    });
  }
}
