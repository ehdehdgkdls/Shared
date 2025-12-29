// css 파일 추가
// 1. 파일 경로 설정
const CSS_FILE_PATH = "/resources/css/register.css";
// 2. link 태그 생성 및 속성 추가
let linkEle = document.createElement('link');
linkEle.rel = 'stylesheet';
linkEle.type = 'text/css';
linkEle.href = CSS_FILE_PATH;
// 3. head 태그에 link 엘리먼트 추가
document.head.appendChild(linkEle);

let f = document.forms[0];
// 버튼 이벤트 추가
document.querySelectorAll('.panel-body-btns button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        let me = e.currentTarget;
        if (me.id == 'registerBtn') {
            register();
        }
        else if (me.id == 'resetBtn') {
            f.reset();
        }
        else if (me.id == 'indexBtn') {
            const { pageNum, amount } = getStorageData(); // 구조분해할당을 통해 pageNum과 amount를 가져옴
            location.href = `/board/list?pageNum=${pageNum}&amount=${amount}`;
        }
    })
});

function register() {
    // 검증
    let { title, writer, content } = f;
    if (!title.value || !writer.value || !content.value) {
        alert("모든 값을 입력해주세요");
        return;
    }

    // 폼 내용을 post로 전송
    f.action = '/board/register';
    f.submit();
}
