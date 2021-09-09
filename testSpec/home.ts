import { browser } from 'protractor';
import {Home} from '../pageObject/home'
import {Helper} from '../helper/helper'

describe('Home Page e2e', async  () => {

    let existName = ""
    let existPassword = ""

    beforeEach(async() => {
        browser.waitForAngularEnabled(false);
        let home = new Home()
        await home.website
    })

    it('Check if the correct website is loaded through the link', async () => {
        await browser.getCurrentUrl().then(data => {
            expect(data).toContain("index")
            Helper.logsData(data)
        })
    })

    it('Check if the total number of items displayed is correct on 1 page', async () => {
        let home = new Home()
        let elementsResults = await home.countTheNumberOfElements(home.allItems)
        expect(await elementsResults).toBe(9)
        Helper.logsData("Number of items"+" "+ await elementsResults)

    })

    it('Check the numbers of items matches when phones is selected', async () => {
        let home = new Home()
        await home.clickOptions(home.phoneButtton)
        let elementsResults = await home.countTheNumberOfElements(home.allItems)
        expect(elementsResults).toBe(7)
        Helper.logsData("Number of items"+" "+ await elementsResults)
    })

    it('Check the numbers of items matches when laptop is selected', async () => {
        let home = new Home()
        await home.clickOptions(home.laptopButton)
        let elementsResults = await home.countTheNumberOfElements(home.allItems)
        expect(elementsResults).toBe(6)
        Helper.logsData("Number of items"+" "+ await elementsResults)
    })

    it('Check the numbers of items matches when monitors is selected', async () => {
        let home = new Home()
        await home.clickOptions(home.monitorsButton)
        let elementsResults = await home.countTheNumberOfElements(home.allItems)
        expect(elementsResults).toBe(2)
        Helper.logsData("Number of items"+" "+ await elementsResults)
    })

    it('Check if the modal is displayed when the contact button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDisplayed(home.contactButton)
        expect(results).toBeTruthy()
        Helper.logsData("modal is displayed when contact button pressed"+" "+ await results)
    })

    it('Check if the modal is displayed when the about us button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDisplayed(home.aboutUsButton)
        expect(results).toBeTruthy()
        Helper.logsData("modal is displayed when about us button pressed"+" "+ await results)
    })

    it('Check if the modal is displayed when the login button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDisplayed(home.loginButton)
        expect(results).toBeTruthy()
        Helper.logsData("modal is displayed when login button pressed"+" "+ await results)
    })
    
    it('Check if the modal is displayed when the sign up button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDisplayed(home.signUp)
        expect(results).toBeTruthy()
        Helper.logsData("modal is displayed when sign up button pressed"+" "+ await results)
    })

    it('Check for the popup message after sending message from contact button', async () => {
        let home = new Home()
        await home.contactFlow({email : "test@test.com", name : "testName", message : "testMessage"})
        await browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("Thanks for the message!!")
            Helper.logsData("sending message from contact button"+" "+ data)
        })
        await browser.switchTo().alert().accept()
    })

    it('Check the url when user is redirected to the cart website', async () => {
        let home = new Home()
        await home.cartButton.click()
        expect(await browser.getCurrentUrl()).toContain("cart")
        Helper.logsData(await browser.getCurrentUrl())
    })

    it('Check the popup when no login details are added', async () => {
        let home = new Home()
        await home.loginFlow({name: "", password: ""});
        await browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("Please fill out Username and Password.")
            Helper.logsData("No login details are added"+" "+ data)
        })
        await browser.switchTo().alert().accept()
    })

    it('Check the popup when there is login info passed', async () => {
        let home = new Home()
        await home.loginFlow({name: "testName", password: "testPassword"});
        await browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("User does not exist.")
            Helper.logsData("Login details are added"+" "+ data)
        })
        await browser.switchTo().alert().accept()
    })

    it('Check the popup when this is no signup info', async () => {
        let home = new Home()
        await home.signUpFlow({name: "", password: ""})
        await browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("Please fill out Username and Password.")
            Helper.logsData("Signup details are not added"+" "+ data)
        })
        await browser.switchTo().alert().accept()
    })

    it('Check the popup when this is signup info', async () => {
        let home = new Home()
        existName = "testName"+Math.random()
        existPassword = "testPassword"+Math.random()
        await home.signUpFlow({name: existName, password: existPassword})
        await browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("Sign up successful.")
            Helper.logsData("Signup details are added"+" "+ data)
        })
        await browser.switchTo().alert().accept()
    })

    it('Check the popup when users details are passes', async () => {
        let home = new Home()
        await home.loginFlow({name: existName, password: existPassword})
        expect(await home.welcomeUser.getText()).toBe("Welcome "+existName)
    })

    it('Check after user logs out, button should be login now', async () => {
        let home = new Home()
        await home.loginFlow({name: existName, password: existPassword})
        await home.logoutUser.click()
        expect(await home.loginButton.getText()).toBe("Log in")
    })

    it('Check if the wrong details are passed in for user', async () => {
        let home = new Home()
        await home.loginFlow({name: "wrong", password: "wrong"});
        await browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("User does not exist.")
            Helper.logsData("Login details are added"+" "+ data)
        })
        await browser.switchTo().alert().accept()
    })

})
