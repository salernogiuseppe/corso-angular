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
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        if (localStorage.getItem('users') === null) {
            this.users = this._service.getUsers();
            localStorage.setItem('users', JSON.stringify(this.users));
        } else {
            this.users = JSON.parse(localStorage.getItem('users'));
        }
    }

    onDeleteUser(user) {
        this._service.deleteUser(user);
        this.saveLocalStorage();
    }

    onSelectedUser(user: UserInterface) {
        const userCopy = Object.assign({}, user);
        this.updateUser.emit(userCopy);
    }
}
