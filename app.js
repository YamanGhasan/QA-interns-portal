// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqF0B0O6KV9iZwVLusGpyrQtkGWp8WdFM",
    authDomain: "qa-interns-portal.firebaseapp.com",
    databaseURL: "https://qa-interns-portal-default-rtdb.firebaseio.com",
    projectId: "qa-interns-portal",
    storageBucket: "qa-interns-portal.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Get the database instance

// Handle form submission
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('studentName').value;
    const email = document.getElementById('studentEmail').value;

    console.log("Submitting:", { name, email }); // Debugging line

    // Create a reference for a new student entry
    const newStudentRef = ref(db, 'students/' + Date.now()); // Unique key based on timestamp
    
    // Use set() to add new data under a unique key
    set(newStudentRef, {
        name: name,
        email: email
    }).then(() => {
        alert('Student added successfully!');
        document.getElementById('studentForm').reset();
    }).catch((error) => {
        console.error('Error adding student:', error);
        alert('Error adding student.');
    });
});