// css 파일 추가
// 1. 파일 경로 설정
const CSS_FILE_PATH = [
    "/resources/css/boardList.css",
    "/resources/css/page.css"
];
// 2. link 태그 생성 및 속성 추가
cssBinding(CSS_FILE_PATH);
function cssBinding(cssFilePath) {
    cssFilePath.forEach(path => {
        let linkEle = document.createElement('link');
        linkEle.rel = 'stylesheet';
        linkEle.type = 'text/css';
        linkEle.href = path;
        document.head.appendChild(linkEle);
    })
};

// 버튼 이벤트 추가
document.querySelector('#registerBtn').addEventListener('click', () => {
    console.log("registerBtn clicked");
    location.href = '/board/register';
});

// 페이징 시스템 버튼 시스템 추가
document.querySelectorAll(".page-nation a").forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        let pageNum = e.currentTarget.getAttribute("href");
        // 이동한 페이지의 pageNum을 저장
        setStorageData(pageNum, 10);
        location.href = `/board/list?pageNum=${pageNum}&amount=10`;
    })
})

// 페이지 이동 등에서 사용하기 위한 cri 객체를 저장하는 방법
let pageNum = new URLSearchParams(location.search).get('pageNum');
let amount = new URLSearchParams(location.search).get('amount');
if (!pageNum || !amount) {
    pageNum = 1;
    amount = 10;
}
setStorageData(pageNum, amount);

// 게시글 상세보기
document.querySelectorAll("td a").forEach(a => a.addEventListener("click", (e) => {
    e.preventDefault();

    const bno = a.getAttribute("href");

    location.href = `/board/get?bno=${bno}`;
}));