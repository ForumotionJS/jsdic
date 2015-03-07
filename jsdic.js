window.onmouseup = getSel;
window.onkeyup = getSel;

function getSel(){
    var dict = [
        { title: "window.getSelection", desc: "A range of the text that are selected" },
        { title: "var", desc: "Variable of JS" },
        { title: "document.getElementById", desc: "Get the ID of the current element" },
        { title: "my_setcookie", desc: "Set a cookie" },
        { title: "my_getcookie", desc: "Get a cookie" },
        { title: "_userdata", desc: "User storage" },
        { title: "document.createElement", desc: "Create a HTML specified element" }
    ],
    text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    dict.forEach(function(v){
        if(text===v.title){
            alert(v.desc);
        }
    });
}
