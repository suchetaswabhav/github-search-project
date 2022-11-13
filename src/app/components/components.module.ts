import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// CoreUI Modules
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';


// views
import { HistoryPageComponent } from './history-page/history-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { DataService } from './data.service'
// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { PastSearchComponent } from './past-search/past-search.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    // DocsComponentsModule,
  ],
  declarations: [
    HistoryPageComponent,
    SearchPageComponent,
    PastSearchComponent
  ],
  providers : [
    DataService
   ]
})
export class ComponentsModule {}
