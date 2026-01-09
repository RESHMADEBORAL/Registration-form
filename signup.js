alert("Welcome");
function validate(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value.trim();
    if(name === "") {
        alert("Name cannot be empty");
        return;
    }
    let phn=document.getElementsByClassName("phn")[0].value.trim();
    let p = /^\d{10}$/;
    if(!p.test(phn)) {
        document.getElementById("phnError").innerText = "Invalid phone number";
        return;
    }
    let email=document.getElementById("email").value.trim();
    let e=/^[^@]+@gmail\.com$/;
    if(!e.test(email)) {
        document.getElementById("errorEmail").innerHTML="<span>Enter valid email</span>";
        return;
    }
    let pass=document.getElementById("pass").value.trim();
    if(pass.length<6) {
        document.getElementById("errorPass").innerText="Password must be at least 6 characters long";
        return;
    }
}