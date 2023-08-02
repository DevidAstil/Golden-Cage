const guideBtn=document.querySelectorAll(".guide_item-img");
const slideItem=document.querySelectorAll(".slideStarts");

guideBtn.forEach(function(item){
    item.addEventListener("click",function(){
        var currentBtn=item;
        var tabId=currentBtn.getAttribute("data-tab");
        var currentTab=document.querySelector(tabId);

        guideBtn.forEach(function(item){
            item.classList.remove('active-guide');
        });
        slideItem.forEach(function(item){
            item.classList.remove('active-guide');
        });

        currentBtn.classList.add('active-guide');
        currentTab.classList.add('active-guide');
    });
});

document.querySelector(".guide_item-img").click();


const animItems=document.querySelectorAll('.anim_items');
if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('animation');
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
}