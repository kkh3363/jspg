// 댓글 추가 기능
function addComment() {
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");
  const commentText = commentInput.value.trim();

  if (commentText !== "") {
    // 새로운 댓글 생성
    const newComment = document.createElement("li");
    newComment.textContent = commentText;
    
    // 댓글을 목록에 추가
    commentList.appendChild(newComment);

    // 입력창 초기화
    commentInput.value = "";
  } else {
    alert("댓글을 입력해주세요.");
  }
}
