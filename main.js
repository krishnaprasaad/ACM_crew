const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () =>{
    let scrollLeftValue = tabMenu.scrollLeft;
    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none" ;
    
}

btnRight.addEventListener('click',() =>{
    tabMenu.scrollLeft += 150;
    IconVisibility();

    setTimeout(() => IconVisibility(),50);
});

btnLeft.addEventListener('click',() =>{
    tabMenu.scrollLeft -= 150;
    IconVisibility();
});

let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) =>{
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    IconVisibility();
    tabMenu.classList.add("dragging")
});

document.addEventListener("mouseup", ()=>{
    activeDrag = false;
    tabMenu.classList.remove("dragging")
});

tabMenu.addEventListener("mousedown", ()=>{
    activeDrag = true;
})


const tabs = document.querySelectorAll(".tab");
const tabsBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnClick){
    tabsBtns.forEach((tabBtn) =>{
        tabBtn.classList.remove("active");
    });

    tabs.forEach((tab) =>{
        tab.classList.remove("active");
    });

    tabsBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
};

tabsBtns.forEach((tabsBtns,i)=>{
    tabsBtns.addEventListener("click",()=>{
        tab_Nav(i);
    });
});