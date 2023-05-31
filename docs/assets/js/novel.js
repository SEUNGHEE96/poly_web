function getParams() {
    var url = window.location.search.replace('?', '');
    var params = {};
    var urlArray = url.split('&');

    for (var i in urlArray) {
        var param = urlArray[i].split('=');
        params[param[0]] = param[1];
    }
    return params;
}

const params = getParams();
let idx = params['novelid'];

let xhr = new XMLHttpRequest();
xhr.open("GET", "assets/json/romance.json");
xhr.send();

xhr.onreadystatechange = function (event) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        romances = JSON.parse(xhr.responseText);
        renderHTML();
    }
};

let liked = 100;

function renderHTML() {
    let htmlString = "";
    let content = romances[idx - 1];
    htmlString += `
        <div id="title">
            <img src="assets/images/novel/${content.id}.jpg" id="novelimg">
        </div>
        <!-- 웹소설 설명란 -->
        <div id="detail">
            <h1>${content.title}</h1>
            <b>연재중 | 작가 ${content.author}
            <br/>
            날짜 | <div id="likenum">조회수 ${liked}</div> | 좋아요 <button type="button" name="like" onclick="like()"><img id="liked_img" src="assets/images/liked.png"></button></b>
            
            <hr/>
            <div class="description">
                ${content.description}
            </div>
            <br/>
            
            <div>
                <h4 class="BookDetailNotice_List_Header BookDetailNotice_List_Header-notices" id="h">&lt;공지&gt;</h4>
            </div>
            <br/>

            <div>
                본 작품은 12세 미만의 청소년이 열람하기에 부적절한 내용을 포함하고 있습니다. 보호자의 지도 하에 작품을 감상해주시기 바랍니다.</div>
            <hr />

            <b>1화 소장: 쿠키 2개 대여 : 쿠키 1개 <img id="cookie" src="assets/images/cookie.png"></b>
        </div>
        `;
    document.getElementById("json").innerHTML = htmlString;
};

function like() {
    liked++;
    let likeString = "";
    likeString = `<span id="likenum">조회수 ${liked}</span>`
    document.getElementById("likenum").innerHTML = likeString;
};