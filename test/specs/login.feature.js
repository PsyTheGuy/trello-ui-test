import LoginPage from '../pageobjects/login.page'
import HeaderPage from '../pageobjects/header.page'
import { secrets } from '../configs/environment.conf'
import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { browser } from 'globals'

describe('Login Feature', () => {
  beforeEach(async () => await LoginPage.open('login'))

  describe('Scenario: The user attempts to log in with invalid username', () => {
    describe('Given the Login page is open in the browser', () => {
      describe('When the user enters an invalid username', () => {
        it("Then the 'Sign up to continue' message should appear", async () => {
          await LoginPage.enterUsername(secrets.INVALID_USERNAME)

          await browser.waitUntil(
            async () => {
              const initial = 'Log in to continue'
              const current = await LoginPage.messageAction.getText()

              return current != initial
            },
            {
              timeout: 5000,
              timeoutMsg: 'Expected message did not appear',
            }
          )

          const expected = 'Sign up to continue'
          const actual = await LoginPage.messageAction.getText()

          expect(actual).to.be.equal(expected)
        })
      })
    })
  })

  describe('Scenario: The user attempts to log in with invalid password', () => {
    describe('Given the Login page is open in the browser', () => {
      describe('When the user enters an invalid username', () => {
        it('Then an error message should appear', async () => {
          await LoginPage.enterUsername(secrets.VALID_USERNAME)
          await LoginPage.enterPassword(secrets.INVALID_PASSWORD)

          expect(LoginPage.messageError).to.exist
        })
      })
    })
  })

  describe('Scenario: The user attempts to log in with valid credentials', () => {
    describe('Given the Login page is open in the browser', () => {
      describe('When the user enter valid credentials', () => {
        it('Then the user should be forwarded to the boards page', async () => {
          await LoginPage.enterUsername(secrets.VALID_USERNAME)
          await LoginPage.enterPassword(secrets.VALID_PASSWORD)

          expect(HeaderPage.buttonCreateMenu).to.exist
        })
      })
    })
  })
})
