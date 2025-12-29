import { addCss } from "/resources/js/util.js"; // ES Module 방식으로 다른 js 파일의 함수 가져오기?
//import "/resources/js/util.js"; //특정 파일의 실행을 위해서 가져오는 방법(안의 함수를 사용하지 못함)
import { addEvent_btn } from "/resources/js/util.js";
addCss("/resources/css/get.css"); //import한 util.js의 함수 addCss를 사용하여 css를 추가

let f = document.forms[0];
// 버튼 이벤트 추가
addEvent_btn((e) => {
    let me = e.currentTarget;
    if (me.id == 'modifyBtn') {
        modify();
    }
    else if (me.id == 'indexBtn') {
        location.href = '/board/list';
    }
});

function modify() {
    let bno = f.bno.value;
    location.href = '/board/modify?bno=' + bno;
}