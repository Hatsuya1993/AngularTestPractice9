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
describe('Home Page e2e', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let home = new home_1.Home();
        yield home.website;
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
    it('Check if the correct website is loaded through the link', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("index");
    }));
    it('Check if the total number of items displayed is correct on 1 page', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let home = new home_1.Home();
        let elementsResults = yield home.countTheNumberOfElements(home.allItems);
        expect(elementsResults.count()).toBe(9);
    }));
    it('Check the numbers of items matches when phones is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.clickOptions(home.phoneButtton);
        let elementsResults = yield home.countTheNumberOfElements(home.allItems);
        expect(elementsResults.count()).toBe(7);
    }));
    it('Check the numbers of items matches when laptop is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.clickOptions(home.laptopButton);
        let elementsResults = yield home.countTheNumberOfElements(home.allItems);
        expect(elementsResults.count()).toBe(6);
    }));
    it('Check the numbers of items matches when monitors is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.clickOptions(home.monitorsButton);
        let elementsResults = yield home.countTheNumberOfElements(home.allItems);
        expect(elementsResults.count()).toBe(2);
    }));
    it('Check if the modal is displayed when the contact button is pressed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let results = yield home.modalIsDiaplayed(home.contactButton);
        expect(results).toBeTruthy();
    }));
    it('Check if the modal is displayed when the about us button is pressed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let results = yield home.modalIsDiaplayed(home.aboutUsButton);
        expect(results).toBeTruthy();
    }));
    it('Check if the modal is displayed when the login button is pressed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let results = yield home.modalIsDiaplayed(home.loginButton);
        expect(results).toBeTruthy();
    }));
    it('Check if the modal is displayed when the about us button is pressed', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        let results = yield home.modalIsDiaplayed(home.signUp);
        expect(results).toBeTruthy();
    }));
    it('Check for the popup message after sending message from contact button', () => __awaiter(void 0, void 0, void 0, function* () {
        let home = new home_1.Home();
        yield home.contactFlow({ email: "test@test.com", name: "testName", message: "testMessage" });
        yield protractor_1.browser.switchTo().alert().getText().then(data => {
            expect(data).toBe("Thanks for the message!!");
        });
        yield protractor_1.browser.switchTo().alert().accept();
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RTcGVjL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsNkNBQXVDO0FBRXZDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBVSxFQUFFO0lBRWxDLFVBQVUsQ0FBQyxHQUFRLEVBQUU7UUFDakIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFBO1FBQ3JCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN0QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsU0FBUyxDQUFDLEdBQVMsRUFBRTtRQUNqQixNQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx5REFBeUQsRUFBRSxHQUFTLEVBQUU7UUFDckUsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG1FQUFtRSxFQUFFLEdBQVMsRUFBRTtRQUMvRSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUE7UUFDckIsSUFBSSxlQUFlLEdBQUcsTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3hFLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw0REFBNEQsRUFBRSxHQUFTLEVB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