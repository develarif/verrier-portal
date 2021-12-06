
const walletTabFunc = () => {
    const getTabUl = document.querySelector('#wallet-tab-header');
    const allTabBtn = document.querySelectorAll('#wallet-tab-header > li');
    const tabBody = document.querySelector('.wallet-tab-body');
    const allTabItem = document.querySelectorAll('.tab-item');

    for (let i = 0; i < allTabBtn.length; i++) {
        allTabBtn[i].addEventListener('click', ()=> {
            getTabUl.getElementsByClassName('active')[0].classList.remove('active');
            allTabBtn[i].classList.add('active');

            tabBody.getElementsByClassName('active')[0].classList.remove('active');
            allTabItem[i].classList.add('active');
        });
    }
}
walletTabFunc();

const billingTabFunc = () => {
    const getTabUl = document.querySelector('#billing-tab-ui');
    const allTabBtn = document.querySelectorAll('#billing-tab-ui > li');
    const tabBody = document.querySelector('.billing-tab-body');
    const allTabItem = document.querySelectorAll('.billing-tab-item');

    for (let i = 0; i < allTabBtn.length; i++) {
        allTabBtn[i].addEventListener('click', ()=> {
            getTabUl.getElementsByClassName('active')[0].classList.remove('active');
            allTabBtn[i].classList.add('active');

            tabBody.getElementsByClassName('active')[0].classList.remove('active');
            allTabItem[i].classList.add('active');
        });
    }
}
billingTabFunc();