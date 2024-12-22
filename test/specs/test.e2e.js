import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'

describe('When clicking on login button', () => {
    it('should navigate to the login page', async () => {
        await HomePage.open('home')

        await HomePage.click(HomePage.elements.buttonLogin)
        await expect(LoginPage.callForAction).toBeExisting()
        await expect(LoginPage.callForAction).toHaveText(
            expect.stringContaining('Log in to continue'))
    })
})

