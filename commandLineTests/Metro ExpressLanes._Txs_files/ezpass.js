var submitFlag = false;

function getCurrentDate(){
    var d = new Date();
    var monthNames = new Array("Jan.","Feb.","March","April","May","June","July","August","Sept.","Oct.","Nov.","Dec.");
	return(monthNames[d.getMonth()] + ' ' + d.getDate() + ',' + ' '+ d.getFullYear());
}

function changeToUpperCase(element){
	//element.value = element.value.toUpperCase();
}
/* 11.23.2007  R.Anbarasi */
function initPCI()
{
	setAutoCompleteOff();
	preventCrossFrameScripting();
}

/* 11.23.2007  R.Anbarasi */
function disableBrowserBackButton()
{
	javascript:window.history.forward(1);
}

function captureEnterKey(obj,event)
{
	if(window.event)
              key = window.event.keyCode; 
         else
              key = e.which;  
	if (key == 13 )
    {
      CCUtility.submitEnclosingForm(obj);
     }
}

/* 11.15.2007  R.Anbarasi */
function setAutoCompleteOff()
{ 
	if (document.getElementsByTagName)
 	{ 
		var inputElements = document.getElementsByTagName("input"); 
		for (i=0; inputElements[i]; i++)
 		{ 
			inputElements[i].setAttribute("autocomplete","off"); 
		}
	}
}

/* 11.15.2007  R.Anbarasi */
function preventCrossFrameScripting()
{
	if (top != self)
	{
		top.location=self.location;
	}
}

/* 22.01.2008  Murali Mahesh */
function preventBrowseBack()
{
	window.history.forward();
	if(window.history.forward(1)!=null)
	{
		window.history.forward(1);
	}
}
function printWindow() {
	window.print();
	return false;
}

function closeWindow() {
	window.close();
	return true;
}

var imagecache = new Array();
function buttons (btn_name) {
	var inputs = document.getElementsByTagName("input");
	var inp;
	for (var i=0; i < inputs.length; i++) {
		inp = inputs[i];
		if (inp.name != "") {
			if (inp.name.substring(0,3) == "btn" && inp.src.search(/buttons/)>0 && inp.className != "hb") {
				imagecache[i] = new Image(); 
				imagecache[i].src = inp.src.substring(0,inp.src.length-5) + "2.gif";
			}
		}
	}
}


/***********************************************
* Pop-it menu- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

var defaultMenuWidth="200px" //set default menu width.
var linkset=new Array()
//SPECIFY MENU SETS AND THEIR LINKS. FOLLOW SYNTAX LAID OUT
////No need to edit beyond here
var ie5=document.all && !window.opera
var ns6=document.getElementById

if (ie5||ns6)
document.write('<div id="popitmenu" onMouseover="clearhidemenu();" onMouseout="dynamichide(event)"></div>')

function iecompattest(){
return (document.compatMode && document.compatMode.indexOf("CSS")!=-1)? document.documentElement : document.body
}

function showmenu(e, which, optWidth){
if (!document.all&&!document.getElementById)
return
clearhidemenu()
menuobj=ie5? document.all.popitmenu : document.getElementById("popitmenu")
menuobj.innerHTML=which
menuobj.style.width=(typeof optWidth!="undefined")? optWidth : defaultMenuWidth
menuobj.contentwidth=menuobj.offsetWidth
menuobj.contentheight=menuobj.offsetHeight
eventX=ie5? event.clientX : e.clientX
eventY=ie5? event.clientY : e.clientY
//Find out how close the mouse is to the corner of the window
var rightedge=ie5? iecompattest().clientWidth-eventX : window.innerWidth-eventX
var bottomedge=ie5? iecompattest().clientHeight-eventY : window.innerHeight-eventY
//if the horizontal distance isn't enough to accomodate the width of the context menu
if (rightedge<menuobj.contentwidth)
//move the horizontal position of the menu to the left by it's width
menuobj.style.left=ie5? iecompattest().scrollLeft+eventX-menuobj.contentwidth+"px" : window.pageXOffset+eventX-menuobj.contentwidth+"px"
else
//position the horizontal position of the menu where the mouse was clicked
menuobj.style.left=ie5? iecompattest().scrollLeft+eventX+"px" : window.pageXOffset+eventX+"px"
//same concept with the vertical position
if (bottomedge<menuobj.contentheight)
menuobj.style.top=ie5? iecompattest().scrollTop+eventY-menuobj.contentheight+"px" : window.pageYOffset+eventY-menuobj.contentheight+"px"
else
menuobj.style.top=ie5? iecompattest().scrollTop+event.clientY+"px" : window.pageYOffset+eventY+"px"
menuobj.style.visibility="visible"
return false
}

function contains_ns6(a, b) {
//Determines if 1 element in contained in another- by Brainjar.com
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function hidemenu(){
if (window.menuobj)
menuobj.style.visibility="hidden"
}

function dynamichide(e){
if (ie5&&!menuobj.contains(e.toElement))
hidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
hidemenu()
}

function delayhidemenu(){
delayhide=setTimeout("hidemenu()",500)
}

function clearhidemenu(){
if (window.delayhide)
clearTimeout(delayhide)
}

if (ie5||ns6)
document.onclick=hidemenu

var cssmenuids=[] //Enter id(s) of CSS Horizontal UL menus, separated by commas
var csssubmenuoffset=-1 //Offset of submenus from main menu. Default is 0 pixels.

function createcssmenu2(){
for (var i=0; i<cssmenuids.length; i++){
  var ultags=document.getElementById(cssmenuids[i]).getElementsByTagName("ul")
  	if (!!ultags) {
	    for (var t=0; t<ultags.length; t++){
				ultags[t].style.top=ultags[t].parentNode.offsetHeight+csssubmenuoffset+"px"
	    	var spanref=document.createElement("span")
				spanref.className="arrowdiv"
				spanref.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"
				ultags[t].parentNode.getElementsByTagName("a")[0].appendChild(spanref)
	    	ultags[t].parentNode.onmouseover=function(){
						this.style.zIndex=100
	    	this.getElementsByTagName("ul")[0].style.visibility="visible"
						this.getElementsByTagName("ul")[0].style.zIndex=0
	    	}
	    	ultags[t].parentNode.onmouseout=function(){
						this.style.zIndex=0
						this.getElementsByTagName("ul")[0].style.visibility="hidden"
						this.getElementsByTagName("ul")[0].style.zIndex=100
	    	}
	    }
    }
  }
}
function validateDevicefieldsMain(){
	var devNum = document.forms[0].deviceNumber.value;
	var dev='';
	var i=0;
	if(devNum.length>0){
	if(devNum.length<11){
		for(i=0;i<11-devNum.length;i++){
		dev='0'+dev;
		}  		
  		}  	
  		document.forms[0].deviceNumber.value=dev+devNum;
	}
}
function validateTransponderNofieldsMain(){
	var devNum = document.forms[0].transponderNo.value;
	var dev='';
	var i=0;
	if(devNum.length>0){
	if(devNum.length<11){
		for(i=0;i<11-devNum.length;i++){
		dev='0'+dev;
		}  		
  		}  	
  		document.forms[0].transponderNo.value=dev+devNum;
	}
}
function validateTransponderTagReg(){
	var devNum = document.forms[0].transponderNumber.value;
	var dev='';
	var i=0;
	if(devNum.length>0){
	if(devNum.length<11){
		for(i=0;i<11-devNum.length;i++){
		dev='0'+dev;
		}  		
  		}  	
  		document.forms[0].transponderNumber.value=dev+devNum;
	}
}
function validateTransponderNofieldsMainPPTL(){
	var devNum = document.forms[0].transponderNoPPTL.value;
	var dev='';
	var i=0;
	if(devNum.length>0){
	if(devNum.length<11){
		for(i=0;i<11-devNum.length;i++){
		dev='0'+dev;
		}  		
  		}  	
  		document.forms[0].transponderNoPPTL.value=dev+devNum;
	}
}

function validateDevicefieldsLoginMain(){

var chosen = "";
var len = document.forms[0].loginType.length;
for (i = 0; i <len; i++) {
if (document.forms[0].loginType[i].checked) {
chosen = document.forms[0].loginType[i].value;
}
}
if (chosen == "tag") {
var devNum = document.forms[0].login.value;
	var dev='';
	var i=0;
	if(devNum.length<11){
		for(i=0;i<11-devNum.length;i++){
		dev='0'+dev;
		}  		
  		}  	
  		document.forms[0].login.value=dev+devNum;
}

}
function validateAddTransponderNofieldsMain(){
	var devNum = document.forms[0].addTransponderNumber.value;
	var dev='';
	var i=0;
	if(devNum.length>0){
	if(devNum.length<11){
		for(i=0;i<11-devNum.length;i++){
		dev='0'+dev;
		}  		
  		}  	
  		document.forms[0].addTransponderNumber.value=dev+devNum;
	}
}
if (window.addEventListener)
window.addEventListener("load", createcssmenu2, false)
else if (window.attachEvent)
window.attachEvent("onload", createcssmenu2)