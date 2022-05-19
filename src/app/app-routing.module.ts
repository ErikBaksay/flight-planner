import { SignInComponent } from './components/sign-in/sign-in.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: FlightSearchComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
