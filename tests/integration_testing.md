# Integration Testing Scenarios

## Positive Scenarios

1.  **User Registration and Login:** Test that a user can register through the frontend, which successfully calls the backend API to create a user, and then can immediately log in with the new credentials.
2.  **Fetch and Display Challenges:** Test that the main challenges page on the frontend successfully calls the `GET /api/challenges` backend endpoint and renders the list of challenges received.
3.  **Submit a Solution:** Test that a logged-in user can submit a solution on the frontend, the frontend sends the data to the `POST /api/submissions` endpoint, and the backend correctly saves the submission to the database.
4.  **View User Profile and Submissions:** Test that navigating to a user's profile page on the frontend triggers API calls to fetch both user details and their submission history, and both are displayed correctly.
5.  **Update Profile Information:** Test that a user can update their bio on the frontend, the changes are sent to the `PUT /api/users/profile` endpoint, and the backend updates the user record in the database.
6.  **Admin Creates a New Challenge:** Test that a user with admin privileges can use the challenge creation form on the frontend, which calls the backend to create a new challenge, and this new challenge then appears on the main challenge list.
7.  **Leaderboard Data Flow:** Test that the Leaderboard component on the frontend fetches data from the `/api/leaderboard` endpoint, and the backend correctly queries the database, calculates ranks, and returns a sorted list of users.
8.  **Frontend Routing and API Data:** Test that navigating directly to a specific challenge URL (e.g., `/challenges/123`) on the frontend correctly calls the `GET /api/challenges/123` endpoint and renders the specific challenge details.
9.  **Logout Process:** Test that clicking the logout button on the frontend clears the user's session/token locally and successfully invalidates the session on the backend (if applicable).
10. **Search/Filter Functionality:** Test that using a search filter on the frontend challenges page triggers an API call to the backend with the correct query parameters, and the backend returns a properly filtered list of challenges.

## Negative Scenarios

1.  **Register with an Existing Email:** Test that attempting to register with an email that already exists in the database causes the backend to return a 409 Conflict error, which the frontend then displays as a "Email already in use" message.
2.  **Login with Invalid Credentials:** Test that submitting the login form with an incorrect password causes the backend to return a 401 Unauthorized error, and the frontend displays an "Invalid credentials" message.
3.  **Access Protected Route When Logged Out:** Test that attempting to access a protected frontend route (e.g., `/profile`) when not authenticated redirects the user to the login page, and direct API calls to protected endpoints return a 401 error.
4.  **Submit a Solution to a Non-Existent Challenge:** Test that an attempt to submit a solution for a challenge ID that does not exist causes the backend to return a 404 Not Found error, and the frontend displays a "Challenge not found" message.
5.  **API Server is Down:** Test that when the frontend tries to fetch data from the backend while the server is offline, it handles the error gracefully and displays a "Failed to connect to server" message instead of crashing.
6.  **Admin Action by a Non-Admin User:** Test that a regular user attempting to call the admin-only "create challenge" backend endpoint receives a 403 Forbidden error.
7.  **Invalid Data Submission:** Test that submitting a form with missing required fields (e.g., an empty challenge title) is rejected by the backend with a 400 Bad Request error, and the frontend displays the corresponding validation errors.
8.  **Database Connection Error:** Test that if the backend API loses its connection to the database, API endpoints return a 500 Internal Server Error, and the frontend displays a generic "An unexpected error occurred" message.
9.  **Requesting a Non-Existent Challenge:** Test that navigating to a URL for a challenge that doesn't exist (e.g., `/challenges/9999`) results in the backend returning a 404 error, and the frontend showing a "404 Not Found" page.
10. **Expired Authentication Token:** Test that when a user's session token has expired, an API request from the frontend results in a 401 Unauthorized response from the backend, prompting the frontend to log the user out or ask for re-authentication.