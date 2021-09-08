import {$, browser, $$, ElementArrayFinder, protractor, ElementFinder, element, by} from 'protractor'


interface contactInfo {
    email: string;
    name: string;
    message: string;
}

interface loginSignUpInfo {
    name: string;
    password: string;
}

var until = protractor.ExpectedConditions;

export class Home {

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
    contactEmail : ElementFinder = $("#recipient-email")
    contactName : ElementFinder = $("#recipient-name")
    contactMessage : ElementFinder = $("#message-text")
    contactButtonForm : ElementFinder = element(by.buttonText("Send message"))
    loginName : ElementFinder = $("#loginusername")
    loginPassword : ElementFinder = $("#loginpassword")
    loginButtonConfirm : ElementFinder = element(by.buttonText("Log in"))
    signUpUsername : ElementFinder = $("#sign-username")
    signUpPassword : ElementFinder = $("#sign-password")
    signUpButtonConfirm : ElementFinder = element(by.buttonText("Sign up"))
    welcomeUser : ElementFinder = $("#nameofuser")

    async countTheNumberOfElements(data : ElementArrayFinder | any) {
        await browser.sleep(3000)
        return await data.count()
    }

    async clickOptions(data: ElementFinder | any) {
        await data.click()
        await browser.sleep(10000)
    }

    async modalIsDisplayed(data : ElementFinder) : Promise<boolean> {
        await data.click()
        await browser.wait(until.presenceOf(this.modal), 5000)
        return true
    }

    async contactFlow(data: contactInfo) {
        await this.contactButton.click()
        await browser.sleep(3000);
        await browser.wait(until.presenceOf(this.contactEmail), 5000, 'contactEmail taking too long to appear in the DOM')
        await this.contactEmail.sendKeys(data.email)
        await browser.wait(until.presenceOf(this.contactName), 5000, 'contactName taking too long to appear in the DOM')
        await this.contactName.sendKeys(data.name)
        await browser.wait(until.presenceOf(this.contactMessage), 5000, 'contactMessage taking too long to appear in the DOM')
        await this.contactMessage.sendKeys(data.message)
        await this.contactButtonForm.click()
        await browser.sleep(3000);
    }

    async loginFlow(data: loginSignUpInfo) {
        await this.loginButton.click()
        await browser.sleep(3000);
        await browser.wait(until.presenceOf(this.loginName), 5000, 'loginName taking too long to appear in the DOM')
        await this.loginName.sendKeys(data.name)
        await browser.wait(until.presenceOf(this.loginPassword), 5000, 'loginPassword taking too long to appear in the DOM')
        await this.loginPassword.sendKeys(data.password)
        await this.loginButtonConfirm.click()
        await browser.sleep(3000);
    }

    async signUpFlow(data: loginSignUpInfo){
        await this.signUp.click()
        await browser.sleep(3000);
        await browser.wait(until.presenceOf(this.signUpUsername), 5000, 'signUpUsername taking too long to appear in the DOM')
        await this.signUpUsername.sendKeys(data.name)
        await browser.wait(until.presenceOf(this.signUpPassword), 5000, 'signUpPassword taking too long to appear in the DOM')
        await this.signUpPassword.sendKeys(data.password)
        await this.signUpButtonConfirm.click()
        await browser.sleep(3000);
    }

}