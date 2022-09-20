import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { GetCharactersGQL } from '../services/rickAndMortyGraphql.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  public characters$;
  public page: number = 1;
  public characters: number = 20;
  constructor(
    private route: ActivatedRoute,
    private characterService: GetCharactersGQL,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.page = +params['id'];
      this.getCharacters();
    });
    this.characters$ = this.characterService
      .fetch({ page: this.page })
      .pipe(map((result) => result.data.characters));
  }

  getCharacters() {
    this.characters$ = this.characterService
      .fetch({ page: this.page })
      .pipe(map((result) => result.data.characters));
  }

  ngOnInit(): void {}
}
