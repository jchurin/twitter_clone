import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup, GithubAuthProvider} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0zeXrtc7Fg0oV-SS6DleeSLAFPjmnhxc',
  authDomain: 'twitdev-d5531.firebaseapp.com',
  projectId: 'twitdev-d5531',
  storageBucket: 'twitdev-d5531.appspot.com',
  messagingSenderId: '88373975547',
  appId: '1:88373975547:web:ada5ab09293b7a8d86135e',
  measurementId: 'G-46HP7PW38T',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

const mapUserFromFirebaseToUser = user => {
  const {displayName, email, photoURL} = user
  return {username: email, avatar: photoURL, name: displayName}
}

export const onAuthStateChanged = onChange => {
  return auth.onAuthStateChanged(user => {
    const normalizedUser = user ? mapUserFromFirebaseToUser(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGiHub = async () => {
  const provider = new GithubAuthProvider()
  await signInWithPopup(auth, provider)
}
