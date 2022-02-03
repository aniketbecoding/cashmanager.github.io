var billamount=document.querySelector("#billAmount");
var cash=document.querySelector("#cashprovided");
var btn=document.querySelector("#chkbtn");
const message=document.querySelector("#errormessage");
var numberofnotes=document.querySelectorAll(".no-of-notes");
const notesavailable=[2000,500,100,20,10,5,1];

btn.addEventListener("click",  function validate(){
    hidemessage();
    if(billamount.value>0){
        if(parseInt(cash.value)>=parseInt(billamount.value)){
            var amounttoreturn=parseInt(cash.value)-parseInt(billamount.value);
            findchange(amounttoreturn);
        }
        else{
            showmessage("Cash amount is too less.Please provide enough cash!")
        }

    }
    else{
       showmessage("Please enter a valid bill amount!")
    }
});
function findchange(amounttoreturn){
    for(let i=0;i<notesavailable.length;i++){
        var numofnotes=Math.trunc(amounttoreturn/notesavailable[i]);
        amounttoreturn=amounttoreturn % notesavailable[i];
        numberofnotes[i].innerText=numofnotes;
    }
}
function hidemessage(){
    message.style.display="none";
}
function showmessage(msg){
    message.style.display="block";
   message.innerText=msg;
}
