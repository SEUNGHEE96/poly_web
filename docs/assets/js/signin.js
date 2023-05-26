window.onload = function () {
    const REGID = /^[a-zA-Z가-힣0-9]+$/;
    const idInput = document.getElementById('fullname');
    const idError = document.getElementById('idError');
    const idCorrect = document.getElementById('idCorrect');
    const idCheckBtn = document.getElementById('idCheckBtn');

    function idCheck() {
        if (!REGID.test(idInput.value)) {
            idError.style.display = 'unset';
            idCorrect.style.display = 'none';
        } else {
            idError.style.display = 'none';
            idCorrect.style.display = 'unset';
        }
    }

    idCheckBtn.addEventListener("click", idCheck);
};
