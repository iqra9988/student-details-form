// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const rollNumber = document.getElementById('rollNumber').value;
  const name = document.getElementById('name').value;
  const batch = document.getElementById('batch').value;
  const section = document.getElementById('section').value;

  // Validate the name length
  if (name.length < 3 || name.length > 15) {
    alert('Name must be between 3 and 15 characters long.');
    return; // Stop the form submission if validation fails
  }

  // Create an object with the student details
  const studentDetails = {
    rollNumber: rollNumber,
    name: name,
    batch: batch,
    section: section
  };

  // Store the student details in Session Storage
  sessionStorage.setItem('studentDetails', JSON.stringify(studentDetails));

  // Optional: Display a message or perform any other actions upon successful storage
  alert('Student details have been stored in Session Storage.');
});
// Retrieve the student details from Session Storage
const storedStudentDetails = sessionStorage.getItem('studentDetails');
