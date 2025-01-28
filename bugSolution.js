The solution uses async/await to handle the asynchronous nature of the Firebase query:

```javascript
async function getHighestScore() {
  const snapshot = await db.ref('users').orderByChild('score').once('value');
  const users = snapshot.val();
  if (users) {
    const highestScoringUser = Object.entries(users).reduce((a, b) => (parseInt(a[1].score) > parseInt(b[1].score) ? a : b));
    return parseInt(highestScoringUser[1].score);
  } else {
    return 0; // or handle the case where no users exist
  }
}

async function processHighestScore() {
  const highestScore = await getHighestScore();
  console.log('Highest Score:', highestScore);
  console.log('Processing Highest Score:', highestScore);
}

processHighestScore();
```

This revised code ensures that `highestScore` is properly resolved before being used. The async/await syntax makes the asynchronous code easier to read and reason about.