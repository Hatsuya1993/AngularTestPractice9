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
    }
    countTheNumberOfElements(data) {
        protractor_1.browser.wait(this.until.presenceOf(data), 3000, 'Element taking too long to appear in the DOM');
        return data;
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
            protractor_1.browser.wait(this.until.presenceOf(this.modal), 3000, 'Modal taking too long to appear in the DOM');
            return true;
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUc7QUFFckcsTUFBYSxJQUFJO0lBQWpCO1FBRUksVUFBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7UUFFdEMsWUFBTyxHQUFTLG9CQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUE7UUFDbkUsYUFBUSxHQUF3QixlQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUNwRCxlQUFVLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQzFELGtCQUFhLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQy9ELGtCQUFhLEdBQW1CLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLGVBQVUsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDekQsZ0JBQVcsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDNUQsV0FBTSxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUN4RCxpQkFBWSxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUM3RCxpQkFBWSxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUM5RCxtQkFBYyxHQUFtQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUNqRSxVQUFLLEdBQW1CLGNBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQXFCOUMsQ0FBQztJQWpCRyx3QkFBd0IsQ0FBQyxJQUErQjtRQUNwRCxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsOENBQThDLENBQUMsQ0FBQTtRQUMvRixPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFSyxZQUFZLENBQUMsSUFBeUI7O1lBQ3hDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2xCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDN0IsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQUMsSUFBb0I7O1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2xCLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsNENBQTRDLENBQUMsQ0FBQTtZQUNuRyxPQUFPLElBQUksQ0FBQTtRQUNmLENBQUM7S0FBQTtDQUdKO0FBcENELG9CQW9DQyJ9