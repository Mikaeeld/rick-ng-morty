import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { EpisodeComponent } from './episode/episode.component';
import { LocationComponent } from './location/location.component';
import { SavedCharactersComponent } from './saved-characters/saved-characters.component';

const routes: Routes = [
  { path: '', redirectTo: 'characters/1', pathMatch: 'full' },
  { path: 'characters/:id', component: CharacterListComponent },
  { path: 'saved', component: SavedCharactersComponent },
  { path: 'location/:id', component: LocationComponent },
  { path: 'episode/:id', component: EpisodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
