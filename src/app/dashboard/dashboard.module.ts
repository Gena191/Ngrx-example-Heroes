import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {DashboardSmartComponent} from "./dashboard-smart.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSmartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [DashboardSmartComponent],
  entryComponents: [DashboardSmartComponent],
  bootstrap: [DashboardSmartComponent],
  providers: []
})
export class DashboardModule {
}
