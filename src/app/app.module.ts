import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UsersService} from './services/users.service';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserComponent,
        UserDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        UsersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}