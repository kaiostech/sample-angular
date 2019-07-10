import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent, InputComponent, TodoComponent, SoftkeyComponent
} from './components';

const allComponents = [
  HeaderComponent,
  InputComponent,
  TodoComponent,
  SoftkeyComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: allComponents,
  exports: allComponents
})

export class SharedModule { }
