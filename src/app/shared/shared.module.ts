import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import {RouterModule} from '@angular/router';
import { LeftBarComponent } from './components/menu/left-bar/left-bar.component';
import { RightBarComponent } from './components/menu/right-bar/right-bar.component';



@NgModule({
  declarations: [HeaderComponent, ColumnOneComponent,LeftBarComponent,
    RightBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ColumnOneComponent,
    
  ]
})
export class SharedModule { }
