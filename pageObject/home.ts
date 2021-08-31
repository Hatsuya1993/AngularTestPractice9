import {$, browser, $$, ElementArrayFinder, protractor, ElementFinder, element, by} from 'protractor'

export class Home {

    until = protractor.ExpectedConditions;

    website : any = browser.get("https://www.demoblaze.com/index.html")
    allItems : ElementArrayFinder = $$("#tbodyid .card")
    homeButton : ElementFinder = element(by.linkText("Home "))
    contactButton : ElementFinder = element(by.linkText("Contact"))
    aboutUsButton : ElementFinder = element(by.linkText("About us"))
    cartButton : ElementFinder = element(by.linkText("Cart"))
    loginButton : ElementFinder = element(by.linkText("Log in"))
    signUp : ElementFinder = element(by.linkText("Sign up"))
    phoneButtton : ElementFinder = element(by.linkText("Phones"))
    laptopButton : ElementFinder = element(by.linkText("Laptops"))
    monitorsButton : ElementFinder = element(by.linkText("Monitors"))
    modal : ElementFinder = $(".modal-dialog")



    countTheNumberOfElements(data : ElementArrayFinder | any) {
        browser.wait(this.until.presenceOf(data), 3000, 'Element taking too long to appear in the DOM')
        return data
    }

    async clickOptions(data: ElementFinder | any) {
        await data.click()
        await browser.sleep(3000)
    }

    async modalIsDiaplayed(data : ElementFinder) : Promise<boolean> {
        await data.click()
        browser.wait(this.until.presenceOf(this.modal), 3000, 'Modal taking too long to appear in the DOM')
        return true
    }


}