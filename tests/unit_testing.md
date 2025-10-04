# Unit Testing Scenarios

## Positive Scenarios

1.  **User Model:** Test that the `hashPassword` method correctly hashes a given password string.
2.  **Username Validation:** Test that the `isValidUsername` utility function returns `true` for a valid username (e.g., "testuser123").
3.  **Challenge Service:** Test that the `createChallenge` service function successfully creates and returns a new challenge object when provided with valid title, description, and difficulty.
4.  **Submission Evaluation:** Test that the `evaluateSubmission` function correctly identifies a right answer and returns `{ correct: true, score: 100 }`.
5.  **Leaderboard Calculation:** Test that the `calculateLeaderboard` function correctly sorts a list of users by their scores in descending order.
6.  **Date Formatting Utility:** Test that the `formatDate` utility correctly formats a JavaScript Date object into a "YYYY-MM-DD" string.
7.  **Database User Query:** Test that `findUserById` successfully retrieves and returns a user object for an existing user ID.
8.  **API Challenge Endpoint:** Test that a mock request to the `GET /api/challenges` endpoint's controller function returns a 200 status code and a list of challenges.
9.  **Challenge Component Rendering:** Test that the `ChallengeDetail` React component renders the challenge title and description correctly when passed valid props.
10. **Data Fetching Hook:** Test that the `useFetch` custom hook correctly sets its `data` state with the fetched data after a successful mock API call.

## Negative Scenarios

1.  **User Model:** Test that the `hashPassword` method throws an error or handles `null` and `undefined` inputs gracefully.
2.  **Username Validation:** Test that the `isValidUsername` utility function returns `false` for an invalid username (e.g., "u*ser", "sh", "averylongusernameoverthelimit").
3.  **Challenge Service:** Test that the `createChallenge` service function throws a validation error if the title or description is missing.
4.  **Submission Evaluation:** Test that the `evaluateSubmission` function correctly identifies a wrong answer and returns `{ correct: false, score: 0 }`.
5.  **Leaderboard Calculation:** Test that the `calculateLeaderboard` function returns an empty array when given an empty list of users.
6.  **Date Formatting Utility:** Test that the `formatDate` utility returns an empty string or a default value when given an invalid date.
7.  **Database User Query:** Test that `findUserById` returns `null` or `undefined` when searching for a non-existent user ID.
8.  **API Challenge Endpoint:** Test that the controller for `GET /api/challenges/:id` returns a 404 status code if the challenge with the specified ID does not exist.
9.  **Challenge Component Rendering:** Test that the `ChallengeDetail` React component displays a "Challenge not found" message or similar when its props are `null` or `undefined`.
10. **Data Fetching Hook:** Test that the `useFetch` custom hook correctly sets its `error` state after a failed mock API call (e.g., a 500 error).