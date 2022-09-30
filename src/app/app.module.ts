import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CharacterListComponent } from './character-list/character-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationListComponent } from './location-list/location-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './search/search.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SavedCharactersComponent } from './saved-characters/saved-characters.component';
import { MatButtonModule } from '@angular/material/button';
import { CharacterComponent } from './character/character.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    LocationListComponent,
    HeaderComponent,
    PaginatorComponent,
    SearchComponent,
    SavedCharactersComponent,
    CharacterComponent,
    EpisodeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
