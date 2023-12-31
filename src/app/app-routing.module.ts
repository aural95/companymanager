import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SalesComponent } from './components/sales/sales.component';
import { PaymentsComponent } from './components/payments/payments.component';

const routes: Routes = [
  {path: '', redirectTo: 'chat', pathMatch: 'full' },
  {path: 'login', component:LoginComponent },
  {path: 'dashboard', component:DashboardComponent },
  {path: 'employees', component:EmployeesComponent },
  {path: 'sales', component: SalesComponent },
  {path: 'payments', component: PaymentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
