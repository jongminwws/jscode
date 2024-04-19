function checkDuplicate() {
    let id = document.getElementById('id').value;
    const idRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/;
    let idError = document.getElementById('idError');
    if (!idRegex.test(id)) {
        idError.textContent = "아이디는 영문자와 숫자 조합, 5~20자리여야 합니다.";
        return;
    } else {
        idError.textContent = "";
    }
    const existingIds = ["abcdef123", "test1234", "user12345"]; // 내가 정한 아이디 목록
    if (existingIds.includes(id)) {
        alert("이미 사용 중인 아이디입니다.");
    } else {
        alert("사용 가능한 아이디입니다.");
    }
}
function searchAddress() {
    alert("준비중 입니다.");
}
function checkPassword() {
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('repassword').value;
    let passwordError = document.getElementById('passwordError');
    let repasswordError = document.getElementById('repasswordError');
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,25}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent = "비밀번호는 영문자, 숫자, 특수기호 조합, 8~25자리여야 합니다.";
    } else {
        passwordError.textContent = "";
    }

    if (password !== repassword) {
        repasswordError.textContent = "비밀번호가 일치하지 않습니다.";
    } else {
        repasswordError.textContent = "";
    }
}
function checkForm() {
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('repassword').value;
    let name = document.getElementById('name').value;
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let phoneNumber = document.getElementById('phoneNumber').value;
    let email = document.getElementById('email').value;
    let email2 = document.getElementById('email2').value;
    let address1 = document.getElementById('address1').value;
    let address2 = document.getElementById('address2').value;
    let address3 = document.getElementById('address3').value;
    let agreement = document.querySelector('input[name="agreement"]:checked');

    if (id === '' || password === '' || repassword === '' || name === '' || year === '' || month === '' || day === '' || gender === null || phoneNumber === '' || email === '' || email2 === '' || address1 === '' || address2 === '' || address3 === '' || agreement === null) {
        alert("아직 빈 칸이 있습니다.");
        return false;
    } else {
        alert("축하합니다! 가입되었습니다.");
        return true;
    }
}
function updateEmail() {
    let emailtp = document.getElementById("emailtp");
    let email2 = document.getElementById("email2");

    let em = emailtp.value;

    if (em !== "직접 입력") {
        email2.value = em;
        email2.setAttribute("disabled", "disabled");
    } else {
        email2.value = "";
        email2.removeAttribute("disabled");
    }
}