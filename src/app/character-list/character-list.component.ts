import { ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { SearchComponent } from '../search/search.component';
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
  constructor(
    private route: ActivatedRoute,
    private characterService: GetCharactersGQL,
    private savedCharacterService: SavedCharactersService,
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

  filterChanged($event: FilterCharacter) {
    this.filter = Object.assign({}, $event);
    this.getCharacters(this.filter);
  }

  saveCharacter(character: Character | null) {
    if (character) {
      this.savedCharacterService.addCharacter(character);
    }
  }

  ngOnInit(): void {}
}
