
  const firebaseConfig = {
    apiKey: "AIzaSyBYuVrWwC8HQPkTMdznSIJ5LRQWO9FmL4s",
    authDomain: "hamsworld-f9199.firebaseapp.com",
    databaseURL: "https://hamsworld-f9199-default-rtdb.firebaseio.com",
    projectId: "hamsworld-f9199",
    storageBucket: "hamsworld-f9199.appspot.com",
    messagingSenderId: "780774536794",
    appId: "1:780774536794:web:1d3b34761d4e20e07d0a63",
    measurementId: "G-8RJ3YCF6FK"
  };

firaebase.initializeApp(firebaseConfig);
 var contactFormDB = firebase.database().ref("contactForm");
  
 document.getElementById("contactForm").addEventListener('submit' , submitForm);

 function submitForm(e){
    e.preventDefault();
    var emailid = getElementVal('emailid')
    saveMessages(emailid)

 }

 function saveMessages(emailid) {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        emailid: emailid,
    });
}
  const getElementVal = (id) => {
    return document.getElementById(id).Value;
 }