import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { HomeComponent } from '../../pages/home/home.component';
import { TendersComponent } from 'src/app/pages/tenders/tenders.component';
import { MessagesComponent } from 'src/app/pages/messages/messages.component';
import { FavoritesComponent } from 'src/app/pages/favorites/favorites.component';
import { HistoryComponent } from 'src/app/pages/history/history.component';
import { CatalogComponent } from 'src/app/pages/catalog/catalog.component';
import { QuotationsComponent } from 'src/app/pages/quotations/quotations.component';
import { InsightsComponent } from 'src/app/pages/insights/insights.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tenders', component: TendersComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'quotations', component: QuotationsComponent },
  { path: 'insights', component: InsightsComponent }
];
