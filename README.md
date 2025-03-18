# playwrignt-example-test-project

This project was created for demonstration purposes to practice and maintain test automation skills, ensuring they are up to date with recent changes in the Playwright framework.

Test site: https://www.saucedemo.com/

Scenarios to cover:

1. Login Functionality Testing (Various Users):

1.1. Successful login with standard_user.
1.2. Successful login with locked_out_user (verifying lockout).
1.3. Successful login with problem_user (verifying image display).
1.4. Successful login with performance_glitch_user (verifying performance).
1.5. Failed login with a non-existent user.
1.6. Failed login with an incorrect password for standard_user.
1.7. Failed login with empty username and password fields.
1.8. Verify username case sensitivity.
1.9. Verify password case sensitivity.
1.10. Verify error messages for various failed login scenarios.
2. Shopping Cart Testing:

2.1. Add a single item to the cart.
2.2. Add multiple items to the cart.
2.3. Remove an item from the cart.
2.4. Change the quantity of items in the cart (if applicable).
2.5. Verify the cart is empty after removing all items.
2.6. Verify items persist in the cart after a page refresh.
2.7. Verify cart items persist when navigating between pages.
2.8. Verify the total price of items in the cart.
2.9. Verify the "Checkout" button is enabled only when items are in the cart.
2.10. Verify the cart icon updates in real-time when adding/removing items.
3. Checkout Process Testing:

3.1. Successful checkout with valid data.
3.2. Error during checkout with empty fields.
3.3. Error during checkout with an invalid postal code format.
3.4. Verify the "Checkout: Overview" page displays correct order information.
3.5. Verify the "Cancel" button on the "Checkout: Overview" page returns the user to the cart.
3.6. Verify the "Finish" button completes the checkout process.
3.7. Verify the "Checkout: Complete!" page displays a success message.
3.8. Verify the "Back Home" button on the "Checkout: Complete!" page returns the user to the products page.
3.9. Verify order information is not saved after logging out.
3.10. Verify that it is impossible to checkout with negative quantities of products.
4. Product Sorting and Filtering Testing:

4.1. Sort products by price (low to high).
4.2. Sort products by price (high to low).
4.3. Sort products alphabetically (A to Z).
4.4. Sort products alphabetically (Z to A).
4.5. Verify that sorting persists when navigating between pages.
4.6. Verify all products are displayed when no filters are applied.
4.7. Verify only matching products are displayed when filters are applied (if applicable).
4.8. Verify that filters can be combined (if applicable).
4.9. Verify that filters can be reset.
4.10. Verify the number of displayed products matches the selected filters.
5. Product Information Testing:

5.1. Verify the product name is displayed correctly.
5.2. Verify the product description is displayed correctly.
5.3. Verify the product price is displayed correctly.
5.4. Verify the product image is displayed correctly.
5.5. Verify the "Back to products" button returns the user to the products page.
6. Navigation and Link Testing:

6.1. Verify all links on the page function correctly.
6.2. Verify the company logo returns the user to the homepage.
6.3. Verify the navigation menu functions correctly (if applicable).
6.4. Verify social media links function correctly (if applicable).


