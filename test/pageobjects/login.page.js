import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
 
    get messageAction () {
        return $('div[data-testid="header-suffix"]')
    }

    get messageError () {
        return $('section[data-testid="form-error"]')
    }

    get inputUsername () {
        return $('input[data-testid="username"]');
    }

    get inputPassword () {
        return $('input[data-testid="password"]');
    }

    get buttonSubmit () {
        return $('button[type="submit"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();
