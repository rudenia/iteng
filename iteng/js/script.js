$(document).ready(function(){
    $('.offer-slide').slick({
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 15000,
        dots: true,
        dotsClass: "offer-slide__dots",
    });
});

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item=>{
        item.addEventListener('click', selectChoose)
    });
    
    function selectToggle () {
        this.parentElement.classList.toggle('is_active');
    }
    
    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is_active');
    }
};

select();