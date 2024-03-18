let sliderImages=Array.from(document.querySelectorAll(".slider-container img"))
let imagesCount=sliderImages.length

let currentPic=1;
let picNum=document.getElementById("slide-num")
let prevBtn=document.getElementById("prev")
let nextBtn=document.getElementById("next")
prevBtn.onclick=prevPic;
nextBtn.onclick=nextPic;
let indicatorElement=document.createElement("ul")
indicatorElement.setAttribute("id","indi");
for(let i=1;i<=imagesCount;i++)
{
    let indicatorItem=document.createElement("li")
    indicatorItem.setAttribute("data-index",i)
    indicatorItem.appendChild(document.createTextNode(i))
    indicatorElement.appendChild(indicatorItem)
}
document.getElementById("indicators").appendChild(indicatorElement)
indiUl=document.getElementById("indi")
let indiItems=Array.from(document.querySelectorAll("#indi li"))

checker()

function nextPic(){
    if(!nextBtn.classList.contains("disabled"))
    {
        currentPic++
        checker()  
    } else{
            return false
    }
}

function prevPic(){
    if(!prevBtn.classList.contains("disabled"))
    {
        currentPic--
        checker()  
    } else{
            return false
    }
}

function checker(){
    picNum.textContent=currentPic+" of "+imagesCount;
       removeAllActice()
    sliderImages[currentPic-1].classList.add("active")
    indiUl.children[currentPic-1].classList.add("active")
   if(currentPic==1)
   {
    prevBtn.classList.add("disabled")
   }else{
    prevBtn.classList.remove("disabled")
   }

   if(currentPic==imagesCount)
   {
    nextBtn.classList.add("disabled")
   }else{
    nextBtn.classList.remove("disabled")
   }

}


function removeAllActice(){
    sliderImages.forEach(function(img){
        img.classList.remove("active")
    })

    indiItems.forEach(function(i){
        i.classList.remove("active")
    })
}

indiItems.forEach(function(e){
    e.addEventListener("click",function(){
        currentPic=parseInt(e.getAttribute("data-index"))
        checker();
    })
})