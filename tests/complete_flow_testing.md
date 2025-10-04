# Complete Flow Testing Scenarios

This testing focuses on a complete user journey from start to a meaningful finish, often involving multiple features to accomplish a single goal.

## Positive Scenarios

1.  **"First Day Experience" Flow:** A new user lands on the homepage, signs up, completes their first challenge, views their profile to see their initial score, and then logs out.
2.  **"Competitive User" Flow:** A returning user logs in, checks the leaderboard to see their current rank, selects a high-difficulty challenge to improve their score, submits a solution, and then revisits the leaderboard to see their new rank.
3.  **"Profile Customization" Flow:** A user logs in, navigates to their settings page, changes their username, uploads a new profile picture, updates their bio, and then views their public profile to confirm all changes are visible.
4.  **"Challenge Authoring" Flow (Admin):** An admin user logs in, navigates to the admin dashboard, creates a new prompt engineering challenge with a title, description, and test cases, publishes it, and then logs in as a regular user to see it in the challenge list.
5.  **"Password Recovery" Flow:** A user on the login page clicks "Forgot Password", enters their email, receives a reset link (mocked), uses the link to set a new password, and then successfully logs in with the new credentials.
6.  **"Social Engagement" Flow:** A user logs in, browses the leaderboard, clicks on a top-ranked user's name to view their profile, and then navigates to a challenge that the top-ranked user has completed.
7.  **"Learning and Improvement" Flow:** A user attempts a challenge and fails. They review the prompt guidelines, refine their submission, and re-submit until they get it right, seeing their submission history on the challenge page.
8.  **"Challenge Discovery" Flow:** A user logs in, uses the search bar to find challenges related to "image generation", then filters the results by "easy" difficulty, and finally sorts them by "most popular". They then select and complete one of the filtered challenges.
9.  **"Account Deletion" Flow:** A user logs in, navigates to their account settings, requests to delete their account, confirms the action in a confirmation modal, and is then logged out and unable to log back in.
10. **"Multi-Session" Flow:** A user logs in on their desktop computer and attempts a challenge. Later, they log in on their mobile device and see that their submission history and score are consistent across both sessions.

## Negative Scenarios

1.  **"Interrupted Registration" Flow:** A user starts filling out the registration form but closes the browser tab before submitting. They then reopen the site and should find the form is empty, and no partial account was created.
2.  **"Failed Payment" Flow (for a hypothetical premium feature):** A user tries to purchase a "premium challenges" subscription, but their credit card is declined. The system should show a clear error message and not grant them access to premium features.
3.  **"Challenge Edit Conflict" Flow (Admin):** Admin A opens the "edit" page for a challenge. Admin B then deletes that same challenge. When Admin A tries to save their edits, they should receive an error stating the challenge no longer exists.
4.  **"Login during Maintenance" Flow:** A user tries to log in while the site is in maintenance mode. They should be presented with a "Site is currently down for maintenance" page instead of the login screen.
5.  **"Expired Password Reset Link" Flow:** A user requests a password reset link but waits longer than the token's expiry time (e.g., 24 hours) to click it. They should be taken to a page that says the link is expired and offers to send a new one.
6.  **"Submitting after Challenge Deadline" Flow (for timed events):** A user tries to submit a solution to a special event challenge after its deadline has passed. The submission should be rejected with a message "The deadline for this challenge has passed."
7.  **"Re-registering with a Deleted Account's Email" Flow:** A user deletes their account. They then try to immediately sign up again with the same email address. The system should either allow this or provide a clear message (e.g., "This email is associated with a recently deleted account.").
8.  **"API Outage during a Flow" Flow:** A user is in the middle of submitting a challenge. The frontend sends the request, but the backend API is down. The frontend should handle the error gracefully, notify the user, and ideally preserve the user's submission data for a retry.
9.  **"Attempting to Access Admin Panel as Regular User" Flow:** A regular user logs in and tries to manually navigate to the `/admin/dashboard` URL. They should be redirected to the homepage or a "403 Forbidden" page.
10. **"Form Resubmission on Browser Refresh" Flow:** A user successfully submits a new challenge form. They then refresh the browser. The browser should ask for confirmation to prevent a duplicate form submission; the backend should also be robust against creating a duplicate challenge.