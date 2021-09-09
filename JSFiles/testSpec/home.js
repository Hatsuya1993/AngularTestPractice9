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
const protractor_1 = require("protractor");
const home_1 = require("../pageObject/home");
const helper_1 = require("../helper/helper");
describe('Home Page e2e', () => __awaiter(void 0, void 0, void 0, function* () {
    let existName = "";
    let existPassword = "";
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let home = new home_1.Home();
        yield home.website;
    }));
    it('Check if the correct website is loaded through the link', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.getCurrentUrl().then(data => {
            expect(data).toContain("index");
            helper_1.Helper.logsData(data);
        });
    }));
    it('Check if the total number of items displayed is correct on 1 page', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let elementsResults = yield home.countTheNumberOfElements(home.allItems);
        expect(yield elementsResults).toBe(9);
        helper_1.Helper.logsData("Number of items" + " " + (yield elementsResults));
    }));
    it('Check the numbers of items matches when phones is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.clickOptions(home.phoneButtton);
        let elementsResults = yield home.countTheNumberOfElements(home.allItems);
        expect(elementsResults).toBe(7);
        helper_1.Helper.logsData("Number of items" + " " + (yield elementsResults));
    }));
    it('Check the numbers of items matches when laptop is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.clickOptions(home.laptopButton);
        let elementsResults = yield home.countTheNumberOfElements(home.allItems);
        expect(elementsResults).toBe(6);
        helper_1.Helper.logsData("Number of items" + " " + (yield elementsResults));
    }));
    it('Check the numbers of items matches when monitors is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.clickOptions(home.monitorsButton);
        let elementsResults = yield home.countTheNumberOfElements(home.allItems);
        expect(elementsResults).toBe(2);
        helper_1.Helper.logsData("Number of items" + " " + (yield elementsResults));
    }));
    it('Check if the modal is displayed when the contact button is pressed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let results = yield home.modalIsDisplayed(home.contactButton);
        expect(results).toBeTruthy();
        helper_1.Helper.logsData("modal is displayed when contact button pressed" + " " + (yield results));
    }));
    it('Check if the modal is displayed when the about us button is pressed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let results = yield home.modalIsDisplayed(home.aboutUsButton);
        expect(results).toBeTruthy();
        helper_1.Helper.logsData("modal is displayed when about us button pressed" + " " + (yield results));
    }));
    it('Check if the modal is displayed when the login button is pressed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let results = yield home.modalIsDisplayed(home.loginButton);
        expect(results).toBeTruthy();
        helper_1.Helper.logsData("modal is displayed when login button pressed" + " " + (yield results));
    }));
    it('Check if the modal is displayed when the sign up button is pressed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let results = yield home.modalIsDisplayed(home.signUp);
        expect(results).toBeTruthy();
        helper_1.Helper.logsData("modal is displayed when sign up button pressed" + " " + (yield results));
    }));
    it('Check for the popup message after sending message from contact button', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.contactFlow({ email: "test@test.com", name: "testName", message: "testMessage" });
        yield protractor_1.browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("Thanks for the message!!");
            helper_1.Helper.logsData("sending message from contact button" + " " + data);
        });
        yield protractor_1.browser.switchTo().alert().accept();
    }));
    it('Check the url when user is redirected to the cart website', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.cartButton.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("cart");
        helper_1.Helper.logsData(yield protractor_1.browser.getCurrentUrl());
    }));
    it('Check the popup when no login details are added', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.loginFlow({ name: "", password: "" });
        yield protractor_1.browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("Please fill out Username and Password.");
            helper_1.Helper.logsData("No login details are added" + " " + data);
        });
        yield protractor_1.browser.switchTo().alert().accept();
    }));
    it('Check the popup when there is login info passed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.loginFlow({ name: "testName", password: "testPassword" });
        yield protractor_1.browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("User does not exist.");
            helper_1.Helper.logsData("Login details are added" + " " + data);
        });
        yield protractor_1.browser.switchTo().alert().accept();
    }));
    it('Check the popup when this is no signup info', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.signUpFlow({ name: "", password: "" });
        yield protractor_1.browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("Please fill out Username and Password.");
            helper_1.Helper.logsData("Signup details are not added" + " " + data);
        });
        yield protractor_1.browser.switchTo().alert().accept();
    }));
    fit('Check the popup when this is signup info', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        existName = "testName" + Math.random();
        existPassword = "testPassword" + Math.random();
        yield home.signUpFlow({ name: existName, password: existPassword });
        yield protractor_1.browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("Sign up successful.");
            helper_1.Helper.logsData("Signup details are added" + " " + data);
        });
        yield protractor_1.browser.switchTo().alert().accept();
    }));
    fit('Check the popup when users details are passes', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.loginFlow({ name: existName, password: existPassword });
        expect(yield home.welcomeUser.getText()).toBe("Welcome " + existName);
    }));
    fit('Check after use logs out, button should be login now', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.loginFlow({ name: existName, password: existPassword });
        yield home.logoutUser.click();
        expect(yield home.loginButton.getText()).toBe("Logn");
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RTcGVjL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsNkNBQXVDO0FBQ3ZDLDZDQUF1QztBQUV2QyxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQVUsRUFBRTtJQUVsQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUE7SUFDbEIsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFBO0lBRXRCLFVBQVUsQ0FBQyxHQUFRLEVBQUU7UUFDakIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFBO1FBQ3JCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN0QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHlEQUF5RCxFQUFFLEdBQVMsRUFBRTtRQUNyRSxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDL0IsZUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsbUVBQW1FLEVBQUUsR0FBUyxFQUFFO1FBQy9FLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUE7UUFDckIsSUFBSSxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3hFLE1BQU0sQ0FBQyxNQUFNLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNyQyxlQUFNLENBQUMsUUFBUSxDQUFD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