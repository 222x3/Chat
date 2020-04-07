function sendChat(){
  if($("#yourName").val() == ""){
    console.log("Error: No username entered.")
    return false;
  }
  if($("#yourMessage").val() == ""){
    console.log("Error: No message entered.")
    return false;
  }
  $.post("/sendChat", {name:$("#yourName").val(),msg:$("#yourMessage").val()},sendChatSuccess);
  return false;
}
function sendChatSuccess(data){
  console.log(data);
}
$(document).ready(function(){
  console.log("home.js loaded")

  $("#sendChat").click(sendChat);
})
