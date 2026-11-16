## 블로그를 만들어 보자....

1. blog.html
```
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>나의 블로그</title>
    <link rel="stylesheet" href="css/blog.css" />
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
  </head>
  <body>
    <header>
      <h1>나의 블로그</h1>
      `
      <p>나의 이야기, 나의 생각들</p>
    </header>

    <main>
      <section class="post">
        <h2>블로그 첫 번째 글</h2>
        <p class="date">2025-08-20</p>
        <p class="content">
          여기는 내가 처음 쓴 블로그 글이에요. 간단한 HTML, CSS, JavaScript를
          사용해서 만든 블로그입니다!
        </p>

        <h3>댓글</h3>
        <ul id="comment-list">
          <!-- 댓글이 여기에 추가됩니다. -->
        </ul>

        <div class="comment-form">
          <input
            type="text"
            id="comment-input"
            placeholder="댓글을 남겨주세요..."
          />
          <button id="btnInsert">댓글 추가</button>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 나의 블로그</p>
    </footer>

    <script>
      $(document).ready(function () {
        $("#btnInsert").click(function () {
          // 1. #comment-input의 값을 가져오기..
          // 2. node
          // 3. #comment-list에 추가 하기
        });
      });
    </script>
  </body>
</html>
```

2. css폴더를 만들고 blog.css
```
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Pen+Script&display=swap");
/* 기본 스타일 */
body {
  font-family: "Nanum Gothic", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
}

header {
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
}

main {
  padding: 2rem;
}

.post {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
}

h2 {
  margin-top: 0;
}

.date {
  font-size: 0.9rem;
  color: #888;
}

.content {
  font-size: 1rem;
  line-height: 1.6;
}

.comment-form {
  margin-top: 1.5rem;
}

.comment-form input {
  padding: 0.5rem;
  width: 70%;
  margin-right: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.comment-form button {
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.comment-form button:hover {
  background-color: #555;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  background-color: #f9f9f9;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
}

footer {
  background-color: #eee;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
}
```
