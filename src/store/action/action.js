
import ActionTypes from '../constant/constant';
import history from '../../History';
import *as firebase from 'firebase';
import { userInfo } from 'os';
import axios from 'axios';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory()
var config = {
    apiKey: "AIzaSyCqeckiLP7FD5y-xQ7OCtntkch3VJ5EWiU",
    authDomain: "etate-life.firebaseapp.com",
    databaseURL: "https://etate-life.firebaseio.com",
    projectId: "etate-life",
    storageBucket: "etate-life.appspot.com",
    messagingSenderId: "362075881918",
    appId: "1:362075881918:web:d2cb5df22c28e94a78f9ef",
    measurementId: "G-XM0SFJKWTT"
};
firebase.initializeApp(config);
var db = firebase.firestore();
export function loaderCall() {
    return dispatch => {
        dispatch({ type: ActionTypes.LOADER })
    }
}
export function errorCall(errorMessage) {
    return dispatch => {
        console.log(errorMessage);
        dispatch({ type: ActionTypes.SHOWERROR, payload: errorMessage })
        setTimeout(() => {
            dispatch({ type: ActionTypes.HIDEERROR })
        }, 3000)
    }
}
export function UserActivation(verifyCodeObj) {
    console.log(verifyCodeObj, "verifyCodeObj")
    return dispatch => {
        dispatch({ type: ActionTypes.LOADER })
        if (verifyCodeObj && verifyCodeObj.againstVerifyCode) {
            let startTimeStamp = verifyCodeObj.againstVerifyCode.timeStamp
            let currentUserUid = firebase.auth().currentUser.uid;
            let lastTimeStamp = Date.now()
            let expiry = lastTimeStamp - startTimeStamp
            console.log("ifff", verifyCodeObj, startTimeStamp, currentUserUid, lastTimeStamp, expiry)
            if (verifyCodeObj.againstVerifyCode.code === verifyCodeObj.verifyCode && expiry < 400000) {
                console.log("ifff")
                db.collection("users").doc(currentUserUid).update({ status: true })
                    .then(function () {
                        dispatch({ type: ActionTypes.LOADER })
                        history.push('/login');
                    })
                    .catch(function (error) {
                        dispatch({ type: ActionTypes.LOADER })
                        console.error("Error writing document: ", error);
                    });
            }
            else {
                dispatch(errorCall("Invalid code or expired"))
            }
        }
        else {
            dispatch(errorCall("Invalid code or expired"))
        }
    }
}
export function emailVerify(email) {
    return dispatch => {
        axios.post('http://localhost:5000/sendVerificationEmail', {
            email: email
        })
            .then(function (response) {
                dispatch({ type: ActionTypes.LOADER })
                console.log("response", response.data);
                history.push({ pathname: '/Verify', state: response.data });
            })
            .catch(function (error) {
                dispatch({ type: ActionTypes.LOADER })
                console.log("error", error);
            });
    }
}
export function signUpAction(user) {
    // alert("wok")
    console.log(user)
    return dispatch => {
        dispatch({ type: ActionTypes.LOADER })
        let validate = true
        for (var key in user) {
            if ((user[key] === "")) {
                dispatch(errorCall(key + " is required"))
                validate = false
                break
            }
            else if (user.password !== user.confirmPassword) {
                dispatch(errorCall("Password does not match"))
                validate = false
                break
            }
        }
        validate &&
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userData) => {

                    console.log("user signed in", userData)
                    let currentUserUid = firebase.auth().currentUser.uid;
                    let userClone = user
                    userClone.uid = currentUserUid
                    // db.collection("cities").doc("LA").set({
                    db.collection("users").doc(currentUserUid).set(userClone)
                        .then(function () {
                            console.log("Document successfully written!");
                            dispatch(emailVerify(userClone.email))
                        })
                        .catch(function (error) {
                            dispatch({ type: ActionTypes.LOADER })

                            console.error("Error writing document: ", error);
                        });
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage, "errorMessage");
                    dispatch({ type: ActionTypes.SHOWERROR, payload: errorMessage })
                    setTimeout(() => {
                        dispatch({ type: ActionTypes.HIDEERROR })
                    }, 3000)
                })
    }
}

export function signinAction(user) {
    return dispatch => {
        dispatch({ type: ActionTypes.LOADER })
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userData) => {
                dispatch(UserDataGet(userData.user.uid, user.email, "/home"))


                // history.push('/home');
                // dispatch({ type: ActionTypes.LOADER })
            })
            .catch((error) => {
                var errorMessage = error.message;
                if (errorMessage === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                    errorMessage = "There is no user record"
                }
                console.log(errorMessage);
                dispatch({ type: ActionTypes.SHOWERROR, payload: errorMessage })
                setTimeout(() => {
                    dispatch({ type: ActionTypes.HIDEERROR })
                }, 3000)
            })
    }
}

export function UserDataGet(uid, email, route) {
    console.log(uid, email, "uid,email", route)
    return dispatch => {
        db.collection("users").where("uid", "==", uid).get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let currentUser = doc.data()
                    dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUser })
                    if (currentUser.status === true) {
                        dispatch({ type: ActionTypes.LOADER })

                        history.push(route);
                    }
                    else {
                        dispatch(emailVerify(email))
                    }

                });
            })
            .catch(function (error) {
                dispatch(errorCall("Error getting documents: ", error))

                // console.log("Error getting documents: ", error);
            });
    }
}
export function userUpdate(user) {
    return dispatch => {
        dispatch({ type: ActionTypes.LOADER })
        let currentUserUid = firebase.auth().currentUser;
        console.log(user, "userUpdate", currentUserUid)
        if (!user.phone || !user.fullName) {
            dispatch(errorCall("Name & Phone number are required"))

        }
        else {
            if ((user.CheckCurrPass === user.currentPassword) &&
                (user.password === user.confirmPassword) && (user.password !== "")) {
                currentUserUid.updatePassword(user.password).then(function () {
                    console.log("succes")
                    db.collection("users").doc(currentUserUid.uid).update({ fullName: user.fullName, phone: user.phone, password: user.password })
                        .then(function () {
                            window.location.reload();
                            dispatch({ type: ActionTypes.LOADER })

                        })
                        .catch(function (error) {
                            console.error("Error writing document: ", error);
                            dispatch({ type: ActionTypes.LOADER })

                        });
                }).catch(function (error) {
                    console.log("errrrrrrrrr", error.message)
                    dispatch(errorCall(error.message))
                    // alert(error.message)
                });
                console.log("work", user)
            }
            else if (user.confirmPassword !== "" || user.currentPassword !== "" || user.password !== "") {
                dispatch(errorCall("authentication failed"))
            }
            else {
                db.collection("users").doc(currentUserUid.uid).update({ fullName: user.fullName, phone: user.phone })
                    .then(function () {
                        dispatch({ type: ActionTypes.LOADER })
                        window.location.reload();
                    })
                    .catch(function (error) {
                        dispatch({ type: ActionTypes.LOADER })
                        console.error("Error writing document: ", error);
                    });
            }



        }
    }
}



// export function save(data) {
//     return dispatch => {
//         let courseNameAndBatchName = data.courseName + " " + data.batchNumber
//         console.log(courseNameAndBatchName, "courseNameAndBatchName")
//         firebase.database().ref('/books/' + courseNameAndBatchName).push(data)
//             .then(() => {
//                 dispatch({ type: ActionTypes.LOADER })
//             })
//             .catch((error) => {
//                 var errorMessage = error.message;
//                 // alert(errorMessage)
//                 console.log(errorMessage, "save book data");
//                 dispatch({ type: ActionTypes.SHOWERROR, payload: errorMessage })
//                 setTimeout(() => {
//                     dispatch({ type: ActionTypes.HIDEERROR })
//                 }, 3000)
//             })
//     }
// }
// export function deleteBook(bookId, folderName, pdfFilename) {
//     return dispatch => {
//         // console.log(pdfFilename, "delete func in action")
//         firebase.database().ref("/books/" + folderName + "/" + bookId).remove()

//         // Create a reference to the file to delete
//         var desertRef = firebase.storage().ref('/pdfDocuments/').child(pdfFilename);

//         // Delete the file
//         desertRef.delete().then(function () {
//             // File deleted successfully


//             console.log("File deleted successfully")
//         }).catch(function (error) {
//             // Uh-oh, an error occurred!

//             console.log(error)

//         });




//     }
// }

// export function getBooksFromDb() {
//     return dispatch => {
//         dispatch({ type: ActionTypes.LOADER })
//         firebase.database().ref("/books/").once('value', (snapshot) => {
//             let obj = snapshot.val();

//             for (var key in obj) {
//                 // console.log(obj[key]),"1st loop"
//                 let data = obj[key]
//                 for (var datakey in data) {
//                     data[datakey].trackId = datakey
//                     // console.log(data[datakey]), "1st loop"
//                 }
//             }
//             let data = [];
//             let courseName = [];
//             for (var key in obj) {
//                 courseName.push(obj.folderName = key)
//                 obj[key].folderName = key
//                 // console.log(obj[key], "dataSort")
//                 // var dataSort = obj[key]
//                 // console.log(dataSort, "key")


//                 // for (var i = 0; )



//                 // for (var key in dataSort) {
//                 //     // dataSort[key].trackId = key
//                 //     // data.push(dataSort[key])
//                 //     console.log(key, "key")
//                 // }




//                 data.push(obj[key])


//             }

//             // console.log(data, "dataSort")

//             dispatch({ type: ActionTypes.FOLDERNAME, payload: courseName })
//             dispatch({ type: ActionTypes.DATA, payload: data })
//             dispatch({ type: ActionTypes.LOADER })
//         })
//             .catch((error) => {
//                 var errorMessage = error.message;
//                 console.log(errorMessage);
//                 dispatch({ type: ActionTypes.SHOWERROR, payload: errorMessage })
//                 setTimeout(() => {
//                     dispatch({ type: ActionTypes.HIDEERROR })
//                 }, 3000)
//             })

//     }
// }

