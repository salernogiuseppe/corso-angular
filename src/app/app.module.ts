import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UsersService} from './users/users.service';
import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        UsersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
