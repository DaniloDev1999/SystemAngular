import { TableComponent } from './table/table.component';
import { AdressComponent } from './adress/adress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'painel',component: DashboardComponent},
  {path:'cadastrar',component : AdressComponent},
  {path:'listar',component: TableComponent},
  {path:'',pathMatch:'full',redirectTo:'painel'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
