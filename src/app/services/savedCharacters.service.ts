import { Injectable } from '@angular/core';
import { Character } from './rickAndMortyGraphql.service';

@Injectable({ providedIn: 'root' })
export class SavedCharactersService {
  savedCharacters: Character[] = [];
  constructor() {}

  addCharacter(character: Character) {
    this.savedCharacters.push(character);
  }
  getCharacters() {
    return this.savedCharacters.slice();
  }

  removeCharacter(id: string | null | undefined) {
    this.savedCharacters = this.savedCharacters.filter(
      (character) => character.id !== id
    );
  }
}
