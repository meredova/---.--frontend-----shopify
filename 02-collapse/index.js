document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const btn = body.querySelector(".collapsible__button");
    const buttonHide = btn.querySelector(".collapsible__action--visible");
    const buttonShow = btn.querySelector(".collapsible__action--hidden");    
    const content = body.querySelector('.collapsible__content');

    buttonHide.style.display = 'none';
    buttonShow.style.display = 'block';
    content.style.display = 'none';

    let keyframes = [
        {
            opacity: '0.7',
            transform: 'rotate(0deg) scale(1)',
            backgroundColor: '#ffcbcb'
        },
        {
            opacity: '1.0',
            transform: 'rotate(360deg) scale(1.2)',
            backgroundColor: '#fff'
        }
    ];
    let options = {
        duration: 600,
        direction: 'alternate',
        easing: 'ease-in-out'
    };

    btn.addEventListener('click', () => {
        content.style.display = getComputedStyle(content).display == 'block' ? 'none' : 'block';
        if (getComputedStyle(content).display == 'block') {
            buttonShow.style.display = 'none';
            buttonHide.style.display = 'block';
        } else {
            buttonHide.style.display = 'none';
            buttonShow.style.display = 'block';
        }

        btn.animate(keyframes, options);
            btn.onclick = () => {};
        content.animate(keyframes, options);
            btn.onclick = () => {};
    });

});




