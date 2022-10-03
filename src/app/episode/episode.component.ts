import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CharacterComponent } from '../character/character.component';
import { Episode, GetEpisodeGQL } from '../services/rickAndMortyGraphql.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  constructor(
    private getEpisode: GetEpisodeGQL,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {}

  public episode: Episode = {};

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getEpisode.fetch({ id: params['id'] }).subscribe((result) => {
        if (result.data.episode) {
          this.episode = result.data.episode;
        }
      });
    });
  }

  openCharacterDialog(id: string | null | undefined) {
    this.dialog.open(CharacterComponent, { data: { id: id } });
  }

}
