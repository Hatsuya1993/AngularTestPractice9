"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const protractor_1 = require("protractor");
var until = protractor_1.protractor.ExpectedConditions;
class Home {
    constructor() {
        this.website = protractor_1.browser.get("https://www.demoblaze.com/index.html");
        this.allItems = protractor_1.$$("#tbodyid .card");
        this.homeButton = protractor_1.element(protractor_1.by.linkText("Home "));
        this.contactButton = protractor_1.element(protractor_1.by.linkText("Contact"));
        this.aboutUsButton = protractor_1.element(protractor_1.by.linkText("About us"));
        this.cartButton = protractor_1.element(protractor_1.by.linkText("Cart"));
        this.loginButton = protractor_1.element(protractor_1.by.linkText("Log in"));
        this.signUp = protractor_1.element(protractor_1.by.linkText("Sign up"));
        this.phoneButtton = protractor_1.element(protractor_1.by.linkText("Phones"));
        this.laptopButton = protractor_1.element(protractor_1.by.linkText("Laptops"));
        this.monitorsButton = protractor_1.element(protractor_1.by.linkText("Monitors"));
        this.modal = protractor_1.$(".modal-dialog");
        this.contactEmail = protractor_1.$("#recipient-email");
        this.contactName = protractor_1.$("#recipient-name");
        this.contactMessage = protractor_1.$("#message-text");
        this.contactButtonForm = protractor_1.element(protractor_1.by.buttonText("Send message"));
        this.loginName = protractor_1.$("#loginusername");
        this.loginPassword = protractor_1.$("#loginpassword");
        this.loginButtonConfirm = protractor_1.element(protractor_1.by.buttonText("Log in"));
        this.signUpUsername = protractor_1.$("#sign-username");
        this.signUpPassword = protractor_1.$("#sign-password");
        this.signUpButtonConfirm = protractor_1.element(protractor_1.by.buttonText("Sign up"));
    }
    countTheNumberOfElements(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(3000);
            return yield data.count();
        });
    }
    clickOptions(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield data.click();
            yield protractor_1.browser.sleep(10000);
        });
    }
    modalIsDisplayed(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield data.click();
            yield protractor_1.browser.wait(until.presenceOf(this.modal), 5000);
            return true;
        });
    }
    contactFlow(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.contactButton.click();
            yield protractor_1.browser.sleep(3000);
            yield protractor_1.browser.wait(until.presenceOf(this.contactEmail), 5000, 'contactEmail taking too long to appear in the DOM');
            yield this.contactEmail.sendKeys(data.email);
            yield protractor_1.browser.wait(until.presenceOf(this.contactName), 5000, 'contactName taking too long to appear in the DOM');
            yield this.contactName.sendKeys(data.name);
            yield protractor_1.browser.wait(until.presenceOf(this.contactMessage), 5000, 'contactMessage taking too long to appear in the DOM');
            yield this.contactMessage.sendKeys(data.message);
            yield this.contactButtonForm.click();
            yield protractor_1.browser.sleep(3000);
        });
    }
    loginFlow(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loginButton.click();
            yield protractor_1.browser.sleep(3000);
            yield protractor_1.browser.wait(until.presenceOf(this.loginName), 5000, 'loginName taking too long to appear in the DOM');
            yield this.loginName.sendKeys(data.name);
            yield protractor_1.browser.wait(until.presenceOf(this.loginPassword), 5000, 'loginPassword taking too long to appear in the DOM');
            yield this.loginPassword.sendKeys(data.password);
            yield this.loginButtonConfirm.click();
            yield protractor_1.browser.sleep(3000);
        });
    }
    signUpFlow(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.signUp.click();
            yield protractor_1.browser.sleep(3000);
            yield protractor_1.browser.wait(until.presenceOf(this.signUpUsername), 5000, 'signUpUsername taking too long to appear in the DOM');
            yield this.signUpUsername.sendKeys(data.name);
            yield protractor_1.browser.wait(until.presenceOf(this.signUpPassword), 5000, 'signUpPassword taking too long to appear in the DOM');
            yield this.signUpPassword.sendKeys(data.password);
            yield this.signUpButtonConfirm.click();
            yield protractor_1.browser.sleep(3000);
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUc7QUFjckcsSUFBSSxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUUxQyxNQUFhLElBQUk7SUFBakI7UUFFSSxZQUFPLEdBQVMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQTtRQUNuRSxhQUFRLEdBQXdCLGVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3BELGVBQVUsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDMUQsa0JBQWEsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFDL0Qsa0JBQWEsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7UUFDaEUsZUFBVSxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUN6RCxnQkFBVyxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUM1RCxXQUFNLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQ3hELGlCQUFZLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQzdELGlCQUFZLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQzlELG1CQUFjLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENB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