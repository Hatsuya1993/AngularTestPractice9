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
        let elementsResults = home.countTheNumberOfElements(home.allItems)
        expect(elementsResults.count()).toBe(9)
    })

    it('Check the numbers of items matches when phones is selected', async () => {
        let home = new Home()
        await home.clickOptions(home.phoneButtton)
        let elementsResults = home.countTheNumberOfElements(home.allItems)
        expect(elementsResults.count()).toBe(7)
    })

    it('Check the numbers of items matches when laptop is selected', async () => {
        let home = new Home()
        await home.clickOptions(home.laptopButton)
        let elementsResults = home.countTheNumberOfElements(home.allItems)
        expect(elementsResults.count()).toBe(6)
    })

    it('Check the numbers of items matches when monitors is selected', async () => {
        let home = new Home()
        await home.clickOptions(home.monitorsButton)
        let elementsResults = home.countTheNumberOfElements(home.allItems)
        expect(elementsResults.count()).toBe(2)
    })

    it('Check if the modal is displayed when the contact button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDiaplayed(home.contactButton)
        expect(results).toBeTruthy()
    })

    it('Check if the modal is displayed when the about us button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDiaplayed(home.aboutUsButton)
        expect(results).toBeTruthy()
    })

    it('Check if the modal is displayed when the login button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDiaplayed(home.loginButton)
        expect(results).toBeTruthy()
    })
    
    fit('Check if the modal is displayed when the about us button is pressed', async () => {
        let home = new Home()
        let results = await home.modalIsDiaplayed(home.signUp)
        expect(results).toBeTruthy()
    })
})
