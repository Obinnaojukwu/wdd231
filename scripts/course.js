const courses = [
    { code: "CSE 110", name: "Intro to Programming", completed: false },
    { code: "WDD 130", name: "Web Fundamentals", completed: true },
    { code: "CSE 111", name: "Programming with Functions", completed: false },
    { code: "CSE 210", name: "Object-Oriented Programming", completed: false },
    { code: "WDD 131", name: "Web Development", completed: true },
    { code: "WDD 231", name: "Advanced Web Development", completed: false }
];

function displayCourses(filter = "all") {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";

    let filteredCourses = courses;
    if (filter === "CSE") filteredCourses = courses.filter(c => c.code.startsWith("CSE"));
    if (filter === "WDD") filteredCourses = courses.filter(c => c.code.startsWith("WDD"));

    filteredCourses.forEach(course => {
        const div = document.createElement("div");
        div.textContent = course.code;
        div.classList.add(course.completed ? "completed" : "pending");
        courseList.appendChild(div);
    });
}

document.getElementById("all").addEventListener("click", () => displayCourses("all"));
document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));

displayCourses();
