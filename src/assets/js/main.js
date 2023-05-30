// 로맨스 페이징

let romance_count = 1; //로맨스
let romances; // romances 변수를 전역 범위로 이동

let xhr = new XMLHttpRequest();
xhr.open("GET", "assets/json/romance.json");
xhr.send();

xhr.onreadystatechange = function (event) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        romances = JSON.parse(xhr.responseText);
        renderHTML();
    }
};

function renderHTML() {
    let htmlString = "";
    for (let i = romance_count * 4 - 4; i < romance_count * 4; i++) {
        if (i >= romances.length) {
            break; // 더 이상 표시할 데이터가 없으면 종료
        }
        let content = romances[i];
        htmlString += `
            <div class="item">
                <img src="assets/images/novel/${content.id}.jpg" alt="X">
                    <div class="description">
                        <div class="novel_name">
                            <a href="/">${content.title}</a>
                        </div>
                    </div>
            </div>
            `;
    }
    document.getElementById("romanceNovel").innerHTML = htmlString;
};

function romanceR_click() {
    romance_count += 1;
    if (romance_count === 6) {
        romance_count = 1;
    }
    document.getElementById("romance_page").innerHTML = romance_count + "페이지";
    renderHTML();
};

function romanceL_click() {
    romance_count -= 1;
    if (romance_count === 0) {
        romance_count = 5;
    }
    document.getElementById("romance_page").innerHTML = romance_count + "페이지";
    renderHTML();
};

// 판타지 페이징

let fantasy_count = 1; //판타지
let fantasies; // fantasies 변수를 전역 범위로 이동

let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "assets/json/fantasy.json");
xhr2.send();

xhr2.onreadystatechange = function (event) {
    if (xhr2.readyState == 4 && xhr2.status == 200) {
        fantasies = JSON.parse(xhr2.responseText);
        renderHTML2();
    }
};

function renderHTML2() {
    let htmlString = "";
    for (let i = fantasy_count * 4 - 4; i < fantasy_count * 4; i++) {
        if (i >= fantasies.length) {
            break; // 더 이상 표시할 데이터가 없으면 종료
        }
        let content = fantasies[i];
        htmlString += `
            <div class="item">
                <img src="assets/images/novel/${content.id}.jpg" alt="X">
                    <div class="description">
                        <div class="novel_name">
                            <a href="/">${content.title}</a>
                        </div>
                    </div>
            </div>
            `;
    }
    document.getElementById("fantasyNovel").innerHTML = htmlString;
};

function fantasyR_click() {
    fantasy_count += 1;
    if (fantasy_count === 8) {
        fantasy_count = 1;
    }
    document.getElementById("fantasy_page").innerHTML = fantasy_count + "페이지";
    renderHTML2();
};

function fantasyL_click() {
    fantasy_count -= 1;
    if (fantasy_count === 0) {
        fantasy_count = 7;
    }
    document.getElementById("fantasy_page").innerHTML = fantasy_count + "페이지";
    renderHTML2();
};

// BL 페이징
let BL_count = 1; //판타지
let BLs; // fantasies 변수를 전역 범위로 이동

let xhr3 = new XMLHttpRequest();
xhr3.open("GET", "assets/json/bl.json");
xhr3.send();

xhr3.onreadystatechange = function (event) {
    if (xhr3.readyState == 4 && xhr3.status == 200) {
        BLs = JSON.parse(xhr3.responseText);
        renderHTML3();
    }
};

function renderHTML3() {
    let htmlString = "";
    for (let i = BL_count * 4 - 4; i < BL_count * 4; i++) {
        if (i >= BLs.length) {
            break; // 더 이상 표시할 데이터가 없으면 종료
        }
        let content = BLs[i];
        htmlString += `
            <div class="item">
                <img src="assets/images/novel/${content.id}.jpg" alt="X">
                    <div class="description">
                        <div class="novel_name">
                            <a href="/">${content.title}</a>
                        </div>
                    </div>
            </div>
            `;
    }
    document.getElementById("BLNovel").innerHTML = htmlString;
};

function blR_click() {
    BL_count += 1;
    if (BL_count === 3) {
        BL_count = 1;
    }
    document.getElementById("BL_page").innerHTML = BL_count + "페이지";
    renderHTML3();
};

function blL_click() {
    BL_count -= 1;
    if (BL_count === 0) {
        BL_count = 2;
    }
    document.getElementById("BL_page").innerHTML = BL_count + "페이지";
    renderHTML3();
};

// 슬라이드 쇼 부분

//전체 슬라이드 컨테이너
const slides = document.querySelector('.slides');
//모든 슬라이드들
const slideImg = document.querySelectorAll('.slides li');
//현재 슬라이드 index
let currentIdx = 0;
// 슬라이드 개수
const slideCount = slideImg.length;
//이전 버튼
const prev = document.querySelector('.prev');
//다음 버튼
const next = document.querySelector('.next');
//한개의 슬라이드 넓이
const slideWidth = 1500;
//슬라이드간의 margin 값
const slideMargin = 100;

//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
    currentIdx = num;
    slides.style.left = -num * 1000 + 'px';
}

prev.addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는
    이전 버튼 눌러도 아무런 반응 없게 하기 위해
    currentIdx !==0일때만 moveSlide 함수 불러옴 */
    if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
    /* 마지막 슬라이드로 표시 됐을때는
    다음 버튼 눌러도 아무런 반응 없게 하기 위해
    currentIdx !==slideCount - 1 일때만
    moveSlide 함수 불러옴 */
    if (currentIdx !== slideCount - 1) {
        moveSlide(currentIdx + 1);
    }
});