import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { SmartlvoperswSharedModule, UserRouteAccessService } from './shared';
import { SmartlvoperswAppRoutingModule} from './app-routing.module';
import { SmartlvoperswHomeModule } from './home/home.module';
import { SmartlvoperswAdminModule } from './admin/admin.module';
import { SmartlvoperswAccountModule } from './account/account.module';
import { SmartlvoperswEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        SmartlvoperswAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SmartlvoperswSharedModule,
        SmartlvoperswHomeModule,
        SmartlvoperswAdminModule,
        SmartlvoperswAccountModule,
        SmartlvoperswEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SmartlvoperswAppModule {}
