import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserShowComponent} from "./user-show/user-show.component";

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'users',
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'users/new',
        component: UserDetailComponent
    },
    {
        path: 'users/:id/edit',
        component: UserDetailComponent
    },
    {
        path: 'users/:id',
        component: UserShowComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
