## JQuery 사용
```
<script>
      $(document).ready(function () {
        $("#signupForm").on("submit", function (event) {
          // 기본 제출 동작 막기
          event.preventDefault();

          // 입력값 가져오기
          const name = $("#name").val().trim();
          const email = $("#email").val().trim();
          const phone = $("#phone").val().trim();
          const password = $("#password").val();
          const confirmPassword = $("#confirm_password").val();

          // 기존 에러 메시지 한 번에 초기화
          $(".error").text("");

          let isValid = true;

          // [이름 검사]
          const nameRegex = /^[가-힣a-zA-Z]{2,}$/;
          if (name === "") {
            $("#nameError").text("이름을 입력해주세요.");
            isValid = false;
          } else if (!nameRegex.test(name)) {
            $("#nameError").text(
              "이름은 한글 또는 영문 2자 이상이어야 합니다.",
            );
            isValid = false;
          }

          // [이메일 검사]
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (email === "") {
            $("#emailError").text("이메일을 입력해주세요.");
            isValid = false;
          } else if (!emailRegex.test(email)) {
            $("#emailError").text("올바른 이메일 형식이 아닙니다.");
            isValid = false;
          }

          // [전화번호 검사]
          const phoneRegex = /^01-?\d{3,4}-?\d{4}$/;
          if (phone === "") {
            $("#phoneError").text("전화번호를 입력해주세요.");
            isValid = false;
          } else if (!phoneRegex.test(phone)) {
            $("#phoneError").text(
              "올바른 휴대폰 번호를 입력해주세요. (예: 010-1234-5678)",
            );
            isValid = false;
          }

          // [비밀번호 검사]
          const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
          if (password === "") {
            $("#passwordError").text("비밀번호를 입력해주세요.");
            isValid = false;
          } else if (!passwordRegex.test(password)) {
            $("#passwordError").text(
              "비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.",
            );
            isValid = false;
          }

          // [비밀번호 확인 검사]
          if (confirmPassword === "") {
            $("#confirmError").text("비밀번호 확인을 입력해주세요.");
            isValid = false;
          } else if (password !== confirmPassword) {
            $("#confirmError").text("비밀번호가 일치하지 않습니다.");
            isValid = false;
          }

          // 모든 유효성 검사 통과 시
          if (isValid) {
            alert("회원가입이 완료되었습니다!");
            // 실제 서버로 폼 전송 시 아래 주석 해제 (DOM 요소로 접근하여 제출해야 무한 루프 방지)
            // this.submit();
          }
        });
      });
    </script>
```
