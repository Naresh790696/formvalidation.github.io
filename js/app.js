function validation(e) {
    event.preventDefault();
    let user_ref = document.getElementById("user").value;
    let pass_ref = document.getElementById("pass").value;
    let conpass_ref = document.getElementById("conpass").value;
    let mobile_ref = document.getElementById("mobile").value;
    let email_ref = document.getElementById("email").value;

    //  Userfield Code;
    if (user_ref == "") {
        document.getElementById("username").innerHTML = "***please fill the username field"
        return false;
    }
    if ((user_ref.length <= 2) || (user_ref.length > 20)) {
        document.getElementById("username").innerHTML = "***username must be between 3 or 20"
        return false;
    }

    if (!isNaN(user_ref)) {
        document.getElementById("username").innerHTML = "***username should be eg. passwa1234 or simple name"
        return false;

    }
    // Passwardfield Code;
    if (pass_ref == "") {
        document.getElementById("passward").innerHTML = "***please fill the passward field"
        return false;
    }
    if ((pass_ref.length <= 5) || (pass_ref.length > 20)) {
        document.getElementById("passward").innerHTML = "***passward length must be 6 to 20"
        return false;

    }
    if (pass_ref != conpass_ref) {
        document.getElementById("passward").innerHTML = "***passward not match try again"
        return false;
    }

    //    Conformfield field
    if (conpass_ref == "") {
        document.getElementById("confrmpass").innerHTML = "***please Fill the confrim passward field"
        return false;
    }

    // Mobilefiele Code;
    if (mobile_ref == "") {
        document.getElementById("mobileno").innerHTML = "***please Fill the mobile number field"
        return false;
    }
    if (isNaN(mobile_ref)) {
        document.getElementById("mobileno").innerHTML = "***mobile number must be use numbers only"
        return false;
    }


    // Emailfield Code;
    if (email_ref == "") {
        document.getElementById("emails").innerHTML = "***please Fill the email field"
        return false;
    }
    if (email_ref.indexOf("@") <= 0) {
        document.getElementById("emails").innerHTML = "***you can't start with @ or any special character"
        return false;
    }
    if ((email_ref.charAt(email_ref.length - 4) != ".") && (email_ref.charAt(email_ref.length - 3) != ".")) {
        document.getElementById("emails").innerHTML = "*** '.' was not using right place"
        return false;
    }

    alert("form submmit successfully");
}