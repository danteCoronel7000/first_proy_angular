import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { PersonalFormsComponent } from './personal-forms/personal-forms.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { HomeComponent } from './home/home.component';
import { DetailsProductComponent } from './details-product/details-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ListProductsComponent},
  {path: 'forms', component: PersonalFormsComponent},
  {path: 'recuperar clave', component: RecuperarClaveComponent},
  {path: 'product details/:id', component: DetailsProductComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
