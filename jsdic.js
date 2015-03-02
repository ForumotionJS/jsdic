getSel = window.getSelection();

var def = {
  window.getSelection: 'A range of the text that are selected',
  var: 'Variable of JS',
  document.getElementById: 'Get the ID of the current element',
  my_setcookie: 'Set a cookie',
  my_getcookie: 'Get a cookie',
  _userdata: 'User storages'
};

if(getSel === window.getSelection) {
  alert(def.window.getSelection);
}

if(getSel === var) {
  alert(def.var);
}

if(getSel === document.getElementById) {
  alert(def.document.getElementById);
}

if(getSel === my_setcookie) {
  alert(def.my_setcookie);
}

if(getSel === my_getcookie) {
  alert(def.my_getcookie);
}

if(getSel === _userdata) {
  alert(def._userdata);
}
