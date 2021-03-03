import languageSetter from '../modules/languageSetter.js';

const languageSwitcherListener = () => {
    let ruSwitcherButton = document.querySelector('[data-value="ruSwitcher"]');
    let enSwitcherButton = document.querySelector('[data-value="enSwitcher"]');


    ruSwitcherButton.addEventListener('click', () => {
        languageSetter('ru');
    });

    enSwitcherButton.addEventListener('click', () => {
        languageSetter('en');
    });
}

export default languageSwitcherListener;