import {Component, Input, OnInit} from '@angular/core';
import {UserClass} from '../classes/user.class';
import {UsersService} from '../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    private userCopy;
    // tslint:disable-next-line:variable-name
    private __user;
    @Input() set user(user: UserClass) {
        this.__user = user;
        this.userCopy = Object.assign({}, user);
    }
    get user() {
        // tslint:disable-next-line:no-unused-expression
        return this.__user;
    }

    constructor(
        private _userService: UsersService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.user = new UserClass();
        this.route.params.subscribe(
            (param) => {
                if (!param.id) {
                    return;
                }
                this.user = this._userService.getUser(+param.id);
        });
    }

    saveUser(form) {
        if (this.user.id > 0) {
            this._userService.updateUser(this.user);
        } else {
            this._userService.createUser(this.user);
        }
        this.resetForm(form);
        this.router.navigate(['users']).then(r => console.log(r));
    }

    resetForm(form) {
        if (this.user.id === 0) {
            this.user = new UserClass();
        } else {
            this.__user = this.userCopy;
        }
    }

}
