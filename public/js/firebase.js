document.addEventListener('DOMContentLoaded', function() {
    const app = firebase.app();
    const db = firebase.firestore();
    const myPost = db.collection('posts').doc('name');

myPost.get()
    .then(doc => {
      const data = doc.data();
     var a="Hello "+data.username;
      document.getElementById("output").innerHTML = a;
    })

  });
