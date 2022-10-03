import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharacterComponent } from '../character/character.component';
import { Character } from '../services/rickAndMortyGraphql.service';
import { SavedCharactersService } from '../services/savedCharacters.service';

@Component({
  selector: 'app-saved-characters',
  templateUrl: './saved-characters.component.html',
  styleUrls: ['./saved-characters.component.css']
})
export class SavedCharactersComponent implements OnInit {
  characters: Character[] = this.savedCharacters.getCharacters();

  constructor(private savedCharacters: SavedCharactersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.characters = this.savedCharacters.getCharacters();
  }

  openDialog(id: string | null | undefined) {
    this.dialog.open(CharacterComponent, { data: { id: id } });
  }

  removeCharacter(id: string | null | undefined) {
    this.savedCharacters.removeCharacter(id);
    this.characters = this.savedCharacters.getCharacters();
  }

}
