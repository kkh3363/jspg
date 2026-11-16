## Native javascript 처리 

```
<script>
      document
        .getElementById("signupForm")
        .addEventListener("submit", function (event) {
          // 1. 기본 폼 제출 동작 막기 (유효성 검사 통과 후에만 제출)
          event.preventDefault();

          // 2. 입력값 가져오기 (앞뒤 공백 제거)
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const phone = document.getElementById("phone").value.trim();
          const password = document.getElementById("password").value;
          const confirmPassword =
            document.getElementById("confirm_password").value;

          // 3. 에러 메시지 표시 영역 가져오기
          const nameError = document.getElementById("nameError");
          const emailError = document.getElementById("emailError");
          const phoneError = document.getElementById("phoneError");
          const passwordError = document.getElementById("passwordError");
          const confirmError = document.getElementById("confirmError");

          // 4. 이전 에러 메시지 초기화
          nameError.textContent = "";
          emailError.textContent = "";
          phoneError.textContent = "";
          passwordError.textContent = "";
          confirmError.textContent = "";

          let isValid = true; // 전체 유효성 통과 여부

          // [이름 검사] 빈 값 여부 및 한글/영문 2자 이상
          const nameRegex = /^[가-힣a-zA-Z]{2,}$/;
          if (name === "") {
            nameError.textContent = "이름을 입력해주세요.";
            isValid = false;
          } else if (!nameRegex.test(name)) {
            nameError.textContent =
              "이름은 한글 또는 영문 2자 이상이어야 합니다.";
            isValid = false;
          }

          // [이메일 검사] 이메일 형식 확인
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (email === "") {
            emailError.textContent = "이메일을 입력해주세요.";
            isValid = false;
          } else if (!emailRegex.test(email)) {
            emailError.textContent = "올바른 이메일 형식이 아닙니다.";
            isValid = false;
          }

          // [전화번호 검사] 010-0000-0000 또는 01000000000 형식
          const phoneRegex = /^01[016789]-?\d{3,4}-?\d{4}$/;
          if (phone === "") {
            phoneError.textContent = "전화번호를 입력해주세요.";
            isValid = false;
          } else if (!phoneRegex.test(phone)) {
            phoneError.textContent =
              "올바른 휴대폰 번호를 입력해주세요. (예: 010-1234-5678)";
            isValid = false;
          }

          // [비밀번호 검사] 영문, 숫자, 특수문자 포함 8자 이상
          const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
          if (password === "") {
            passwordError.textContent = "비밀번호를 입력해주세요.";
            isValid = false;
          } else if (!passwordRegex.test(password)) {
            passwordError.textContent =
              "비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.";
            isValid = false;
          }

          // [비밀번호 확인 검사] 비밀번호 일치 여부
          if (confirmPassword === "") {
            confirmError.textContent = "비밀번호 확인을 입력해주세요.";
            isValid = false;
          } else if (password !== confirmPassword) {
            confirmError.textContent = "비밀번호가 일치하지 않습니다.";
            isValid = false;
          }

          // 5. 모든 검사를 통과했을 때 처리
          if (isValid) {
            alert("회원가입이 완료되었습니다!");
            // 실제 서버(action="signup")로 폼 데이터를 전송하려면 아래 주석을 해제하세요.
            // this.submit();
          }
        });
    </script>
```
