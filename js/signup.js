const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
];

document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const pw = document.getElementById("pw");
  const pwError = document.getElementById("pw-error");
  const pwCheck = document.getElementById("pw-check");
  const pwCheckError = document.getElementById("pw-check-error");
  const pwView = document.getElementById("pw-view");
  const pwCheckView = document.getElementById("pw-check-view");
  const modal = document.querySelector(".modal");
  const modalMessage = document.querySelector(".modal-message");
  const modalBtn = document.querySelector(".modal-btn");
  const emailValidate = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  const pwValidate = /^(?=.*[a-zA-Z])(?=.*[0-8])(?=.*[!@#$%^*+=-]).{6,16}$/;

  const debounce = (func, delay) => {
    let timer;
    return function () {
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const modalOpen = (msg) => {
    modalMessage.textContent = msg;
    modal.style.display = "block";
  };

  const modalClose = () => {
    modalMessage.textContent = "";
    modal.style.display = "none";
  };

  const validate = (target, validate, message, error) => {
    target.addEventListener(
      "keyup",
      debounce(() => {
        let check = false;
        check = validate.test(target.value);

        if (!check) {
          target.classList.add("input-error");
          error.textContent = message;
        } else {
          target.style.border = "";
          error.textContent = "";
        }
      }, 500)
    );
  };

  const passwordCheck = (pw1, pw2, message) => {
    pw2.addEventListener(
      "keyup",
      debounce(() => {
        if (pw1.value !== pw2.value) {
          pw2.classList.add("input-error");
          pwCheckError.textContent = message;
        } else {
          pw2.classList.remove("input-error");
          pwCheckError.textContent = "";
        }
      }, 500)
    );
  };

  const complete = () => {
    if (!emailValidate.test(email.value)) {
      return;
    } else {
      USER_DATA.findIndex((user) => {
        if (user.email === email.value) {
          modalOpen("사용 중인 이메일입니다.");
          email.classList.add("input-error");
          emailError.textContent = "사용 중인 이메일입니다.";
          return;
        }
      });
    }
    if (pwValidate.test(pw.value)) {
      return;
    }
    if (pw.value !== pwCheck.value) {
      return;
    }
    location.href = PATH.LOGIN;
  };

  pwView.addEventListener("click", () => {
    if (pw.type === "password") {
      pw.type = "text";
      pwView.src = "../assets/btn_visibility_on_24px.png";
    } else {
      pw.type = "password";
      pwView.src = "../assets/btn_visibility_off_24px.png";
    }
  });

  pwCheckView.addEventListener("click", () => {
    if (pwCheck.type === "password") {
      pwCheck.type = "text";
      pwCheckView.src = "../assets/btn_visibility_on_24px.png";
    } else {
      pwCheck.type = "password";
      pwCheckView.src = "../assets/btn_visibility_off_24px.png";
    }
  });

  signUp.addEventListener("click", () => {
    complete();
  });

  modalBtn.addEventListener("click", () => {
    modalClose();
  });

  validate(email, emailValidate, "잘못된 이메일 형식입니다.", emailError);
  validate(pw, pwValidate, "비밀번호를 8자이상 입력해주세요.", pwError);
  passwordCheck(pw, pwCheck, "비밀번호가 일치하지 않습니다.");
});