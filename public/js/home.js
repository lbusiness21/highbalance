const mailField = document.getElementById('mail');
const passwordField = document.getElementById('password');
const signInWithGoogleButton = document.getElementById('signInWithGoogle');
const signUp = document.getElementById('signUp')
const auth = firebase.auth();

auth.useDeviceLanguage();

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider)
  .then(() => {
    window.location.assign('profile.html');
  })
  .catch(error => {
    console.error(error);
  })
}
signInWithGoogleButton.addEventListener('click', signInWithGoogle);


const signUpFunction = () => {
  const email = mailField.value;
  const password = passwordField.value;

  auth.createUserWithEmailAndPassword(email, password)
  .then(() => {
      window.location.assign('profile.html');
  })
  .catch(error => {
      console.error(error);
  })
}
signUp.addEventListener('click', signUpFunction);


auth.onAuthStateChanged(user => {
  if(user)
    window.location.assign('profile.html');
})
