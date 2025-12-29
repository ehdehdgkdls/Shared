// css 파일 추가
// 1. 파일 경로 설정
const CSS_FILE_PATH = "/resources/css/boardList.css";
// 2. link 태그 생성 및 속성 추가
let linkEle = document.createElement('link');
linkEle.rel = 'stylesheet';
linkEle.type = 'text/css';
linkEle.href = CSS_FILE_PATH;
// 3. head 태그에 link 엘리먼트 추가
document.head.appendChild(linkEle);

// 버튼 이벤트 추가
document.querySelector('#registerBtn').addEventListener('click', () => {
    console.log("registerBtn clicked");
    location.href = '/board/register';
});

// 게시글 상세보기
document.querySelectorAll("td a").forEach(a => a.addEventListener("click", (e) => {
    e.preventDefault();

    const bno = a.getAttribute("href");

    location.href = `/board/get?bno=${bno}`;
}));