import { Page } from "@playwright/test";
import { LoginPage } from "./loginPage";


export class PageManager{

    private readonly page: Page
    private readonly loginPage2: LoginPage

    constructor(page: Page){

        this.page = page
        this.loginPage2 = new LoginPage(this.page)
    }

    loginPage(){
        return this.loginPage2
    }
}