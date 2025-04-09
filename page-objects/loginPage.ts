import { Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async Login(login:string, password:string){
        await this.page.getByTestId('username').fill(login);
        await this.page.getByTestId('password').fill(password);
        await this.page.getByTestId('login-button').click();
    }
}