import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { SignupComponent } from './components/signup/signup.component';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule, // Import du module AppRoutingModule
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ajout de la propriété schemas
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export { routes };
