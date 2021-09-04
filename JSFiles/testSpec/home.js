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
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RTcGVjL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsNkNBQXVDO0FBQ3ZDLDZDQUF1QztBQUV2QyxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQVUsRUFBRTtJQUVsQyxVQUFVLENBQUMsR0FBUSxFQUFFO1FBQ2pCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQTtRQUNyQixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdEIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx5REFBeUQsRUFBRSxHQUFTLEVBQUU7UUFDckUsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQy9CLGVBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG1FQUFtRSxFQUFFLEdBQVMsRUFBRTtRQUMvRSxJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFBO1FBQ3JCLElBQUksZUFBZSxHQUFHLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4RSxNQUFNLENBQUMsTUFBTSxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDckMsZUFBTSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsR0FBQyxHQUFHLElBQUUsTUFBTSxlQUFlLENBQUEsQ0FBQyxDQUFBO0lBRWpFLENBQUMsQ0FB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