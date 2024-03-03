import React, { Component, createContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase";

export const UserContext = createContext({
  loaded: false,
  user: null,
  organizerId: null,
});

class UserProvider extends Component {
  state = {
    loaded: false,
    user: null,
    organizerId: null,
  };

  componentDidMount = async () => {
    onAuthStateChanged(auth, async user => {
      if(user) {
        const userDoc = await getDoc(doc(collection(firestore, 'users'), user.uid));
        if(userDoc.data()?.organizer) {
          return this.setState({
            loaded: true,
            user: user,
            organizerId: userDoc.data()?.organizer,
          });
        }
        
        //Sign out if logged in with non-organizer account
        setTimeout(async () => {
          const userDoc = await getDoc(doc(collection(firestore, 'users'), user.uid));
          if(!userDoc.data()?.organizer) {
            await signOut(auth);
          }
        }, 3000);
      }
      
      this.setState({
        loaded: true,
        user: null,
        organizerId: null,
      });
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;