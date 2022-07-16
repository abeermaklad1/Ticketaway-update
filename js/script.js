
var imgs = Array.from(document.querySelectorAll(".item img")); //NodeList //Array.from
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex = 0;

for(var i=0; i<imgs.length; i++)
{
    imgs[i].addEventListener("click", function(eventInfo){

        currentIndex = imgs.indexOf(eventInfo.target);

        var imgSrc = eventInfo.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
        lightBoxContainer.style.display = "flex";
    })
}

function nextSlide() {
    currentIndex++;
    if(currentIndex == imgs.length)
    {
        currentIndexc = 0;
    }
        
        var imgSrc = imgs[currentIndex].getAttribute("src");
        lightBoxItem.style.backgroundImage = "url("+imgSrc+")"; 
}

nextBtn.addEventListener("click", nextSlide);

function prevSlide() {
    currentIndex--;
    if(currentIndex < 0)
    {
        currentIndexc = imgs.length - 1;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url("+imgSrc+")"; 
}

prevBtn.addEventListener("click", prevSlide);

closeBtn.addEventListener("click", function(){
    lightBoxContainer.style.display = "none";
})



/****************************************Accordian******* */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}