import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   amount: 150000,
//   note: '',
//   createdAt: 37823789231
// });

// database.ref('expenses').push({
//   description: 'Coffee',
//   amount: 59000,
//   note: '',
//   createdAt: 37823789231
// });

// database.ref('expenses').push({
//   description: 'Food',
//   amount: 50000,
//   note: '',
//   createdAt: 37823789231
// });

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// database.ref().set({
//   name: 'PK Lam',
//   age: 51,
//   isSingle: false,
//   location: {
//     postcode: 7189280,
//     city: 'Singapore'  
//   }
// });

// database.ref().update({
//   name: 'John',
//   'location/city': 'Ipoh'
// });

// database.ref('location').remove().then(() => {
//   console.log('deleted!');
// }).catch((e) => {
//   console.log('failed to delete', e);
// });