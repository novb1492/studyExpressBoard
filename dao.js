var admin = require("firebase-admin");

var serviceAccount = require("./expressboard-80ab1-firebase-adminsdk-rm177-4b3347f086.json");

const firebaseAdmin =admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
exports.findBy=function(collectionName,id){
    return firebaseAdmin.firestore().collection(collectionName).doc(id).get();
}
