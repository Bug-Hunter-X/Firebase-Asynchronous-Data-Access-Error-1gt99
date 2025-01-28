# Firebase Asynchronous Data Access Error

This repository demonstrates a common yet easily overlooked error in Firebase development: attempting to access data from a Firebase query before the query has fully resolved. This leads to unexpected behavior and inconsistent data.

## The Problem

Asynchronous operations, such as database queries in Firebase, don't block the execution of your code.  If you attempt to use data retrieved from an asynchronous operation before it's available, you'll encounter undefined values or unexpected results. The provided example shows a situation where `highestScore` is used before the Firebase query returns data.

## The Solution

The solution involves proper handling of asynchronous operations using promises or async/await. This ensures that the code requiring the data waits until the query has completed and the data is available.

## Usage

1. Clone the repository.
2. Install Firebase:
   ```bash
   npm install firebase
   ```
3. Configure Firebase (replace with your project details).  Add your Firebase config to the `bug.js` file.
4. Run `node bug.js` to observe the original erroneous behavior.
5. Run `node bugSolution.js` to observe the corrected behavior using async/await.