const getBtnArea = document.querySelector('.vp__dark__mode');
const getInput = document.querySelector('#dark-input');
const getLabel = document.querySelector('#darkinput-label');

getInput.addEventListener('change', () => {
    if (getInput.checked) {
        getLabel.querySelector('.moon').style.display = 'none';
        getLabel.querySelector('.sun').style.display = 'block';
        getBtnArea.style.backgroundColor = '#778beb';
        document.querySelector('html').classList.add('dark');
    }else {
        getLabel.querySelector('.sun').style.display = 'none';
        getLabel.querySelector('.moon').style.display = 'block';
        getBtnArea.style.backgroundColor = '#060A0C';
        document.querySelector('html').classList.remove('dark');
    }
});