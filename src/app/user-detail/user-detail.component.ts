import {Component, Input, OnInit} from '@angular/core';
import {UserClass} from '../classes/user.class';
import {UsersService} from '../services/users.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    private userCopy: UserClass;
    // tslint:disable-next-line:variable-name
    private __user: UserClass;
    @Input() set user(user: UserClass) {
        this.__user = user;
        this.userCopy = Object.assign({}, user);
    }
    get user() {
        // tslint:disable-next-line:no-unused-expression
        return this.__user;
    }

    constructor(
        private _userService: UsersService
    ) {
    }

    ngOnInit(): void {
    }

    saveUser(form) {
        if (this.user.id > 0) {
            this._userService.updateUser(this.user);
        } else {
            this._userService.createUser(this.user);
        }
        this.resetForm(form);
    }

    resetForm(form) {
        if (this.user.id === 0) {
            this.user = new UserClass();
        } else {
            this.__user = this.userCopy;
        }
    }

}
