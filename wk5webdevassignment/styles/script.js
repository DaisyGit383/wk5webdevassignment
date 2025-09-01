// Student Object (variables)
let student = {
  name: "Park Sojun",
  course: "Software Engineering",
  year: Final,
  grades: [75, 82, 90, 68, 88],
  hobbies: ["Travelling", "Coding", "Football"]
};

// Functions
// Display all grades in the list
function displayGrades() {
  let gradesList = document.getElementById("gradesList");
  gradesList.innerHTML = "";

  // Loop through grades
  for (let i = 0; i < student.grades.length; i++) {
    let li = document.createElement("li");
    li.textContent = "Subject " + (i + 1) + ": " + student.grades[i];
    gradesList.appendChild(li); // DOM update
  }
}

// Calculating the average grade
function calculateAverage() {
  let total = 0;

  // Loop to sum grades
  for (let grade of student.grades) {
    total += grade;
  }

  let average = total / student.grades.length;

  // Conditional check
  let message = average >= 70 ? "Good performance! Keep it up!" : "Needs improvement.";

  // Update result in DOM
  document.getElementById("averageResult").textContent =
    "Average: " + average.toFixed(2) + " - " + message;
}

// Change the student’s course when button is clicked
function changeCourse() {
  // Conditional to toggle between courses
  student.course =
    student.course === "Software Engineer"
      ? "Computer Science"
      : "Software Engineering";

  // Update course info in DOM
  document.getElementById("studentCourse").textContent =
    "Course: " + student.course;
}

// List student hobbies
function listHobbies() {
  let hobbyList = document.getElementById("hobbyList");
  hobbyList.innerHTML = "";

  // Loop through hobbies
  student.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    hobbyList.appendChild(li); // DOM update
  });
}

// Run when page loads
displayGrades();

