import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistoryPageComponent } from './history-page/history-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PastSearchComponent } from './past-search/past-search.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'history-page',
      },
      {
        path: 'history-page',
        component: HistoryPageComponent,
        data: {
          title: 'History',
        },
      },
      {
        path: 'search-page',
        component: SearchPageComponent,
        data: {
          title: 'Search',
        },
      },
      {
        path: 'past-search-page',
        component: PastSearchComponent,
        data: {
          title: 'Past-Search'
        }
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}

