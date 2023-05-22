import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfilComponent } from './components/edit_profil/edit_profil.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { EditImageComponent } from './components/edit_image/edit_image.component';
import { AddNewProblemComponent } from './components/add-new-problem/add-new-problem.component';
import { ShowProblemDetailsComponent } from './components/show-problem-details/show-problem-details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { StudentGuard } from './student.guard';
import { WorkerGuard } from './worker.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent ,canActivate:[AuthGuard]},
  { path: 'edit_profil', component: EditProfilComponent ,canActivate:[AuthGuard]},
  { path: 'user', component: BoardUserComponent ,canActivate:[StudentGuard]},
  { path: 'worker', component: BoardModeratorComponent ,canActivate:[WorkerGuard]},
  { path: 'admin', component: BoardAdminComponent, canActivate:[AdminGuard] },
  { path: 'users', component: UserListComponent,canActivate:[AdminGuard] },
  { path: 'edit_image', component: EditImageComponent,canActivate:[AuthGuard] },
  { path: 'addProblem', component: AddNewProblemComponent ,canActivate:[AuthGuard]},
  { path: 'showProblemDetails', component: ShowProblemDetailsComponent,canActivate:[AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
