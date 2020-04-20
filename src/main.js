import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

//                    FIREBASE DATA OF My PROJECT

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBxRzzSgcFlYxhvzmWI1jfEqV8IoRSqKtw",
//     authDomain: "giss-app.firebaseapp.com",
//     databaseURL: "https://giss-app.firebaseio.com",
//     projectId: "giss-app",
//     storageBucket: "giss-app.appspot.com",
//     messagingSenderId: "37340102093",
//     appId: "1:37340102093:web:2505e9b4d272501f001884",
//     measurementId: "G-J8JZWTE7HR"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>