window.onload = function onloadDoc() {
    document.getElementById("saveButton").disabled = true;
}

function makeUserInfoEditable() {
    document.getElementById("email").contentEditable = "true";
    document.getElementById("username").contentEditable = "true";
    document.getElementById("class").contentEditable = "true";
    document.getElementById("saveButton").disabled = false;
    document.getElementById("editButton").disabled = true;
}

function makeUserInfoUneditable() {
    document.getElementById("email").contentEditable = "false";
    document.getElementById("username").contentEditable = "false";
    document.getElementById("class").contentEditable = "false";
    document.getElementById("saveButton").disabled = true;
    document.getElementById("editButton").disabled = false;
}

function createTempButton() {
        var doc = document;
        var docFrag = document.createDocumentFragment();
      
        for(var x = 0; x < 6; x++){
          var button = doc.createElement("button");
          button.className = "quizButton";
          button.innerText = "QUIZ " + (x + 1);
          docFrag.appendChild(button);
        }
      
        doc.getElementById("fieldset").appendChild(docFrag);
      }