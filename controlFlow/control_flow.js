let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full Access Granted";
} else if (userRole === 'manager'){
    accessLevel = "Limited access granted"
}else {
    accessLevel = "No access granted"
}

console.log("Access Level: ", accessLevel)

let isLoggedIn = true;
let userMessage; 

if (isLoggedIn){
    if (userRole === "admin"){
        userMessage = "Welcome, admin";
    } else {
        userMessage = "Welcome, user";
    }
} else {
    userMessage = "Please log in to access the system"
}

console.log("User Message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Suscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Autentication Status: ", authenticationStatus);
