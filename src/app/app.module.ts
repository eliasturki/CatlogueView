import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { AdminCatComponent } from './admin-cat/admin-cat.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProduitsComponent,
    LoginComponent,
    AdminCatComponent,
    AdminProductComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
