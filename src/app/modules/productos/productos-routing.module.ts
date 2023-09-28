import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { HeavymetalComponent } from './pages/heavymetal/heavymetal.component';
import { DeathmetalComponent } from './pages/deathmetal/deathmetal.component';
import { ThrashmetalComponent } from './pages/thrashmetal/thrashmetal.component';

const routes: Routes = [
  {
    path:"productos",component:ProductosComponent
  },

  {
    path:"heavymetal", component:HeavymetalComponent
  },

  {
    path:"deathmetal", component:DeathmetalComponent
  },

  {
    path:"thrashmetal", component:ThrashmetalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
