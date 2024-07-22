const { expect, browser, $ } = require('@wdio/globals')

describe('My login application', () => {

    it('should login with valid credentials', async () => {
        
        //Arrange
        await browser.url('http://localhost:3000/#/login')

        //Act
        await $('input[name="email"]').setValue('admin@test.com')
        await $('input[name="password"]').setValue('password123')
        await $('button').click()

        //Assert
        const element = await $('.card-title');
        await expect(element).toHaveText('Projects');
    });
});