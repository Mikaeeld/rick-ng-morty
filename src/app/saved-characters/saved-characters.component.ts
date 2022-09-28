import { Component, OnInit } from '@angular/core';
import { Character } from '../services/rickAndMortyGraphql.service';
import { SavedCharactersService } from '../services/savedCharacters.service';

@Component({
  selector: 'app-saved-characters',
  templateUrl: './saved-characters.component.html',
  styleUrls: ['./saved-characters.component.css']
})
export class SavedCharactersComponent implements OnInit {
  characters: Character[] = this.savedCharacters.getCharacters();

  constructor(private savedCharacters: SavedCharactersService) { }

  ngOnInit(): void {
    this.characters = this.savedCharacters.getCharacters();
  }

}
