document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver( entrys =>{
        if (entrys[0].isIntersecting) {
            console.log('Ya esta visible el elemento');
        }
    });

    observer.observe(document.querySelector('.premium'));
});