# Pixio

![imagee](frontend/src/assets/logos/logo.svg)
# [Programming Challenges Website](https://prograchallenges.com) Official Code Repository
[Prograchallenges.com](https://prograchallenges.com) is an open source project made for the Telegram group of [Programming Challenges](https://telegram.me/prograchallenges) , This website will always stay free. It is supposed to help programmers enhance their skills and non-programmers become one!
<br>

# Our Goal
Our Goal is to make a world-class free for all platform for people to learn coding and existing coders to enhance their skills, The v0 of prograchallenges has programming challenges which people can attempt. But our mission is much bigger, we plan to add these features in our upcoming releases: 

1. Online Code Editor For Solving Problems
2. Point System With Leaderboard
3. User Dashboard
4. Free coding courses

Prograchallenges will never stop, More features will come on the way
<br>

# Contribute
You can join the [telegram group](https://https://t.me/joinchat/2nmp7Kiyrq4yNjJi) for contribution, there you will find very friendly people who can help you out 

The technologies we usw are as follows - 
1. React Native
2. Expo
3. Firebase

You can check our code repo to get an idea of the structure,
Also see [CONTRIBUTING.md](https://github.com/Talentrator/Prograchallenges.com/blob/master/CONTRIBUTING.md)
<br>

# Our Sponsor
[Prograchallenges.com](https://prograchallenges.com) is thankful to [Talentrator](https://talentrator.com/) who are funding this project, 
We enable companies in the Nordic to supercharge their growth by securely hiring the best international software developers. We strongly believe there are many talented developers around the world, eager to work on something meaningful but can't find the right opportunities and have few ways of qualifying themselves. We pledge to find them, test them and allow them to accelerate their careers by working remotely at Nordic software companies. 
For more information, contact [Calle Unnérus](https://telegram.me/calle978) from Talentrator.


## OPEN  POSITIONS

careers@jambo.cloud

<!-- sign up users -->

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  <!-- existing users -->

  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  <!-- setup auth state observer and return users -->

  import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});#   P i x i o - E c o m m e r s e - C l o n e  
 