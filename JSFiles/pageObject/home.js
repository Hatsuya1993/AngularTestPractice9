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
class Home {
    constructor() {
        this.until = protractor_1.protractor.ExpectedConditions;
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
    }
    countTheNumberOfElements(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.until.presenceOf(data), 3000, 'Element taking too long to appear in the DOM');
            return data;
        });
    }
    clickOptions(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield data.click();
            yield protractor_1.browser.sleep(3000);
        });
    }
    modalIsDiaplayed(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield data.click();
            yield protractor_1.browser.wait(this.until.presenceOf(this.modal), 3000, 'Modal taking too long to appear in the DOM');
            return true;
        });
    }
    contactFlow(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.contactButton.click();
            yield protractor_1.browser.sleep(3000);
            yield protractor_1.browser.wait(this.until.presenceOf(this.contactEmail), 5000, 'contactEmail taking too long to appear in the DOM');
            yield this.contactEmail.sendKeys(data.email);
            yield protractor_1.browser.wait(this.until.presenceOf(this.contactName), 5000, 'contactName taking too long to appear in the DOM');
            yield this.contactName.sendKeys(data.name);
            yield protractor_1.browser.wait(this.until.presenceOf(this.contactMessage), 5000, 'contactMessage taking too long to appear in the DOM');
            yield this.contactMessage.sendKeys(data.message);
            yield this.contactButtonForm.click();
            yield protractor_1.browser.sleep(3000);
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUc7QUFRckcsTUFBYSxJQUFJO0lBQWpCO1FBRUksVUFBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7UUFHdEMsWUFBTyxHQUFTLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUE7UUFDbkUsYUFBUSxHQUF3QixlQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUNwRCxlQUFVLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQzFELGtCQUFhLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQy9ELGtCQUFhLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLGVBQVUsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDekQsZ0JBQVcsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDNUQsV0FBTSxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUN4RCxpQkFBWSxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUM3RCxpQkFBWSxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUM5RCxtQkFBYyxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENB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