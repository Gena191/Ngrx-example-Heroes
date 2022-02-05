import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HeroSearchComponent} from "./hero-search.component";
import {HeroesSearchSmartComponent} from "./heroes-search-smart.component";


@NgModule({
  declarations: [
    HeroSearchComponent,
    HeroesSearchSmartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [HeroesSearchSmartComponent],
  entryComponents: [HeroesSearchSmartComponent],
  bootstrap: [HeroesSearchSmartComponent],
  providers: []
})
export class HeroesSearchModule {
}
