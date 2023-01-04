import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityComponent } from './entity.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './store';

@NgModule({
  declarations: [
    EntityComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers })
  ],
  exports: [EntityComponent]
})
export class EntityModule { }
