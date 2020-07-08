import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
    title = 'Users';
    users = [];

    constructor(
        private _service: UsersService
    ) {
    }

    ngOnInit() {
        this.users = this._service.getUsers();
    }
}
