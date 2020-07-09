import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../services/users.service';
import {UserClass} from '../classes/user.class';

@Component({
    selector: 'tr[app-user]',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    @Input() user: UserClass;
    @Output() userDeleted: EventEmitter<any> = new EventEmitter();
    @Output() userSelected: EventEmitter<any> = new EventEmitter();

    constructor(
        private _service: UsersService
    ) {
    }

    ngOnInit(): void {
    }

    deleteUser() {
        this.userDeleted.emit(this.user);
    }

    updateUser() {
        this.userSelected.emit(this.user);

    }

}
