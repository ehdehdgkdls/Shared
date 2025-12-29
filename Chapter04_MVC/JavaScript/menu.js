// .header 하위 a 태그들에 이벤트 부여
// 		1. 기존 이벤트 방지
// 		2. 해당 속성에서 값 꺼내서 분기 태우기

document.querySelectorAll(".header a").forEach(a => a.addEventListener("click", (e) => {
    e.preventDefault();
    const href = a.getAttribute("href");
    if (href == "mainPage") {
        location.href = "/";
    }
    else if (href == "boardList") {
        location.href = "board/list";
    }
    else console.log("wrong request");

})
);

// 전역 저장 공간( 페이징을 위해 추가 )
function setStorageData(pageNum, amount) {
    // 페이징 정보를 JSON으로 변환하기 위해 객체로 저장
    let pageData = {
        pageNum: pageNum,
        amount: amount
    };
    // JSON.stringify()를 사용하여 객체를 JSON 문자열로 변환하여 localStorage에 저장
    localStorage.setItem('page_data', JSON.stringify(pageData));
}
function getStorageData() {
    // JSON.parse()를 사용하여 JSON 문자열을 객체로 변환하여 반환
    return JSON.parse(localStorage.getItem('page_data'));
}
