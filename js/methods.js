//https://stackoverflow.com/questions/25981198/how-to-hide-one-div-and-show-another-div-using-button-onclick
function loadContent() {
    document.getElementById("pwdReset").style.visibility = "hidden";
}

function switchVisible() {
    if (document.getElementById("page1")) {

        if (document.getElementById("page1").style.display == 'none') {
            document.getElementById("page1").style.display = 'block';
            document.getElementById("page2").style.display = 'none';
        }
        else {
            document.getElementById("page1").style.display = 'none';
            document.getElementById("page2").style.display = 'block';
        }
    }
}

function showDiv() {
    document.getElementById("pwdReset").style.visibility = "visible";
}

function makeUserInfoEditable() {
    document.getElementById("email").contentEditable = "true";
    document.getElementById("username").contentEditable = "true";
    document.getElementById("class").contentEditable = "true";
    document.getElementById("points").contentEditable = "true";
}

function makeUserInfoUneditable() {
    document.getElementById("email").contentEditable = "false";
    document.getElementById("username").contentEditable = "false";
    document.getElementById("class").contentEditable = "false";
    document.getElementById("points").contentEditable = "false";
}