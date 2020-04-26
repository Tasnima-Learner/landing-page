var num=2;
function chng()// no need to use var keyword when declaring parameter
{ 
    var attr=document.createAttribute("src");//attribute node
   
    var imgh=document.getElementById("im1");
    var icon1=document.getElementById("r8icn");
    var icon2=document.getElementById("lf8icn");
    if(num<=3)
    { icon2.style.visibility="hidden";
    attr.value="bg__"+num+".jpg";
    imgh.setAttributeNode(attr);
    if(num==3)
    {
        
        icon1.style.visibility="hidden";
        icon2.style.visibility="visible";

    }
    num+=1;
    }
     


}
function chng2()
{
    var attr=document.createAttribute("src");//attribute node
   
    var imgh=document.getElementById("im1");
    var icon1=document.getElementById("r8icn");
    var icon2=document.getElementById("lf8icn");
if(num==4)
{
    num=num-2;
}
else
num=num-1;

if(num>0)
{
    attr.value="bg__"+num+".jpg";
    imgh.setAttributeNode(attr);
    if(num==1)
    {
        icon1.style.visibility="visible";
        icon2.style.visibility="hidden";   
        chng();
    }
}


}