import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../services/users.service';
import {UserInterface} from '../interfaces/user.interface';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
    title = 'Users';
    users: Array<UserInterface> = [];
    @Output() updateUser: EventEmitter<any> = new EventEmitter();

    constructor(
        private _service: UsersService
    ) {
    }

    ngOnInit() {
        this.users = this._service.getUsers();
    }

    onDeleteUser(user) {
        this._service.deleteUser(user);
    }

    onSelectedUser(user: UserInterface) {
        this.updateUser.emit(user);
    }
}
