import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { ParentComponent } from './components/parent/parent.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
 
 {path:"user",component :UserComponent},
 {path:"register",component :RegisterComponent},
 {path:"test",component:TestComponent},
 {path:"parent",component:ParentComponent},
 {path:"products",component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
