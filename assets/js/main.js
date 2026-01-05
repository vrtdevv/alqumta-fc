// يدعم جميع القوائم على كل الصفحات
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if(menuToggle && navList){
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});
