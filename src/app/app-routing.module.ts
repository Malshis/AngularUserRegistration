import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetusersComponent } from './getusers/getusers.component';
import { UserregisterComponent } from './userregister/userregister.component';

const routes: Routes = [
  {path: 'userRegister', component: UserregisterComponent},
  {path: 'userGet', component: GetusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
