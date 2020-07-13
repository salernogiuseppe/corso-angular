import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UsersService} from './services/users.service';
import {UserComponent} from './user/user.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import localeIt from '@angular/common/locales/it';
import {UcfirstPipe} from './pipes/ucfirst.pipe';
import { NavComponent } from './nav/nav.component';
import {AppRoutingModule} from './app.routing.module';
import { UserShowComponent } from './user-show/user-show.component';

registerLocaleData(localeIt, 'it-IT');

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserComponent,
        UserDetailComponent,
        UcfirstPipe,
        NavComponent,
        UserShowComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        UsersService,
        {provide: LOCALE_ID, useValue: 'it'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
