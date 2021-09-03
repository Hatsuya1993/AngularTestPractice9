import { browser } from 'protractor';
import {Home} from '../pageObject/home'

describe('Home Page e2e', async  () => {

    beforeEach(async() => {
        browser.waitForAngularEnabled(false);
        let home = new Home()
        await home.website
    })

    afterEach(async () => {
        await browser.close()
    })

    it('Check if the correct website is loaded through the link', async () => {
        expect(await browser.getCurrentUrl()).toContain("index")
    })

    it('Check if the total number of items displayed is correct on 1 page', async () => {
        browser.waitForAngularEnabled(false);
        let home = new Home()
        let elementsResults = await home.countTheNumberOfElements(home.allItems)
        expect(elementsResults.count()).toBe(9)
    })

    it('Check the numbers of items matches when phones is selected', async () => {
        let home = new Home()
        await home.clickOptions(home.phoneButtton)
        let elementsResults = await home.countTheNumberOfElements(home.allItems)
        expect(elementsResults.count()).toBe(7)
    })

    it('Check the numbers of items matches when laptop is selected', async () => {
        let home = new Home()
        await home.clickOptions(home.laptopButton)
        let elementsResults = await home.countTheNumberOfElements(home.allItems)
        expect(elementsResults.count()).toBe(6)
    })

    it('Check the numbers of items matches when monitors is selected', async () => {
        let home = new Home()
        await home.clickOptions(home.monitorsButton)
        let elementsResults = await home.countTheNumberOfElements(home.allItems)
        expect(elementsResults.count()).toBe(2)
    })

    it('Check if the modal is displayed when the contact button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDisplayed(home.contactButton)
        expect(results).toBeTruthy()
    })

    it('Check if the modal is displayed when the about us button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDisplayed(home.aboutUsButton)
        expect(results).toBeTruthy()
    })

    it('Check if the modal is displayed when the login button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDisplayed(home.loginButton)
        expect(results).toBeTruthy()
    })
    
    it('Check if the modal is displayed when the about us button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDisplayed(home.signUp)
        expect(results).toBeTruthy()
    })

    it('Check for the popup message after sending message from contact button', async () => {
        let home = new Home()
        await home.contactFlow({email : "test@test.com", name : "testName", message : "testMessage"})
        await browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("Thanks for the message!!")
        })
        await browser.switchTo().alert().accept()
    })

    it('Check the url when user is redirected to the cart website', async () => {
        let home = new Home()
        await home.cartButton.click()
        expect(await browser.getCurrentUrl()).toContain("cart")
    })

    it('Check the popup when no login details are added', async () => {
        let home = new Home()
        await home.loginFlow({name: "", password: ""});
        await browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("Please fill out Username and Password.")
        })
        await browser.switchTo().alert().accept()
    })
})
