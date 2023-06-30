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
    var themes = ["탈 것", "음식", "운동", "전자제품", "과일"];
    
    var theme = document.getElementById("theme");
    var random_themes = Math.floor(Math.random() * themes.length); // 랜덤 정수 추출
    
    theme.style.display ='block'; //제시어주제 칸 보이기
    theme.innerHTML = "제시어 주제 : " + themes[random_themes];

    if(random_themes === 0 ){
             var bicycles = ["자전거", "택시", "버스", "비행기", "경찰차",
                             "열기구", "킥보드", "배", "소방차", "구급차" ];
             var example = document.getElementById("example");
             var random_bicycles = Math.floor(Math.random() * bicycles.length); // 랜덤 정수 추출

             example.innerHTML = bicycles[random_bicycles];
             example.style.display ='block'; //제시어 칸 보이기

             
    }
    else if (random_themes === 1) {
        var foods = ["김치볶음밥", "피자", "치킨", "보쌈", "새우튀김",
                     "케이크", "잡채", "사탕", "돈가스", "떡볶이" ];
             var example = document.getElementById("example");
             var random_foods = Math.floor(Math.random() * foods.length); // 랜덤 정수 추출

             example.innerHTML = foods[random_foods];
             example.style.display ='block'; //제시어 칸 보이기
    }
                    
    else if ( random_themes === 2) {
            var exercises = ["야구", "축구", "배구", "탁구", "수영",
                             "피구", "배드민턴", "줄넘기", "컬링", "피겨스케이팅" ];
            var example = document.getElementById("example");
            var random_exercises = Math.floor(Math.random() * exercises.length); // 랜덤 정수 추출

            example.innerHTML = exercises[random_exercises];
            example.style.display ='block'; //제시어 칸 보이기
    }
    
    else if ( random_themes === 3 ){
        var electronics = ["스마트폰", "노트북", "무선 이어폰", "전자레인지", "태블릿PC",
                           "냉장고", "프린터기", "TV", "건조기", "로봇청소기"];
            var example = document.getElementById("example");
            var random_electronics = Math.floor(Math.random() * electronics.length); // 랜덤 정수 추출
    
            example.innerHTML = electronics[random_electronics];
            example.style.display ='block'; //제시어 칸 보이기
    }
    
    else if ( random_themes === 4) {
            var fruits = ["딸기", "자몽", "두리안", "귤", "리치", "잭프루트" ];
            //var example = document.getElementById("example");
            var random_fruits = Math.floor(Math.random() * fruits.length); // 랜덤 정수 추출
        
            if( fruits[random_fruits] === "딸기") {
                var strawberry = ["딸기", "딸기", "딸기", "라이어"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + strawberry[i] + "입니다.");
                  }
            }

            else if ( fruits[random_fruits] === "자몽") {
                var grapefruit = ["자몽", "라이어", "자몽", "자몽"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + grapefruit[i] + "입니다.");
                  }
            }

            else if( fruits[random_fruits] === "두리안") {
                var durian = ["라이어", "두리안", "두리안", "두리안"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + durian[i] + "입니다.");
                  }
                }

            else if( fruits[random_fruits] === "귤") {
                var guul = ["귤", "라이어", "귤", "귤"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + guul[i] + "입니다.");
                  }
                }
                
            else if( fruits[random_fruits] === "리치") {
                 var rich = ["라이어", "리치", "리치", "리치"]
    
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + rich[i] + "입니다.");
                  }
                }
            }
            
            else if( fruits[random_fruits] === "잭푸르트") {
                var jack = ["잭푸르트", "잭푸르트", "라이어", "잭푸르트"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jack[i] + "입니다.");
                  }
                }
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

