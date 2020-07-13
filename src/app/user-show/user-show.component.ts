import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';
import {UserInterface} from '../interfaces/user.interface';
import {UserClass} from '../classes/user.class';

@Component({
    selector: 'app-user-show',
    templateUrl: './user-show.component.html',
    styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
    public userCurrent: UserInterface;
    constructor(
        private usersService: UsersService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.userCurrent = new UserClass();
        this.route.params.subscribe(
            (p) => {
                this.userCurrent = this.usersService.getUser(+p.id);
            }
        );
    }

}
