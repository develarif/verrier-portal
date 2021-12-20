
function singleWebsiteSlider() {

    const getSliderContainer = document.querySelector('#single-website-slider');
    const getSliderItems    =   document.querySelectorAll('.single-website-slider > .item')
    const getSliderPagination = document.querySelector('#slider-pagination');
    const getPagiItems  = document.querySelectorAll('.pagi');

    for (let i = 0; i < getPagiItems.length; i++) {
        getPagiItems[i].addEventListener('click', () => {
            getSliderPagination.getElementsByClassName('active')[0].classList.remove('active');
            getPagiItems[i].classList.add('active');

            getSliderContainer.getElementsByClassName('active')[0].classList.remove('active');
            getSliderItems[i].classList.add('active');
        });
    }

}
singleWebsiteSlider();