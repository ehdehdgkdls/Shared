// css 파일 추가 > 계속 반복되니까 유틸 js를 만들어서 함수로 사용
// 1. 파일 경로 설정
const CSS_FILE_PATH = "/resources/css/modify.css";
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
        if (me.id == 'modifyBtn') {
            modify();
        }
        else if (me.id == 'indexBtn') {
            location.href = '/board/list';
        }
        else if (me.id == 'removeBtn') {
            remove();
        }
    })
});
function modify() {
    if (!f.title.value || !f.content.value) {
        alert("모든 값을 입력해주세요");
        return;
    }
    f.action = '/board/modify';
    f.submit();
}
function remove() {
    if (!confirm("삭제하시겠습니까?")) {
        return;
    }
    f.action = '/board/remove';
    f.submit();
}