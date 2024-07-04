const buttons = document.querySelectorAll('.warning-button');

buttons.forEach((button) => {
    const id = button.id?.split('warning')[1];
    const modal = document.getElementById('modal' + id);
    const closeBtn = document.getElementById('close' + id);

    button.onclick = function () {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    closeBtn.onclick = function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
});
