import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from '../interfaces/user.interface';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    @Input() user: UserInterface;

    constructor() {
    }

    ngOnInit(): void {
    }

}
