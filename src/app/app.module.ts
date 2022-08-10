import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


import {AccordionModule} from 'primeng/accordion';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FilterPipe } from './components/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    SidebarComponent,
    DetalleComponent,
    FilterPipe,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    AccordionModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
