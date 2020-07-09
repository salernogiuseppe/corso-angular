import {Injectable} from '@angular/core';
import {UserInterface} from '../interfaces/user.interface';

@Injectable()

export class UsersService {
    users: Array<UserInterface> = [
        {
            name: 'Peppe',
            lastname: 'Salerno',
            email: 'gsalerno@gmail.com',
            fiscalcode: 'SLRGPP54D234M',
            province: 'Palermo',
            phone: '3280762119',
            age: 28,
        },
        {
            name: 'Paolo',
            lastname: 'Ruffo',
            email: 'rufffff@gmail.com',
            fiscalcode: 'PLREFF42D442F',
            province: 'Milano',
            phone: '3402922101',
            age: 22
        },
        {
            name: 'Michele',
            lastname: 'Bonanno',
            email: 'bonn@gmail.com',
            fiscalcode: 'TRESFR45R552F',
            province: 'Napoli',
            phone: '3330229112',
            age: 33
        },
        {
            name: 'Maria',
            lastname: 'Foschi',
            email: 'mariasfo@gmail.com',
            fiscalcode: 'MSFSS31R344R',
            province: 'Padova',
            phone: '3290011011',
            age: 33
        },
    ];

    constructor() {
    }

    getUsers() {
        return this.users;
    }

    deleteUser(user) {
        const index = this.users.indexOf(user);
        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }
}
