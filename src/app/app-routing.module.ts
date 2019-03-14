import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {LoginComponent} from './login/login.component';
import {AdminCatComponent} from './admin-cat/admin-cat.component';
import {AdminProductComponent} from './admin-product/admin-product.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';

const routes: Routes = [
  {path:"products/:urlProds",component:ProduitsComponent},
  {path:"login",component:LoginComponent},
  {path:"adminCat",component:AdminCatComponent},
  {path:"adminProducts",component:AdminProductComponent},
  {path:"adminUser",component:AdminUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
