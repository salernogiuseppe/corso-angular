import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UsersService} from './services/users.service';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { UcfirstPipe } from './pipes/ucfirst.pipe';

registerLocaleData(localeIt, 'it-IT');

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserComponent,
        UserDetailComponent,
        UcfirstPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        UsersService,
        { provide: LOCALE_ID, useValue: 'it' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
