import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import {
  Character,
  GetCharacterGQL,
} from '../services/rickAndMortyGraphql.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  public id: number = 1;
  public character: Character = {};

  constructor(
    private route: ActivatedRoute,
    private getCharacter: GetCharacterGQL,
    @Inject(MAT_DIALOG_DATA) public data: { id: string | null | undefined }
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.id = +params['id'];
    //   this.getCharacter
    //     .fetch({ id: this.id.toString() })
    //     .subscribe((result) => {
    //       if (result.data.character) {
    //         this.character = result.data.character;
    //       }
    //     });
    // });
    if (this.data.id) {
      this.getCharacter.fetch({ index: this.data.id }).subscribe((result) => {
        if (result.data.character) {
          this.character = result.data.character;
        }
      });
    }
  }
}
