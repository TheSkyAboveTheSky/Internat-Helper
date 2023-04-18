import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponentComponent } from './components/user-list-component/user-list-component.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'',component:UserListComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }