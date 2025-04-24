import {Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class LoginPage extends HelperBase {


    readonly userNameInputField: Locator
    readonly passwordInputField: Locator
    readonly loginButton: Locator

    constructor(page: Page){
        super(page)

        this.userNameInputField = page.getByTestId('username')
        this.passwordInputField = page.getByTestId('password')
        this.loginButton = page.getByTestId('login-button')
    }

    
/**
 * 
 * @param login - user account name
 * @param password - user password
 */
    async Login(login:string, password:string){
        //await this.waitForNumberOfSeconds(10)
        await this.userNameInputField.fill(login);
        await this.passwordInputField.fill(password);
        await this.loginButton.click();
    }
}