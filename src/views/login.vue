<template>
    <div class="box">
        <div class="logo">

        </div>
    <h2>Sign In</h2>
    <p>Use your Google Account</p>

    <button @click="login">Sign in</button>

    </div>
</template>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');


 body {
     margin: 0;
     padding: 0;
     background-size: cover;
     font-family: 'Open Sans', sans-serif;
 }

 .box {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     width: 30rem;
     padding: 3.5rem;
     box-sizing: border-box;
     border: 1px solid #dadce0;
     -webkit-border-radius: 8px;
     border-radius: 8px;

 }

 .box h2 {
     margin: 0px 0 -0.125rem;
     margin-bottom: 15px;
     padding: 0;
     text-align: center;
     color: #202124;
     font-size: 24px;
     font-weight: 400;
 }

 .box .logo
 {
     display: flex;
     flex-direction: row;
     justify-content: center;
     margin-bottom: 16px;

 }

 .box p {
     font-size: 16px;
     font-weight: 400;
     letter-spacing: 1px;
     line-height: 1.5;
     margin-bottom: 24px;
     text-align: center;
 }



 .box button {
     border: none;
     outline: none;
     color: #fff;
     background-color: #1a73e8;
     padding: 0.625rem 1.25rem;
     cursor: pointer;
     border-radius: 0.312rem;
     font-size: 1rem;
     display: block;
     margin: auto;

   }

   .box button:hover {
     background-color: #287ae6;
     box-shadow: 0 1px 1px 0 rgba(66,133,244,0.45), 0 1px 3px 1px rgba(66,133,244,0.3);
   }


</style>
<script>
    import firebase from 'firebase'
    import "firebase/firestore";
    export default{
        methods:{
            login(){
                var provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

                firebase.auth().signInWithPopup(provider).then((result) => {
                        /** @type {firebase.auth.OAuthCredential} */
                        var credential = result.credential;

                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;

                        this.$router.push('/')
                        // ...
                    }).catch((error) => {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
            }
        }
    }
</script>