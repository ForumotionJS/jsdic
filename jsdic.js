function getSel() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

var dict = [
    { title: "window.getSelection", desc: "A range of the text that are selected" },
    { titlet: "var", desct: "Variable of JS" },
    { titlef: "document.getElementById", descf: "Get the ID of the current element" },
    { titlew: "my_setcookie", descw: "Set a cookie" },
    { titles: "my_getcookie", descs: "Get a cookie" },
    { titleo: "_userdata", desco: "User storage" }
];

for (var i = 0; i < dict.length; i += 1) {
  if(getSel() == dict[i].title) {
    alert(dict[i].desc);
  }else if(getSel() == dict[i].titlet) {
    alert(dict[i].desct);
  }else if(getSel() == dict[i].titlef) {
    alert(dict[i].descf);
  }else if(getSel() == dict[i].titles) {
    alert(dict[i].descs);
  }else if(getSel() == dict[i].titleo) {
    alert(dict[i].desco);
  }
}
