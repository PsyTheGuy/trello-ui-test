import { $ } from '@wdio/globals';
import Page from "./page";

class HomePage extends Page {

  elements = {
    loginBtn: 'login'
  }

  get loginBtn () {
    return $('a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]')
  }

  async click(element) {
    
    switch (element) {
      case 'login':
        await this.loginBtn.click();
        break;
      default:
        console.error('HomePage click requires an element as arg.')
        break;
    }
  }
}

export default new HomePage();