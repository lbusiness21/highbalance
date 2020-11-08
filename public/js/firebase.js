const signInWithGoogleButton = document.getElementById('signInWithGoogle');

const auth = firebase.auth();

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



auth.onAuthStateChanged(user => {
  if(user)
    window.location.assign('profile.html');
})
