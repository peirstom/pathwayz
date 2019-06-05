import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../../pages/home/home.component';
import { TendersComponent } from 'src/app/pages/tenders/tenders.component';
import { MessagesComponent } from 'src/app/pages/messages/messages.component';
import { FavoritesComponent } from 'src/app/pages/favorites/favorites.component';
import { HistoryComponent } from 'src/app/pages/history/history.component';
import { CatalogComponent } from 'src/app/pages/catalog/catalog.component';
import { QuotationsComponent } from 'src/app/pages/quotations/quotations.component';
import { InsightsComponent } from 'src/app/pages/insights/insights.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SearchComponent } from '../../pages/search/search.component';
import { SpinnerModule } from '../../components/shared/spinner/spinner.module';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';
import { ProductCardModule } from '../../pages/product-card/product-card.module';
import { SupplierCardModule } from '../../pages/supplier-card/supplier-card.module';
import { SupplierComponent } from '../../pages/supplier/supplier.component';
import { ProductComponent } from 'src/app/pages/product/product.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ComponentsModule,
    SpinnerModule,
    ProductCardModule,
    SupplierCardModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    HomeComponent,
    TendersComponent,
    MessagesComponent,
    FavoritesComponent,
    HistoryComponent,
    CatalogComponent,
    QuotationsComponent,
    InsightsComponent,
    SearchComponent,
    NotFoundComponent,
    SupplierComponent,
    ProductComponent
  ]
})

export class AdminLayoutModule {}
