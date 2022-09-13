import {accountLogin } from '../model/account'
import Realm, { BSON } from "realm";

const app = new Realm.App({ id: "application-0-rwesj" });
  const credentials = Realm.Credentials.emailPassword(
    "haupham404@gmail.com",
  "haupham809"
  );
  try {
    
    const user = app.logIn(credentials);
  } catch (err) {

    console.log("Failed to log in");

  }

  export const realm =  Realm.open({
    schema: [ accountLogin],
    sync: {
      user: app.currentUser,
      partitionValue: "MyPartitionValue",
    },

  })

  export const getaccount =realm.then((realm) => {
    const data=realm.objects("accountIsLogging")
    return data
})
  

export const addaccount = (phone,name,userName) => {
    let alice;
    realm.then((realm) => {
        realm.write(() => {
            alice = realm.create("accountIsLogging", {
      
              _id: new BSON.ObjectID(),
              phone:phone,
            name: name,
            userName: userName,
            
            });
        });
    })
}
export const deleteaccount = (data) => {
    let alice;
    realm.then((realm) => {
        realm.write(() => {
            alice = realm.delete(data);
        });
    })
}
