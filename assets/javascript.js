// <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->

    var firebaseConfig = {
    apiKey: "AIzaSyACyjZR80fGfMU6E8m9wp-2GZoTm37xkc4",
    authDomain: "activity-9bee5.firebaseapp.com",
    databaseURL: "https://activity-9bee5.firebaseio.com",
    projectId: "activity-9bee5",
    storageBucket: "",
    messagingSenderId: "107365426255",
    appId: "1:107365426255:web:ea28b339d9c4eb40"
}
  firebase.initializeApp(firebaseConfig);





new google.maps.places.Autocomplete(document.getElementById('autocomplete)'));

var ac = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
google.maps.event.addListener(ac, 'places_changed', function () {
    var place = ac.getPlace();
    console.log(place.formatted_address);
    console.log(place.url);
    console.log(place.geometry.location);
});