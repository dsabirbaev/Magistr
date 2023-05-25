

////// Modal Window ////////////////

let openBtn = document.getElementById('open');
let closeBtn = document.getElementById('close');
let modal = document.getElementById('modal');



openBtn.addEventListener('click', () => {
    modal.style.display = "flex"
})

closeBtn.addEventListener('click', () => {
    modal.style.display = "none"
})


////////// Tab //////////////////////

let modalTabBtn = document.querySelectorAll('.modal-window__content-btn')
let modalTabItem = document.querySelectorAll('.modal-window__content-item')

modalTabBtn.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let currentBtnId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(currentBtnId)


        if (!currentBtn.classList.contains('active')) {

            modalTabBtn.forEach((item) => {
                item.classList.remove('active')
            })

            modalTabItem.forEach((item) => {
                item.classList.remove('active')
            })

            currentBtn.classList.add('active')
            currentTab.classList.add('active')
          
        }

    })
})


document.querySelector('.modal-window__content-btn').click() /// по умолчанию клик



// Slider


$('.news__card').slick({
    dots: false,
    arrows: true,
    infinite: true,  // бесконечный цикл
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 800,
    
});