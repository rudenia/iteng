//E-mail Slider
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

//Select Form
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

$(function () {
    //E-mail Ajax Send
    $("#form__popup,#serviceQuestion__form").submit(function () { //Change
        let th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $(th).find('.success').addClass('active').css('display','block').hide().fadeIn();
            $(th).find('.success').removeClass('active').fadeOut();
            $.magnificPopup.close();
            /*-close form after */
            $('#form__popup,#serviceQuestion__form').trigger('reset');
            setTimeout(function () {

                // Done Functions
            }, 3000);
        });
        return false;
    });

    //Open PopUp
    $(".header-submit__popup").magnificPopup();

    //Open Service Description
    let acc = document.getElementsByClassName("service-list__link");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle("active");

            this.nextElementSibling.classList.toggle("show");
        }
    }

});
