class User {
	constructor(username, password) {
		this.username = username;
		this.password = password;
	}
}

// Load users from localStorage on page load
const storedUsers = localStorage.getItem('users');
const users = storedUsers ? JSON.parse(storedUsers) : [];

// Register
function register() {
	const username = document.getElementById("registerUsername").value;
	const useremail = document.getElementById("registerEmail").value;
	const password = document.getElementById("registerPassword").value;
	const cfpassword = document.getElementById("cfPassword").value;

	// Checks
	if (username == "") {
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.onmouseenter = Swal.stopTimer;
			  toast.onmouseleave = Swal.resumeTimer;
			}
		  });
		  Toast.fire({
			icon: "warning",
			title: "Please enter a username"
		  });
		  
		return false;
	}

	if (useremail == "") {
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.onmouseenter = Swal.stopTimer;
			  toast.onmouseleave = Swal.resumeTimer;
			}
		  });
		  Toast.fire({
			icon: "warning",
			title: "Please enter your Email"
		  });
		return false;
	}

	if (password == "") {
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.onmouseenter = Swal.stopTimer;
			  toast.onmouseleave = Swal.resumeTimer;
			}
		  });
		  Toast.fire({
			icon: "warning",
			title: "Please enter your password"
		  });
		return false;
	}

	if (cfpassword != password) {
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.onmouseenter = Swal.stopTimer;
			  toast.onmouseleave = Swal.resumeTimer;
			}
		  });
		  Toast.fire({
			icon: "warning",
			title: "Please confirm your password"
		  });
		return false;
	}

	// Check if the username already exists
	if (users.some(user => user.username === username)) {
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.onmouseenter = Swal.stopTimer;
			  toast.onmouseleave = Swal.resumeTimer;
			}
		  });
		  Toast.fire({
			icon: "warning",
			title: "Username already used"
		  });
		return false;
	}

	// Kiểm tra có tick vào ô Terms and Conditions không
	if (document.getElementById("terms").checked == false) {
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.onmouseenter = Swal.stopTimer;
			  toast.onmouseleave = Swal.resumeTimer;
			}
		  });
		  Toast.fire({
			icon: "warning",
			title: "You did not agree with our terms and condition"
		  });
		return false;
	}

	// Add account into list
	const user = new User(username, password);
	users.push(user);

	// Save users to localStorage
	localStorage.setItem('users', JSON.stringify(users));

	const Toast = Swal.mixin({
		toast: true,
		position: "bottom-end",
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
		  toast.onmouseenter = Swal.stopTimer;
		  toast.onmouseleave = Swal.resumeTimer;
		}
	  });
	  Toast.fire({
		icon: "success",
		title: "Signed up successfully"
	  });

	// Reset input
	document.getElementById("registerUsername").value = "";
	document.getElementById("registerEmail").value = "";
	document.getElementById("registerPassword").value = "";
	document.getElementById("cfPassword").value = "";
	document.getElementById("terms").checked = false;

	return true;
}

// Login
function login() {
	const username = document.getElementById("loginUsername").value;
	const password = document.getElementById("loginPassword").value;

	// Checks
	if (username == "") {
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.onmouseenter = Swal.stopTimer;
			  toast.onmouseleave = Swal.resumeTimer;
			}
		  });
		  Toast.fire({
			icon: "warning",
			title: "Please enter your username"
		  });
		return false;
	}

	if (password == "") {
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.onmouseenter = Swal.stopTimer;
			  toast.onmouseleave = Swal.resumeTimer;
			}
		  });
		  Toast.fire({
			icon: "warning",
			title: "Please enter you password"
		  });
		return false;
	}

	// Check user list
	const user = users.find(user => user.username === username && user.password === password);

	if (user) {
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.onmouseenter = Swal.stopTimer;
			  toast.onmouseleave = Swal.resumeTimer;
			}
		  });
		  Toast.fire({
			icon: "success",
			title: "Succesfully signed in"
		  });

	} else {
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
			  toast.onmouseenter = Swal.stopTimer;
			  toast.onmouseleave = Swal.resumeTimer;
			}
		  });
		  Toast.fire({
			icon: "warning",
			title: "Something went wrong"
		  });
		return false;
	}
}

