import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { PlaylistComponent } from './playlist.component';

const routes: Routes = [
  { path: '', component: PlaylistComponent },
  { path: 'details', component: PlaylistDetailsComponent },
  { path: 'create', component: CreatePlaylistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
