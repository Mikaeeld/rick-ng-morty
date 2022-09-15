import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GetCharactersGQL } from '../services/rickAndMortyGraphql.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  public characters$;
  constructor(private characterService: GetCharactersGQL) {
    this.characters$ = this.characterService.fetch().pipe(map(result => result.data.characters));
  }

  ngOnInit(): void {}
}
