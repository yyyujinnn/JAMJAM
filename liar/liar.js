//인원수 4명일때 일반3 라이어1
function ver4(){
    document.getElementById("count").innerHTML = "라이어는 1명 입니다.";
  
   // btn 숨기기 (display: none)
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';

    //제시어 주제 목록
    var themes = ["탈 것", "음식", "운동", "전자제품", "과일", 
                  "과자", "음식", "직업", "장소", "물건"];
    
    var theme = document.getElementById("theme");
    var random_themes = Math.floor(Math.random() * themes.length); // 랜덤 정수 추출
        
    theme.innerHTML = "제시어 주제 : " + themes[random_themes];
    theme.style.display ='block'; //제시어주제 칸 보이기
}

//인원수 5명일때 일반4 라이어1
function ver5(){
    document.getElementById("count").innerHTML = "라이어는 1명 입니다.";

    // btn 숨기기 (display: none)
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
}

//인원수 6명일때 일반4 라이어2
function ver6(){
    document.getElementById("count").innerHTML = "라이어는 2명 입니다.";

    // btn 숨기기 (display: none)
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
}

//인원수 7명일때 일반5 라이어2
function ver7(){
    document.getElementById("count").innerHTML = "라이어는 2명 입니다.";

    // btn 숨기기 (display: none)
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
}

//인원수 8명일때 일반6 라이어2
function ver8(){
    document.getElementById("count").innerHTML = "라이어는 2명 입니다.";

    // btn 숨기기 (display: none)
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
}

//인원수 9명일때 일반6 라이어3
function ver9(){
    document.getElementById("count").innerHTML = "라이어는 3명 입니다.";

    // btn 숨기기 (display: none)
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
}

//인원수 10명일때 일반7 라이어3
function ver10(){
    document.getElementById("count").innerHTML = "라이어는 3명 입니다.";

    // btn 숨기기 (display: none)
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
}

