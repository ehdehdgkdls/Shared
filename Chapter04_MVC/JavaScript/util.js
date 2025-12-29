// css 파일 추가
export function addCss(cssPath) {
    // link 태그 생성 및 속성 추가
    let linkEle = document.createElement('link');
    linkEle.rel = 'stylesheet';
    linkEle.type = 'text/css';
    linkEle.href = cssPath;
    // head 태그에 방금 만든 link 요소 추가
    document.head.appendChild(linkEle);
}

export function addEvent_a(callback) {
    document.querySelectorAll("a")
        .forEach(a => a.addEventListener("click", callback));
}
export function addEvent_btn(callback) {
    document.querySelectorAll("button")
        .forEach(b => b.addEventListener("click", callback));
}