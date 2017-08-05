/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   25-07-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-07-2017
*/

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CanvasAreaComponent } from './canvas-area';

@NgModule({
  declarations: [CanvasAreaComponent],
  imports: [IonicModule],
  exports: [CanvasAreaComponent]
})
export class CanvasAreasComponentModule { }
