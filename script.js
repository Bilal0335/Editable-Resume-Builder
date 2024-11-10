// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
if (form) {
    // Handle form submission
    form.addEventListener('submit', function (event) {
        var _a, _b, _c, _d, _e, _f;
        event.preventDefault(); // prevent page reload
        // Collect input values
        var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
        var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || '';
        var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || '';
        var education = ((_d = document.getElementById('education')) === null || _d === void 0 ? void 0 : _d.value) || '';
        var experience = ((_e = document.getElementById('experience')) === null || _e === void 0 ? void 0 : _e.value) || '';
        var skills = ((_f = document.getElementById('skills')) === null || _f === void 0 ? void 0 : _f.value) || '';
        // Generate the resume content dynamically
        var resumeHTML = "\n            <h2><b>Editable Resume</b></h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n            <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('The resume display element is missing.');
        }
    });
}
else {
    console.error('The form element is missing.');
}
