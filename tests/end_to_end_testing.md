# End-to-End Testing Scenarios

## Positive Scenarios

1.  **Full User Journey:** A new user visits the site, registers for an account, logs in, browses the challenges, selects one, submits a correct answer, sees their updated score on their profile, and logs out.
2.  **Challenge Creation and Completion by another user:** An admin user logs in, creates a new challenge, and logs out. A regular user then logs in, finds the new challenge, submits a correct prompt, and sees their rank improve on the leaderboard.
3.  **Password Reset Flow:** A user who has forgotten their password clicks the "Forgot Password" link, receives an email (mocked), follows the link, and successfully resets their password. They then log in with the new password.
4.  **Profile Update and Verification:** A user logs in, navigates to their profile, updates their username and bio, saves the changes, and sees the updated information persist after logging out and logging back in.
5.  **Pagination and Sorting on Challenges Page:** A user navigates to the challenges page, uses the pagination controls to go to the next page of challenges, and then uses a sort filter (e.g., by difficulty) to re-order the list.
6.  **Submitting Multiple Attempts:** A user submits an incorrect prompt for a challenge, sees the "Incorrect" feedback, then submits a correct prompt for the same challenge and sees the "Correct" feedback and score update.
7.  **Search Functionality:** A user types a specific keyword into the search bar on the challenges page and verifies that only challenges matching the keyword are displayed.
8.  **Responsive Design Check:** A user accesses the site on a mobile device (simulated via browser tools), and successfully navigates through the registration, login, and challenge submission flow, ensuring all elements are usable.
9.  **Viewing another User's Public Profile:** A user clicks on a username in the leaderboard and is taken to that user's public profile page, where they can see the user's score and submission history.
10. **Navigating via Browser History:** A user navigates between the homepage, challenges page, and a specific challenge page. They then use the browser's back and forward buttons and verify that the application state and URL are correctly synchronized.

## Negative Scenarios

1.  **Registration with Invalid Data:** A user tries to register with an invalid email format and a password that is too short. They should see inline validation errors for both fields and be prevented from submitting the form.
2.  **Attempting to Submit to a Challenge When Logged Out:** A user navigates to a challenge page without being logged in. The "Submit" button should be disabled or, if clicked, should redirect them to the login page.
3.  **Session Timeout during a task:** A user logs in and leaves the page idle long enough for the session to expire. When they try to perform an action (e.g., submit a prompt), they are logged out and prompted to log in again.
4.  **Concurrent Edits:** Two admin users try to edit the same challenge simultaneously. The system should either prevent the second user from saving ("This has been updated by someone else") or handle the merge gracefully (last-write-wins).
5.  **Submitting Malicious Input:** A user attempts to submit a prompt containing a script tag (e.g., `<script>alert('XSS')</script>`) in a form field. The application should correctly sanitize the input and prevent the script from executing.
6.  **Broken API Link:** A user clicks on a feature (e.g., "View My Stats") that relies on an API endpoint that is currently broken (returns a 500 error). The user should be shown a user-friendly error message instead of a blank page or a crash.
7.  **Submitting an empty form:** A user tries to submit the registration or login form with all fields empty. They should see "This field is required" error messages for all relevant fields.
8.  **Navigating to an invalid URL:** A user manually types a non-existent URL (e.g., ` /this/page/does/not/exist`). The application should show a clear "404 - Page Not Found" component.
9.  **Admin Deletes a Challenge a User is Viewing:** An admin deletes a challenge while another user is currently on that challenge's detail page. When the user tries to submit a solution, they should see an error message like "This challenge no longer exists."
10. **Network Disconnection:** A user is filling out the submission form and their internet connection drops. When they click "Submit," the application should detect the network failure and show an appropriate message, preserving the data they entered.