import {Component} from '@angular/core';
import {UserClass} from './classes/user.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'corso-angular';
    showForm = false;
    userSelected: UserClass = new UserClass();
    price: number;
    birthDate: string;

    updateUser(user: UserClass) {
        this.userSelected = user;
        this.showForm = true;
    }

    newUser() {
        this.userSelected = new UserClass();
        this.showForm = true;
    }
    constructor() {
        this.price = 400501.22;

        this.birthDate = '01/03/2020';
    }
}
