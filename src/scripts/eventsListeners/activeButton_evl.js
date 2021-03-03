const activeButtonListener = () => {
    let buttons = document.querySelectorAll('.settings__button');
    let activeClass = 'button_active';

    buttons.forEach((item) => {
        item.addEventListener('click', (e) => {
            addActiveClass(e.target);
        });
    });


    function addActiveClass(button) {
        removeActiveClass(button.parentNode);

        button.setAttribute('disabled', 'disabled');
        button.classList.add(activeClass);
    }

    function removeActiveClass(block) {
        block.childNodes.forEach((item) => {
            if (item.nodeType == 1) {
                item.classList.remove(activeClass);
                item.removeAttribute('disabled');
            }
        });
    }

}

export default activeButtonListener;