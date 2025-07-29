const form = document.getElementById("registerForm").value;
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const age = document.getElementById("age").value;
const course = document.getElementById("course").value;

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  formControl.querySelector("small").innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  function checkRequired(inputs) {
    let isValid = true;
    inputs.forEach(function (input) {
      if (input.value.trim() === "") {
        showError(input, `${getFieldName(input)} is required`);
        isValid = false;
      } else {
        showSuccess(input);
      }
    });
    return isValid;
  }

  function checkname(input) {
    const checkregex = /^[A-Za-z\s]+$/;
    if (!checkregex.test(input.value.trim())) {
      showError(input, "Name is not valid");
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  }
  function checkage(input) {
    const checkregex = /^(1[0-9]|[2-9][0-9]|1[01][0-9]|120)$/;
    if (!checkregex.test(input.value.trim())) {
      showError(input, "Age is not valid");
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  }
  function checkEmail(input) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(input.value.trim())) {
      showError(input, "Email is not valid");
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  }
  function checkPhoneNumber(input) {
    const regex = /^[6-9]\d{9}$/;
    const value = input.value.trim();

    if (value === "") {
      showError(input, "Phone number is required");
      return false;
    } else if (!regex.test(value)) {
      showError(input, "Phone number is not valid");
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  }

  function checkcourse(input) {
    const checkregex = /^(btech|mtech|mba|bba)$/;
    if (!checkregex.test(input.value.trim())) {
      showError(input, "course is not valid");
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  }

  const isRequiredValid = checkRequired([name, email, phone, age, course]);
  const isEmailValid = checkEmail(email);
  const isnameValid = checkname(name);
  const isphonevalid = checkPhoneNumber(phone);
  const isage = checkage(age);
  const ischeckcourse = checkcourse(course);

  if (
    isRequiredValid &&
    isEmailValid &&
    isnameValid &&
    isphonevalid &&
    isage &&
    ischeckcourse
  ) {
    const user = {
      name: "chetan_sharma",
      age: "22",
      email: "cs660238@gmail.com",
      phone: "8770783239",
      course: "btech",
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Form Submitted Successfully!");
    form.reset();
    document
      .querySelectorAll(".form-control")
      .forEach((div) => (div.className = "form-control"));

    window.location.href = "table.html";
  }
});
