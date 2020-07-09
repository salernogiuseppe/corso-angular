import {Component} from '@angular/core';
import {UserInterface} from './interfaces/user.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'corso-angular';

    userSelected: UserInterface;
    updateUser(user: UserInterface) {
        this.userSelected = user;
    }
}
