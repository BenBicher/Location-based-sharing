import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [AuthGuard],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }