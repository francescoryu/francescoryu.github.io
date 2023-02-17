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