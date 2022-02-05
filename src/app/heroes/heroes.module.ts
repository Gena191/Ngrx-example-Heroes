import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HeroesSmartComponent} from "./heroes-smart.component";
import {HeroesComponent} from "./heroes.component";


@NgModule({
  declarations: [
    HeroesComponent,
    HeroesSmartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [HeroesSmartComponent],
  entryComponents: [HeroesSmartComponent],
  bootstrap: [HeroesSmartComponent],
  providers: []
})
export class HeroesModule {
}
