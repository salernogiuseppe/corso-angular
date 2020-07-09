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

    updateUser(user: UserClass) {
        this.userSelected = user;
        this.showForm = true;
    }

    newUser() {
        this.userSelected = new UserClass();
        this.showForm = true;
    }
}
