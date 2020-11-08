const displayNameHolder = document.getElementById('displayNameHolder');
const photoHolder = document.getElementById('photoHolder');
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    console.log(user);
    if(user.displayName)
        displayNameHolder.innerText = user.displayName;
    if(user.photoURL)
        photoHolder.setAttribute('src', user.photoURL);
})
