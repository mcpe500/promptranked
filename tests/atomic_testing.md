# Atomic Testing Scenarios

## Positive Scenarios

1.  **Button Component:** Test that the `Button` component's `onClick` handler is called exactly once when the button is clicked.
2.  **Input Field Component:** Test that the `Input` component's state updates correctly when a user types a single character.
3.  **API Request Function:** Test that a single API request function (e.g., `fetchUser`) returns a promise that resolves with the expected data on a 200 response.
4.  **State Reducer:** Test that a specific action (e.g., `ADD_ITEM`) dispatched to a reducer correctly updates the state immutably.
5.  **CSS Class Utility:** Test that a utility function `classNames('a', { b: true, c: false })` returns the string `"a b"`.
6.  **Authentication Token Storage:** Test that the `saveToken` function successfully saves a given token to local storage.
7.  **Form Validation Function:** Test a single validation rule function (e.g., `isEmail`) returns `true` for a valid email address.
8.  **Icon Component:** Test that the `Icon` component renders the correct SVG path when given a specific icon name prop.
9.  **Logout Function:** Test that the `logout` function clears the user's session or token from the application's state.
10. **Modal Component:** Test that the `Modal` component becomes visible when its `isOpen` prop is set to `true`.

## Negative Scenarios

1.  **Button Component:** Test that the `Button` component, when `disabled`, does *not* call its `onClick` handler when clicked.
2.  **Input Field Component:** Test that the `Input` component does not accept more characters than its `maxLength` prop allows.
3.  **API Request Function:** Test that the `fetchUser` function's promise rejects with an error object on a 404 or 500 response.
4.  **State Reducer:** Test that the reducer returns the default state when an unknown action type is dispatched.
5.  **Authentication Token Retrieval:** Test that the `getToken` function returns `null` or `undefined` if no token is present in local storage.
6.  **Form Validation Function:** Test the `isEmail` validation function returns `false` for an invalid email string (e.g., "test@test").
7.  **Icon Component:** Test that the `Icon` component renders a default or fallback icon when given an unknown icon name.
8.  **Logout Function:** Test that calling the `logout` function when no user is logged in does not throw an error.
9.  **Modal Component:** Test that the `Modal` component is not visible in the DOM when its `isOpen` prop is `false`.
10. **Password Strength Checker:** Test that the `isPasswordStrong` function returns `false` for a password that does not meet the criteria (e.g., "12345").