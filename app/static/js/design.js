$(document).ready(function () {
  $('#title').focus();
  $('#text').autosize();
});

function reply() {
  var divobj = document.querySelector("#divapp");
  var f = document.createElement("form");
  f.setAttribute('method', "post");
  f.setAttribute('action', "/submit");
  f.setAttribute('id', "textform");
  //textarea name="content" rows="4" cols="50" placeholder="Please Enter..."
  var textbox = document.createElement("input");
  textbox.name = "content";
  textbox.type = "textarea";
  textbox.name = "content";
  textbox.placeholder = "please enter";

  var i = document.createElement("input"); //input element, text
  i.setAttribute('type', "text");
  i.setAttribute('name', "author");
  i.setAttribute('placeholder', "Your name");

  var s = document.createElement("input"); //input element, Submit button
  s.setAttribute('type', "submit");
  s.setAttribute('value', "post");

  f.appendChild(textbox);
  f.appendChild(i);
  f.appendChild(s);
  divobj.appendChild(f);

  //and some more input elements here
  //and dont forget to add a submit button

  //document.getElementsByTagName('body')[0].appendChild(f);
}