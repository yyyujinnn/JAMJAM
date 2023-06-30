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
             var bicycles = ["자전거", "택시", "비행기", "경찰차",
                             "열기구", "킥보드", "구급차" ];
             var random_bicycles = Math.floor(Math.random() * bicycles.length); // 랜덤 정수 추출

             if(bicycles[random_bicycles] === "자전거"){
                var bike = ["자전거", "라이어", "자전거", "자전거"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bike[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "택시"){
                var taxi = ["택시", "라이어", "택시", "택시"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + taxi[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "비행기"){
                var airplane = ["비행기", "비행기", "라이어", "비행기"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + airplane[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "경찰차"){
                var police = ["경찰차", "경찰차", "라이어", "경찰차"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + police[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "열기구"){
                var balloon = ["열기구", "열기구", "라이어", "열기구"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + balloon[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "킥보드"){
                var kick = ["킥보드", "킥보드", "킥보드", "라이어"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + kick[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "구급차"){
                var emergency = ["구급차", "구급차", "구급차", "라이어"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + emergency[i] + "입니다.");
                }
            }
        }

    else if (random_themes === 1) {
        var foods = ["김치볶음밥", "피자", "치킨", "보쌈",
                     "케이크", "잡채", "돈가스", "떡볶이" ];
        var random_foods = Math.floor(Math.random() * foods.length); // 랜덤 정수 추출

             if(foods[random_foods] === "김치볶음밥"){
                var gimbokbab = ["김치볶음밥", "라이어", "김치볶음밥", "김치볶음밥"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + gimbokbab[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "피자"){
                var pizza = ["피자", "피자", "라이어", "피자"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + pizza[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "치킨"){
                var chicken = ["치킨", "치킨", "라이어", "치킨"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + chicken[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "보쌈"){
                var bossam = ["라이어", "보쌈", "보쌈", "보쌈"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bossam[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "케이크") {
                var cake = ["케이크", "라이어", "케이크", "케이크"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + cake[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "잡채"){
                var jabchae = ["잡채", "잡채", "잡채", "라이어"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jabchae[i] + "입니다.");
                }
            }
            
            else if(foods[random_foods] === "돈가스"){
                var dongas = ["라이어", "돈가스", "돈가스", "돈가스"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + dongas[i] + "입니다.");
                }
            }
            else if(foods[random_foods] === "떡볶이"){
                var topoki = ["떡볶이", "떡볶이", "떡볶이", "라이어"]
                
                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + topoki[i] + "입니다.");
                }
            }
        }
                    
    else if ( random_themes === 2) {
            var exercises = ["야구", "축구", "수영","피구", "배드민턴", "줄넘기", "컬링" ];
            var random_exercises = Math.floor(Math.random() * exercises.length); // 랜덤 정수 추출

            if( exercises[random_exercises] === "야구" ){                
                var baseball = ["라이어", "야구","야구","야구"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + baseball[i] + "입니다.");
                }
            }

            else if( exercises[random_exercises] === "축구" ){
                
                var football = ["라이어", "축구","축구","축구"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + football[i] + "입니다.");
                }
            }
            else if( exercises[random_exercises] === "수영" ){
                
                var swim = ["수영", "수영", "라이어","수영"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "피구" ){
                var swim = ["피구", "라이어", "피구","피구"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "배드민턴" ){
                var swim = ["배드민턴", "배드민턴", "라이어","배드민턴"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "줄넘기" ){
                var line = ["라이어", "줄넘기", "줄넘기","줄넘기"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + line[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "컬링" ){
                var curling = ["컬링", "컬링", "라이어","컬링"]

                for (var i = 0; i < 4; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + curling[i] + "입니다.");
                 }
            }

        }
    
    else if ( random_themes === 3 ){
        var electronics = ["스마트폰", "노트북", "전자레인지", "태블릿PC", "TV", "로봇청소기"];
        var random_electronics = Math.floor(Math.random() * electronics.length); // 랜덤 정수 추출

        if( electronics[random_electronics] === "스마트폰" ){                
            var phone = ["스마트폰", "스마트폰","스마트폰","라이어"]

            for (var i = 0; i < 4; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + phone[i] + "입니다.");
            }
        }

        else if( electronics[random_electronics] === "노트북" ){
            
            var notebook = ["라이어", "노트북","노트북","노트북"]

            for (var i = 0; i < 4; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + notebook[i] + "입니다.");
            }
        }
        else if( electronics[random_electronics] === "전자레인지" ){
            
            var junja = ["전자레인지", "전자레인지", "라이어","전자레인지"]

            for (var i = 0; i < 4; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + junja[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "태블릿PC" ){
            var tablet = ["태블릿PC", "라이어", "태블릿PC","태블릿PC"]

            for (var i = 0; i < 4; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tablet[i] + "입니다.");
             }
        }
        else if( electronics[random_eelectronics] === "TV" ){
            var tv = ["TV", "TV", "라이어","TV"]

            for (var i = 0; i < 4; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tv[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "로봇 청소기" ){
            var cleaner = ["라이어", "로봇 청소기", "로봇 청소기","로봇 청소기"]

            for (var i = 0; i < 4; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + cleaner[i] + "입니다.");
             }
        }

    }
    
    else if ( random_themes === 4) {
            var fruits = ["딸기", "자몽", "두리안", "귤", "리치", "잭프루트" ];
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

    //제시어 주제 목록
    var themes = ["탈 것", "음식", "운동", "전자제품", "과일"];
    
    var theme = document.getElementById("theme");
    var random_themes = Math.floor(Math.random() * themes.length); // 랜덤 정수 추출
    
    theme.style.display ='block'; //제시어주제 칸 보이기
    theme.innerHTML = "제시어 주제 : " + themes[random_themes];

    if(random_themes === 0 ){
             var bicycles = ["자전거", "택시", "비행기", "경찰차",
                             "열기구", "킥보드", "구급차" ];
             var random_bicycles = Math.floor(Math.random() * bicycles.length); // 랜덤 정수 추출

             if(bicycles[random_bicycles] === "자전거"){
                var bike = ["자전거", "라이어", "자전거", "자전거", "자전거"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bike[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "택시"){
                var taxi = ["택시", "라이어", "택시", "택시", "택시"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + taxi[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "비행기"){
                var airplane = ["비행기", "비행기", "라이어", "비행기", "비행기"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + airplane[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "경찰차"){
                var police = ["경찰차", "경찰차", "라이어", "경찰차", "경찰차"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + police[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "열기구"){
                var balloon = ["열기구", "열기구", "열기구", "라이어", "열기구"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + balloon[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "킥보드"){
                var kick = ["킥보드", "킥보드", "킥보드", "라이어", "킥보드"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + kick[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "구급차"){
                var emergency = ["구급차", "구급차", "구급차", "구급차", "라이어"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + emergency[i] + "입니다.");
                }
            }
        }

    else if (random_themes === 1) {
        var foods = ["김치볶음밥", "피자", "치킨", "보쌈",
                     "케이크", "잡채", "돈가스", "떡볶이" ];
        var random_foods = Math.floor(Math.random() * foods.length); // 랜덤 정수 추출

             if(foods[random_foods] === "김치볶음밥"){
                var gimbokbab = ["김치볶음밥","김치볶음밥", "라이어", "김치볶음밥", "김치볶음밥"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + gimbokbab[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "피자"){
                var pizza = ["피자", "피자", "피자", "라이어", "피자"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + pizza[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "치킨"){
                var chicken = ["치킨", "치킨","치킨", "라이어", "치킨"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + chicken[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "보쌈"){
                var bossam = ["라이어", "보쌈", "보쌈", "보쌈", "보쌈"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bossam[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "케이크") {
                var cake = ["케이크", "라이어", "케이크", "케이크", "케이크"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + cake[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "잡채"){
                var jabchae = ["잡채", "잡채", "잡채", "라이어", "잡채"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jabchae[i] + "입니다.");
                }
            }
            
            else if(foods[random_foods] === "돈가스"){
                var dongas = ["라이어", "돈가스", "돈가스", "돈가스", "돈가스"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + dongas[i] + "입니다.");
                }
            }
            else if(foods[random_foods] === "떡볶이"){
                var topoki = ["떡볶이", "떡볶이", "떡볶이", "떡볶이", "라이어"]
                
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + topoki[i] + "입니다.");
                }
            }
        }
                    
    else if ( random_themes === 2) {
            var exercises = ["야구", "축구", "수영","피구", "배드민턴", "줄넘기", "컬링" ];
            var random_exercises = Math.floor(Math.random() * exercises.length); // 랜덤 정수 추출

            if( exercises[random_exercises] === "야구" ){                
                var baseball = ["라이어", "야구", "야구", "야구", "야구"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + baseball[i] + "입니다.");
                }
            }

            else if( exercises[random_exercises] === "축구" ){
                
                var football = ["축구", "라이어", "축구", "축구", "축구"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + football[i] + "입니다.");
                }
            }
            else if( exercises[random_exercises] === "수영" ){
                
                var swim = ["수영", "수영", "라이어", "수영", "수영"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "피구" ){
                var swim = ["피구", "라이어", "피구", "피구","피구"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "배드민턴" ){
                var swim = ["배드민턴", "배드민턴", "배드민턴", "라이어","배드민턴"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "줄넘기" ){
                var line = ["라이어", "줄넘기", "줄넘기", "줄넘기","줄넘기"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + line[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "컬링" ){
                var curling = ["컬링", "컬링", "컬링", "라이어","컬링"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + curling[i] + "입니다.");
                 }
            }

        }
    
    else if ( random_themes === 3 ){
        var electronics = ["스마트폰", "노트북", "전자레인지", "태블릿PC", "TV", "로봇청소기"];
        var random_electronics = Math.floor(Math.random() * electronics.length); // 랜덤 정수 추출

        if( electronics[random_electronics] === "스마트폰" ){                
            var phone = ["스마트폰", "스마트폰","스마트폰","라이어", "스마트폰"]

            for (var i = 0; i < 5; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + phone[i] + "입니다.");
            }
        }

        else if( electronics[random_electronics] === "노트북" ){
            
            var notebook = ["라이어", "노트북", "노트북", "노트북","노트북"]

            for (var i = 0; i < 5; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + notebook[i] + "입니다.");
            }
        }
        else if( electronics[random_electronics] === "전자레인지" ){
            
            var junja = ["전자레인지", "전자레인지", "전자레인지", "라이어","전자레인지"]

            for (var i = 0; i < 5; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + junja[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "태블릿PC" ){
            var tablet = ["태블릿PC", "라이어", "태블릿PC", "태블릿PC", "태블릿PC"]

            for (var i = 0; i < 5; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tablet[i] + "입니다.");
             }
        }
        else if( electronics[random_eelectronics] === "TV" ){
            var tv = ["TV", "TV", "라이어","TV","TV"]

            for (var i = 0; i < 5; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tv[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "로봇 청소기" ){
            var cleaner = ["라이어", "로봇 청소기", "로봇 청소기", "로봇 청소기","로봇 청소기"]

            for (var i = 0; i < 5; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + cleaner[i] + "입니다.");
             }
        }

    }
    
    else if ( random_themes === 4) {
            var fruits = ["딸기", "자몽", "두리안", "귤", "리치", "잭프루트" ];
            var random_fruits = Math.floor(Math.random() * fruits.length); // 랜덤 정수 추출
        
            if( fruits[random_fruits] === "딸기") {
                var strawberry = ["딸기", "딸기", "딸기", "딸기", "라이어"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + strawberry[i] + "입니다.");
                  }
            }

            else if ( fruits[random_fruits] === "자몽") {
                var grapefruit = ["자몽", "자몽","라이어", "자몽", "자몽"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + grapefruit[i] + "입니다.");
                  }
            }

            else if( fruits[random_fruits] === "두리안") {
                var durian = ["라이어", "두리안", "두리안", "두리안", "두리안"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + durian[i] + "입니다.");
                  }
                }

            else if( fruits[random_fruits] === "귤") {
                var guul = ["귤", "라이어", "귤", "귤", "귤"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + guul[i] + "입니다.");
                  }
                }
                
            else if( fruits[random_fruits] === "리치") {
                 var rich = ["라이어", "리치", "리치", "리치", "리치"]
    
                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + rich[i] + "입니다.");
                  }
                }
            
            
            else if( fruits[random_fruits] === "잭푸르트") {
                var jack = ["잭푸르트", "잭푸르트", "라이어", "잭푸르트", "잭푸르트"]

                for (var i = 0; i < 5; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jack[i] + "입니다.");
                  }
            }
        }
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

    //제시어 주제 목록
    var themes = ["탈 것", "음식", "운동", "전자제품", "과일"];
    
    var theme = document.getElementById("theme");
    var random_themes = Math.floor(Math.random() * themes.length); // 랜덤 정수 추출
    
    theme.style.display ='block'; //제시어주제 칸 보이기
    theme.innerHTML = "제시어 주제 : " + themes[random_themes];

    if(random_themes === 0 ){
             var bicycles = ["자전거", "택시", "비행기", "경찰차",
                             "열기구", "킥보드", "구급차" ];
             var random_bicycles = Math.floor(Math.random() * bicycles.length); // 랜덤 정수 추출

             if(bicycles[random_bicycles] === "자전거"){
                var bike = ["자전거", "라이어", "자전거", "라이어", "자전거", "자전거"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bike[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "택시"){
                var taxi = ["택시", "라이어", "라이어", "택시", "택시", "택시"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + taxi[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "비행기"){
                var airplane = ["비행기", "라이어", "비행기", "라이어", "비행기", "비행기"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + airplane[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "경찰차"){
                var police = ["경찰차", "라이어", "경찰차", "라이어", "경찰차", "경찰차"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + police[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "열기구"){
                var balloon = ["열기구", "열기구", "라이어", "열기구", "라이어", "열기구"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + balloon[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "킥보드"){
                var kick = ["킥보드", "킥보드", "라이어", "킥보드", "라이어", "킥보드"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + kick[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "구급차"){
                var emergency = ["구급차", "구급차", "라이어", "구급차", "구급차", "라이어"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + emergency[i] + "입니다.");
                }
            }
        }

    else if (random_themes === 1) {
        var foods = ["김치볶음밥", "피자", "치킨", "보쌈",
                     "케이크", "잡채", "돈가스", "떡볶이" ];
        var random_foods = Math.floor(Math.random() * foods.length); // 랜덤 정수 추출

             if(foods[random_foods] === "김치볶음밥"){
                var gimbokbab = ["김치볶음밥", "라이어","김치볶음밥", "라이어", "김치볶음밥", "김치볶음밥"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + gimbokbab[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "피자"){
                var pizza = ["피자", "피자","라이어", "피자", "라이어", "피자"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + pizza[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "치킨"){
                var chicken = ["치킨","라이어", "치킨", "치킨", "라이어", "치킨"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + chicken[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "보쌈"){
                var bossam = ["라이어", "라이어", "보쌈", "보쌈", "보쌈", "보쌈"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bossam[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "케이크") {
                var cake = ["케이크", "라이어","라이어", "케이크", "케이크", "케이크"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + cake[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "잡채"){
                var jabchae = ["잡채","라이어", "잡채", "잡채", "라이어", "잡채"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jabchae[i] + "입니다.");
                }
            }
            
            else if(foods[random_foods] === "돈가스"){
                var dongas = ["라이어", "돈가스","라이어", "돈가스", "돈가스", "돈가스"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + dongas[i] + "입니다.");
                }
            }
            else if(foods[random_foods] === "떡볶이"){
                var topoki = ["떡볶이", "떡볶이", "라이어", "떡볶이", "떡볶이", "라이어"]
                
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + topoki[i] + "입니다.");
                }
            }
        }
                    
    else if ( random_themes === 2) {
            var exercises = ["야구", "축구", "수영","피구", "배드민턴", "줄넘기", "컬링" ];
            var random_exercises = Math.floor(Math.random() * exercises.length); // 랜덤 정수 추출

            if( exercises[random_exercises] === "야구" ){                
                var baseball = ["라이어", "야구", "야구", "라이어", "야구", "야구"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + baseball[i] + "입니다.");
                }
            }

            else if( exercises[random_exercises] === "축구" ){
                
                var football = ["라이어", "축구", "축구", "라이어", "축구", "축구"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + football[i] + "입니다.");
                }
            }
            else if( exercises[random_exercises] === "수영" ){
                
                var swim = ["수영", "수영", "라이어", "수영", "수영", "라이어"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "피구" ){
                var swim = ["피구", "라이어", "라이어", "피구", "피구","피구"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "배드민턴" ){
                var swim = ["배드민턴", "배드민턴", "배드민턴", "라이어", "라이어", "배드민턴"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "줄넘기" ){
                var line = ["라이어", "라이어", "줄넘기", "줄넘기", "줄넘기", "줄넘기"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + line[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "컬링" ){
                var curling = ["컬링", "라이어", "컬링", "컬링", "라이어", "컬링"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + curling[i] + "입니다.");
                 }
            }

        }
    
    else if ( random_themes === 3 ){
        var electronics = ["스마트폰", "노트북", "전자레인지", "태블릿PC", "TV", "로봇청소기"];
        var random_electronics = Math.floor(Math.random() * electronics.length); // 랜덤 정수 추출

        if( electronics[random_electronics] === "스마트폰" ){                
            var phone = ["스마트폰", "라이어", "스마트폰", "스마트폰", "스마트폰","라이어"]

            for (var i = 0; i < 6; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + phone[i] + "입니다.");
            }
        }

        else if( electronics[random_electronics] === "노트북" ){
            
            var notebook = ["라이어", "라이어", "노트북", "노트북", "노트북","노트북"]

            for (var i = 0; i < 6; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + notebook[i] + "입니다.");
            }
        }
        else if( electronics[random_electronics] === "전자레인지" ){
            
            var junja = ["전자레인지", "전자레인지", "라이어", "전자레인지", "라이어","전자레인지"]

            for (var i = 0; i < 6; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + junja[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "태블릿PC" ){
            var tablet = ["태블릿PC", "라이어", "태블릿PC", "라이어", "태블릿PC", "태블릿PC"]

            for (var i = 0; i < 6; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tablet[i] + "입니다.");
             }
        }
        else if( electronics[random_eelectronics] === "TV" ){
            var tv = ["TV", "TV", "라이어","TV", "라이어", "TV"]

            for (var i = 0; i < 6; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tv[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "로봇 청소기" ){
            var cleaner = ["라이어", "로봇 청소기", "로봇 청소기", "로봇 청소기","로봇 청소기", "라이어"]

            for (var i = 0; i < 6; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + cleaner[i] + "입니다.");
             }
        }
    }
    
    else if ( random_themes === 4) {
            var fruits = ["딸기", "자몽", "두리안", "귤", "리치", "잭프루트" ];
            var random_fruits = Math.floor(Math.random() * fruits.length); // 랜덤 정수 추출
        
            if( fruits[random_fruits] === "딸기") {
                var strawberry = ["딸기", "라이어", "딸기", "딸기", "딸기", "라이어"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + strawberry[i] + "입니다.");
                  }
            }

            else if ( fruits[random_fruits] === "자몽") {
                var grapefruit = ["자몽", "라이어", "자몽","라이어", "자몽", "자몽"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + grapefruit[i] + "입니다.");
                  }
            }

            else if( fruits[random_fruits] === "두리안") {
                var durian = ["라이어", "두리안", "라이어", "두리안", "두리안", "두리안"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + durian[i] + "입니다.");
                  }
                }

            else if( fruits[random_fruits] === "귤") {
                var guul = ["귤", "라이어", "귤", "귤", "라이어", "귤"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + guul[i] + "입니다.");
                  }
                }
                
            else if( fruits[random_fruits] === "리치") {
                 var rich = ["라이어", "리치", "라이어", "리치", "리치", "리치"]
    
                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + rich[i] + "입니다.");
                  }
                }
            
            else if( fruits[random_fruits] === "잭푸르트") {
                var jack = ["잭푸르트", "잭푸르트", "라이어", "라이어", "잭푸르트", "잭푸르트"]

                for (var i = 0; i < 6; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jack[i] + "입니다.");
                  }
            }
        }
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

    //제시어 주제 목록
    var themes = ["탈 것", "음식", "운동", "전자제품", "과일"];
    
    var theme = document.getElementById("theme");
    var random_themes = Math.floor(Math.random() * themes.length); // 랜덤 정수 추출
    
    theme.style.display ='block'; //제시어주제 칸 보이기
    theme.innerHTML = "제시어 주제 : " + themes[random_themes];

    if(random_themes === 0 ){
             var bicycles = ["자전거", "택시", "비행기", "경찰차",
                             "열기구", "킥보드", "구급차" ];
             var random_bicycles = Math.floor(Math.random() * bicycles.length); // 랜덤 정수 추출

             if(bicycles[random_bicycles] === "자전거"){
                var bike = ["자전거", "라이어", "자전거", "라이어", "자전거", "자전거", "자전거"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bike[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "택시"){
                var taxi = ["택시", "라이어", "택시", "라이어", "택시", "택시", "택시"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + taxi[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "비행기"){
                var airplane = ["비행기", "비행기", "라이어", "비행기", "라이어", "비행기", "비행기"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + airplane[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "경찰차"){
                var police = ["경찰차", "경찰차", "라이어", "경찰차", "라이어", "경찰차", "경찰차"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + police[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "열기구"){
                var balloon = ["열기구", "열기구", "라이어", "열기구", "라이어", "열기구", "열기구"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + balloon[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "킥보드"){
                var kick = ["킥보드", "킥보드", "라이어", "킥보드", "킥보드", "라이어", "킥보드"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + kick[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "구급차"){
                var emergency = ["구급차", "구급차", "구급차", "라이어", "구급차", "구급차", "라이어"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + emergency[i] + "입니다.");
                }
            }
        }

    else if (random_themes === 1) {
        var foods = ["김치볶음밥", "피자", "치킨", "보쌈",
                     "케이크", "잡채", "돈가스", "떡볶이" ];
        var random_foods = Math.floor(Math.random() * foods.length); // 랜덤 정수 추출

             if(foods[random_foods] === "김치볶음밥"){
                var gimbokbab = ["김치볶음밥", "김치볶음밥", "라이어","김치볶음밥", "라이어", "김치볶음밥", "김치볶음밥"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + gimbokbab[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "피자"){
                var pizza = ["피자", "피자","라이어", "피자", "피자", "라이어", "피자"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + pizza[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "치킨"){
                var chicken = ["치킨","라이어", "치킨", "치킨", "치킨", "라이어", "치킨"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + chicken[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "보쌈"){
                var bossam = ["라이어", "라이어", "보쌈", "보쌈", "보쌈", "보쌈", "보쌈"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bossam[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "케이크") {
                var cake = ["케이크", "라이어","라이어", "케이크", "케이크", "케이크", "케이크"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + cake[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "잡채"){
                var jabchae = ["잡채","라이어", "잡채", "잡채", "잡채", "라이어", "잡채"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jabchae[i] + "입니다.");
                }
            }
            
            else if(foods[random_foods] === "돈가스"){
                var dongas = ["돈가스", "라이어", "돈가스","라이어", "돈가스", "돈가스", "돈가스"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + dongas[i] + "입니다.");
                }
            }
            else if(foods[random_foods] === "떡볶이"){
                var topoki = ["떡볶이", "떡볶이", "떡볶이", "라이어", "떡볶이", "떡볶이", "라이어"]
                
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + topoki[i] + "입니다.");
                }
            }
        }
                    
    else if ( random_themes === 2) {
            var exercises = ["야구", "축구", "수영","피구", "배드민턴", "줄넘기", "컬링" ];
            var random_exercises = Math.floor(Math.random() * exercises.length); // 랜덤 정수 추출

            if( exercises[random_exercises] === "야구" ){                
                var baseball = ["야구", "라이어", "야구", "야구", "라이어", "야구", "야구"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + baseball[i] + "입니다.");
                }
            }

            else if( exercises[random_exercises] === "축구" ){
                
                var football = ["라이어", "축구", "축구", "축구", "라이어", "축구", "축구"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + football[i] + "입니다.");
                }
            }
            else if( exercises[random_exercises] === "수영" ){
                
                var swim = ["수영", "수영", "라이어", "수영", "수영", "수영", "라이어"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "피구" ){
                var swim = ["피구", "라이어", "라이어", "피구", "피구", "피구","피구"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "배드민턴" ){
                var swim = ["배드민턴", "배드민턴", "배드민턴", "라이어", "라이어", "배드민턴", "배드민턴"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "줄넘기" ){
                var line = ["라이어", "줄넘기", "라이어", "줄넘기", "줄넘기", "줄넘기", "줄넘기"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + line[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "컬링" ){
                var curling = ["컬링", "컬링", "라이어", "컬링", "컬링", "라이어", "컬링"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + curling[i] + "입니다.");
                 }
            }

        }
    
    else if ( random_themes === 3 ){
        var electronics = ["스마트폰", "노트북", "전자레인지", "태블릿PC", "TV", "로봇청소기"];
        var random_electronics = Math.floor(Math.random() * electronics.length); // 랜덤 정수 추출

        if( electronics[random_electronics] === "스마트폰" ){                
            var phone = ["스마트폰", "라이어", "스마트폰", "스마트폰", "스마트폰", "스마트폰","라이어"]

            for (var i = 0; i < 7; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + phone[i] + "입니다.");
            }
        }

        else if( electronics[random_electronics] === "노트북" ){
            
            var notebook = ["라이어", "노트북", "라이어", "노트북", "노트북", "노트북","노트북"]

            for (var i = 0; i < 7; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + notebook[i] + "입니다.");
            }
        }
        else if( electronics[random_electronics] === "전자레인지" ){
            
            var junja = ["전자레인지", "전자레인지", "전자레인지", "라이어", "전자레인지", "라이어","전자레인지"]

            for (var i = 0; i < 7; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + junja[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "태블릿PC" ){
            var tablet = ["태블릿PC", "라이어", "태블릿PC", "태블릿PC", "라이어", "태블릿PC", "태블릿PC"]

            for (var i = 0; i < 7; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tablet[i] + "입니다.");
             }
        }
        else if( electronics[random_eelectronics] === "TV" ){
            var tv = ["TV", "TV", "라이어","TV", "라이어", "TV", "TV"]

            for (var i = 0; i < 7; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tv[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "로봇 청소기" ){
            var cleaner = ["라이어", "로봇 청소기", "로봇 청소기", "로봇 청소기", "로봇 청소기","로봇 청소기", "라이어"]

            for (var i = 0; i < 7; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + cleaner[i] + "입니다.");
             }
        }
    }
    
    else if ( random_themes === 4) {
            var fruits = ["딸기", "자몽", "두리안", "귤", "리치", "잭프루트" ];
            var random_fruits = Math.floor(Math.random() * fruits.length); // 랜덤 정수 추출
        
            if( fruits[random_fruits] === "딸기") {
                var strawberry = ["딸기", "라이어", "딸기", "딸기", "딸기", "딸기", "라이어"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + strawberry[i] + "입니다.");
                  }
            }

            else if ( fruits[random_fruits] === "자몽") {
                var grapefruit = ["자몽", "라이어", "자몽", "자몽","라이어", "자몽", "자몽"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + grapefruit[i] + "입니다.");
                  }
            }

            else if( fruits[random_fruits] === "두리안") {
                var durian = ["라이어", "두리안", "두리안", "라이어", "두리안", "두리안", "두리안"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + durian[i] + "입니다.");
                  }
                }

            else if( fruits[random_fruits] === "귤") {
                var guul = ["귤", "귤", "라이어", "귤", "귤", "라이어", "귤"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + guul[i] + "입니다.");
                  }
                }
                
            else if( fruits[random_fruits] === "리치") {
                 var rich = ["라이어", "리치", "라이어", "리치", "리치", "리치", "리치"]
    
                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + rich[i] + "입니다.");
                  }
                }
            
            else if( fruits[random_fruits] === "잭푸르트") {
                var jack = ["잭푸르트", "잭푸르트", "라이어", "잭푸르트", "라이어", "잭푸르트", "잭푸르트"]

                for (var i = 0; i < 7; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jack[i] + "입니다.");
                  }
            }
        }
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

    //제시어 주제 목록
    var themes = ["탈 것", "음식", "운동", "전자제품", "과일"];
    
    var theme = document.getElementById("theme");
    var random_themes = Math.floor(Math.random() * themes.length); // 랜덤 정수 추출
    
    theme.style.display ='block'; //제시어주제 칸 보이기
    theme.innerHTML = "제시어 주제 : " + themes[random_themes];

    if(random_themes === 0 ){
             var bicycles = ["자전거", "택시", "비행기", "경찰차",
                             "열기구", "킥보드", "구급차" ];
             var random_bicycles = Math.floor(Math.random() * bicycles.length); // 랜덤 정수 추출

             if(bicycles[random_bicycles] === "자전거"){
                var bike = ["자전거", "자전거", "라이어", "자전거", "라이어", "자전거", "자전거", "자전거"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bike[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "택시"){
                var taxi = ["택시", "택시", "라이어", "택시", "라이어", "택시", "택시", "택시"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + taxi[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "비행기"){
                var airplane = ["비행기", "비행기", "비행기", "라이어", "비행기", "라이어", "비행기", "비행기"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + airplane[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "경찰차"){
                var police = ["경찰차", "경찰차", "경찰차", "라이어", "경찰차", "라이어", "경찰차", "경찰차"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + police[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "열기구"){
                var balloon = ["열기구", "열기구", "열기구", "라이어", "열기구", "라이어", "열기구", "열기구"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + balloon[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "킥보드"){
                var kick = ["킥보드", "킥보드", "킥보드", "라이어", "킥보드", "킥보드", "라이어", "킥보드"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + kick[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "구급차"){
                var emergency = ["구급차", "구급차", "구급차", "구급차", "라이어", "구급차", "구급차", "라이어"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + emergency[i] + "입니다.");
                }
            }
        }

    else if (random_themes === 1) {
        var foods = ["김치볶음밥", "피자", "치킨", "보쌈",
                     "케이크", "잡채", "돈가스", "떡볶이" ];
        var random_foods = Math.floor(Math.random() * foods.length); // 랜덤 정수 추출

             if(foods[random_foods] === "김치볶음밥"){
                var gimbokbab = ["김치볶음밥", "김치볶음밥", "김치볶음밥", "라이어","김치볶음밥", "라이어", "김치볶음밥", "김치볶음밥"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + gimbokbab[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "피자"){
                var pizza = ["피자", "피자", "피자","라이어", "피자", "피자", "라이어", "피자"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + pizza[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "치킨"){
                var chicken = ["치킨", "치킨","라이어", "치킨", "치킨", "치킨", "라이어", "치킨"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + chicken[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "보쌈"){
                var bossam = ["보쌈", "라이어", "라이어", "보쌈", "보쌈", "보쌈", "보쌈", "보쌈"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bossam[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "케이크") {
                var cake = ["케이크", "케이크", "라이어","라이어", "케이크", "케이크", "케이크", "케이크"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + cake[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "잡채"){
                var jabchae = ["잡채", "잡채","라이어", "잡채", "잡채", "잡채", "라이어", "잡채"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jabchae[i] + "입니다.");
                }
            }
            
            else if(foods[random_foods] === "돈가스"){
                var dongas = ["돈가스", "돈가스", "라이어", "돈가스","라이어", "돈가스", "돈가스", "돈가스"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + dongas[i] + "입니다.");
                }
            }
            else if(foods[random_foods] === "떡볶이"){
                var topoki = ["떡볶이", "떡볶이", "떡볶이", "떡볶이", "라이어", "떡볶이", "떡볶이", "라이어"]
                
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + topoki[i] + "입니다.");
                }
            }
        }
                    
    else if ( random_themes === 2) {
            var exercises = ["야구", "축구", "수영","피구", "배드민턴", "줄넘기", "컬링" ];
            var random_exercises = Math.floor(Math.random() * exercises.length); // 랜덤 정수 추출

            if( exercises[random_exercises] === "야구" ){                
                var baseball = ["야구", "야구", "라이어", "야구", "야구", "라이어", "야구", "야구"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + baseball[i] + "입니다.");
                }
            }

            else if( exercises[random_exercises] === "축구" ){
                
                var football = ["라이어", "축구", "축구", "축구", "축구", "라이어", "축구", "축구"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + football[i] + "입니다.");
                }
            }
            else if( exercises[random_exercises] === "수영" ){
                
                var swim = ["수영", "수영", "수영", "라이어", "수영", "수영", "수영", "라이어"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "피구" ){
                var swim = ["피구", "라이어", "피구", "라이어", "피구", "피구", "피구","피구"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "배드민턴" ){
                var swim = ["배드민턴", "배드민턴", "배드민턴", "라이어", "배드민턴", "라이어", "배드민턴", "배드민턴"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "줄넘기" ){
                var line = ["라이어", "줄넘기", "줄넘기", "라이어", "줄넘기", "줄넘기", "줄넘기", "줄넘기"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + line[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "컬링" ){
                var curling = ["컬링", "컬링", "라이어", "컬링", "컬링", "라이어", "컬링", "컬링"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + curling[i] + "입니다.");
                 }
            }

        }
    
    else if ( random_themes === 3 ){
        var electronics = ["스마트폰", "노트북", "전자레인지", "태블릿PC", "TV", "로봇청소기"];
        var random_electronics = Math.floor(Math.random() * electronics.length); // 랜덤 정수 추출

        if( electronics[random_electronics] === "스마트폰" ){                
            var phone = ["스마트폰", "라이어", "스마트폰", "스마트폰", "스마트폰", "스마트폰", "스마트폰","라이어"]

            for (var i = 0; i < 8; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + phone[i] + "입니다.");
            }
        }

        else if( electronics[random_electronics] === "노트북" ){
            
            var notebook = ["라이어", "노트북", "노트북", "라이어", "노트북", "노트북", "노트북","노트북"]

            for (var i = 0; i < 8; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + notebook[i] + "입니다.");
            }
        }
        else if( electronics[random_electronics] === "전자레인지" ){
            
            var junja = ["전자레인지", "전자레인지", "전자레인지", "전자레인지", "라이어", "전자레인지", "라이어","전자레인지"]

            for (var i = 0; i < 8; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + junja[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "태블릿PC" ){
            var tablet = ["태블릿PC", "라이어", "태블릿PC", "태블릿PC", "태블릿PC", "라이어", "태블릿PC", "태블릿PC"]

            for (var i = 0; i < 8; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tablet[i] + "입니다.");
             }
        }
        else if( electronics[random_eelectronics] === "TV" ){
            var tv = ["TV", "TV", "라이어","TV", "라이어", "TV", "TV", "TV"]

            for (var i = 0; i < 8; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tv[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "로봇 청소기" ){
            var cleaner = ["로봇 청소기", "라이어", "로봇 청소기", "로봇 청소기", "로봇 청소기", "로봇 청소기","로봇 청소기", "라이어"]

            for (var i = 0; i < 8; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + cleaner[i] + "입니다.");
             }
        }
    }
    
    else if ( random_themes === 4) {
            var fruits = ["딸기", "자몽", "두리안", "귤", "리치", "잭프루트" ];
            var random_fruits = Math.floor(Math.random() * fruits.length); // 랜덤 정수 추출
        
            if( fruits[random_fruits] === "딸기") {
                var strawberry = ["딸기", "라이어", "딸기", "딸기", "딸기", "딸기", "딸기", "라이어"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + strawberry[i] + "입니다.");
                  }
            }

            else if ( fruits[random_fruits] === "자몽") {
                var grapefruit = ["자몽", "라이어", "자몽", "자몽", "자몽","라이어", "자몽", "자몽"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + grapefruit[i] + "입니다.");
                  }
            }

            else if( fruits[random_fruits] === "두리안") {
                var durian = ["라이어", "두리안", "두리안", "두리안", "라이어", "두리안", "두리안", "두리안"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + durian[i] + "입니다.");
                  }
                }

            else if( fruits[random_fruits] === "귤") {
                var guul = ["귤", "귤", "귤", "라이어", "귤", "귤", "라이어", "귤"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + guul[i] + "입니다.");
                  }
                }
                
            else if( fruits[random_fruits] === "리치") {
                 var rich = ["리치", "라이어", "리치", "라이어", "리치", "리치", "리치", "리치"]
    
                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + rich[i] + "입니다.");
                  }
                }
            
            else if( fruits[random_fruits] === "잭푸르트") {
                var jack = ["잭푸르트", "잭푸르트", "라이어", "잭푸르트", "라이어", "잭푸르트", "잭푸르트", "잭푸르트"]

                for (var i = 0; i < 8; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jack[i] + "입니다.");
                  }
            }
        }
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

    //제시어 주제 목록
    var themes = ["탈 것", "음식", "운동", "전자제품", "과일"];
    
    var theme = document.getElementById("theme");
    var random_themes = Math.floor(Math.random() * themes.length); // 랜덤 정수 추출
    
    theme.style.display ='block'; //제시어주제 칸 보이기
    theme.innerHTML = "제시어 주제 : " + themes[random_themes];

    if(random_themes === 0 ){
             var bicycles = ["자전거", "택시", "비행기", "경찰차",
                             "열기구", "킥보드", "구급차" ];
             var random_bicycles = Math.floor(Math.random() * bicycles.length); // 랜덤 정수 추출

             if(bicycles[random_bicycles] === "자전거"){
                var bike = ["자전거", "라이어", "자전거", "라이어", "자전거", "라이어", "자전거", "자전거", "자전거"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bike[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "택시"){
                var taxi = ["택시", "라이어", "택시", "라이어", "택시", "라이어", "택시", "택시", "택시"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + taxi[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "비행기"){
                var airplane = ["비행기", "라이어", "비행기", "비행기", "라이어", "비행기", "라이어", "비행기", "비행기"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + airplane[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "경찰차"){
                var police = ["경찰차", "경찰차", "라이어", "경찰차", "라이어", "경찰차", "라이어", "경찰차", "경찰차"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + police[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "열기구"){
                var balloon = ["열기구", "열기구", "열기구", "라이어", "열기구", "라이어", "열기구", "열기구", "라이어"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + balloon[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "킥보드"){
                var kick = ["킥보드", "킥보드", "킥보드", "라이어", "킥보드", "킥보드", "라이어", "킥보드", "라이어"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + kick[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "구급차"){
                var emergency = ["구급차", "구급차", "구급차", "구급차", "라이어", "구급차", "라이어", "구급차", "라이어"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + emergency[i] + "입니다.");
                }
            }
        }

    else if (random_themes === 1) {
        var foods = ["김치볶음밥", "피자", "치킨", "보쌈",
                     "케이크", "잡채", "돈가스", "떡볶이" ];
        var random_foods = Math.floor(Math.random() * foods.length); // 랜덤 정수 추출

             if(foods[random_foods] === "김치볶음밥"){
                var gimbokbab = ["라이어", "김치볶음밥", "김치볶음밥", "김치볶음밥", "라이어","김치볶음밥", "라이어", "김치볶음밥", "김치볶음밥"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + gimbokbab[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "피자"){
                var pizza = ["피자", "라이어", "피자", "피자","라이어", "피자", "피자", "라이어", "피자"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + pizza[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "치킨"){
                var chicken = ["치킨", "치킨","라이어", "치킨", "치킨", "라이어", "치킨", "라이어", "치킨"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + chicken[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "보쌈"){
                var bossam = ["보쌈", "라이어", "라이어", "보쌈", "보쌈", "라이어", "보쌈", "보쌈", "보쌈"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bossam[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "케이크") {
                var cake = ["케이크", "케이크", "라이어","라이어", "케이크", "케이크", "라이어", "케이크", "케이크"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + cake[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "잡채"){
                var jabchae = ["잡채", "잡채","라이어", "잡채", "잡채", "라이어", "잡채", "라이어", "잡채"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jabchae[i] + "입니다.");
                }
            }
            
            else if(foods[random_foods] === "돈가스"){
                var dongas = ["돈가스", "돈가스", "라이어", "돈가스","라이어", "돈가스", "돈가스", "라이어", "돈가스"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + dongas[i] + "입니다.");
                }
            }
            else if(foods[random_foods] === "떡볶이"){
                var topoki = ["떡볶이", "떡볶이", "떡볶이", "떡볶이", "라이어", "떡볶이", "라이어", "떡볶이", "라이어"]
                
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + topoki[i] + "입니다.");
                }
            }
        }
                    
    else if ( random_themes === 2) {
            var exercises = ["야구", "축구", "수영","피구", "배드민턴", "줄넘기", "컬링" ];
            var random_exercises = Math.floor(Math.random() * exercises.length); // 랜덤 정수 추출

            if( exercises[random_exercises] === "야구" ){                
                var baseball = ["야구", "라이어", "야구", "라이어", "야구", "야구", "라이어", "야구", "야구"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + baseball[i] + "입니다.");
                }
            }

            else if( exercises[random_exercises] === "축구" ){
                
                var football = ["라이어", "라이어", "축구", "축구", "축구", "축구", "라이어", "축구", "축구"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + football[i] + "입니다.");
                }
            }
            else if( exercises[random_exercises] === "수영" ){
                
                var swim = ["수영", "수영", "수영", "라이어", "라이어", "수영", "수영", "수영", "라이어"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "피구" ){
                var swim = ["피구", "라이어", "라이어", "피구", "라이어", "피구", "피구", "피구","피구"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "배드민턴" ){
                var swim = ["배드민턴", "배드민턴", "라이어", "배드민턴", "라이어", "배드민턴", "라이어", "배드민턴", "배드민턴"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "줄넘기" ){
                var line = ["라이어", "줄넘기", "줄넘기", "라이어", "줄넘기", "줄넘기", "라이어", "줄넘기", "줄넘기"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + line[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "컬링" ){
                var curling = ["컬링", "컬링", "라이어", "컬링", "라이어", "컬링", "라이어", "컬링", "컬링"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + curling[i] + "입니다.");
                 }
            }

        }
    
    else if ( random_themes === 3 ){
        var electronics = ["스마트폰", "노트북", "전자레인지", "태블릿PC", "TV", "로봇청소기"];
        var random_electronics = Math.floor(Math.random() * electronics.length); // 랜덤 정수 추출

        if( electronics[random_electronics] === "스마트폰" ){                
            var phone = ["스마트폰", "라이어", "스마트폰", "스마트폰", "라이어",  "스마트폰", "스마트폰", "스마트폰","라이어"]

            for (var i = 0; i < 9; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + phone[i] + "입니다.");
            }
        }

        else if( electronics[random_electronics] === "노트북" ){
            
            var notebook = ["라이어", "노트북", "라이어", "노트북", "라이어", "노트북", "노트북", "노트북","노트북"]

            for (var i = 0; i < 9; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + notebook[i] + "입니다.");
            }
        }
        else if( electronics[random_electronics] === "전자레인지" ){
            
            var junja = ["전자레인지", "전자레인지", "라이어",  "전자레인지", "전자레인지", "라이어", "전자레인지", "라이어","전자레인지"]

            for (var i = 0; i < 9; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + junja[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "태블릿PC" ){
            var tablet = ["태블릿PC", "라이어", "태블릿PC", "라이어",  "태블릿PC", "태블릿PC", "라이어", "태블릿PC", "태블릿PC"]

            for (var i = 0; i < 9; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tablet[i] + "입니다.");
             }
        }
        else if( electronics[random_eelectronics] === "TV" ){
            var tv = ["TV", "TV", "라이어","TV", "라이어", "TV", "TV", "라이어", "TV"]

            for (var i = 0; i < 9; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tv[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "로봇 청소기" ){
            var cleaner = ["로봇 청소기", "라이어", "로봇 청소기", "라이어",  "로봇 청소기", "로봇 청소기", "로봇 청소기","로봇 청소기", "라이어"]

            for (var i = 0; i < 9; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + cleaner[i] + "입니다.");
             }
        }
    }
    
    else if ( random_themes === 4) {
            var fruits = ["딸기", "자몽", "두리안", "귤", "리치", "잭프루트" ];
            var random_fruits = Math.floor(Math.random() * fruits.length); // 랜덤 정수 추출
        
            if( fruits[random_fruits] === "딸기") {
                var strawberry = ["딸기", "라이어", "딸기", "라이어",  "딸기", "딸기", "딸기", "딸기", "라이어"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + strawberry[i] + "입니다.");
                  }
            }

            else if ( fruits[random_fruits] === "자몽") {
                var grapefruit = ["자몽", "라이어", "자몽", "라이어",  "자몽", "자몽","라이어", "자몽", "자몽"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + grapefruit[i] + "입니다.");
                  }
            }

            else if( fruits[random_fruits] === "두리안") {
                var durian = ["라이어", "두리안", "두리안", "두리안", "라이어",  "라이어", "두리안", "두리안", "두리안"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + durian[i] + "입니다.");
                  }
                }

            else if( fruits[random_fruits] === "귤") {
                var guul = ["귤", "귤", "귤", "라이어", "귤", "라이어",  "귤", "라이어", "귤"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + guul[i] + "입니다.");
                  }
                }
                
            else if( fruits[random_fruits] === "리치") {
                 var rich = ["리치", "라이어", "리치", "라이어", "리치", "리치", "라이어",  "리치", "리치"]
    
                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + rich[i] + "입니다.");
                  }
                }
            
            else if( fruits[random_fruits] === "잭푸르트") {
                var jack = ["잭푸르트", "잭푸르트", "라이어", "잭푸르트", "라이어", "잭푸르트", "라이어",  "잭푸르트", "잭푸르트"]

                for (var i = 0; i < 9; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jack[i] + "입니다.");
                  }
            }
        }
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

    //제시어 주제 목록
    var themes = ["탈 것", "음식", "운동", "전자제품", "과일"];
    
    var theme = document.getElementById("theme");
    var random_themes = Math.floor(Math.random() * themes.length); // 랜덤 정수 추출
    
    theme.style.display ='block'; //제시어주제 칸 보이기
    theme.innerHTML = "제시어 주제 : " + themes[random_themes];

    if(random_themes === 0 ){
             var bicycles = ["자전거", "택시", "비행기", "경찰차",
                             "열기구", "킥보드", "구급차" ];
             var random_bicycles = Math.floor(Math.random() * bicycles.length); // 랜덤 정수 추출

             if(bicycles[random_bicycles] === "자전거"){
                var bike = ["자전거", "자전거",  "라이어", "자전거", "라이어", "자전거", "라이어", "자전거", "자전거", "자전거"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bike[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "택시"){
                var taxi = ["택시", "택시", "라이어", "택시", "라이어", "택시", "라이어", "택시", "택시", "택시"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + taxi[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "비행기"){
                var airplane = ["비행기", "비행기", "라이어", "비행기", "비행기", "라이어", "비행기", "라이어", "비행기", "비행기"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + airplane[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "경찰차"){
                var police = ["경찰차", "경찰차", "경찰차", "라이어", "경찰차", "라이어", "경찰차", "라이어", "경찰차", "경찰차"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + police[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "열기구"){
                var balloon = ["열기구", "열기구", "열기구", "라이어", "열기구", "열기구", "라이어", "열기구", "열기구", "라이어"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + balloon[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "킥보드"){
                var kick = ["킥보드", "킥보드", "킥보드", "라이어", "킥보드", "킥보드", "킥보드", "라이어", "킥보드", "라이어"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + kick[i] + "입니다.");
                }
            }
            else if(bicycles[random_bicycles] === "구급차"){
                var emergency = ["구급차", "구급차", "구급차", "구급차", "라이어", "구급차", "구급차", "라이어", "구급차", "라이어"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + emergency[i] + "입니다.");
                }
            }
        }

    else if (random_themes === 1) {
        var foods = ["김치볶음밥", "피자", "치킨", "보쌈",
                     "케이크", "잡채", "돈가스", "떡볶이" ];
        var random_foods = Math.floor(Math.random() * foods.length); // 랜덤 정수 추출

             if(foods[random_foods] === "김치볶음밥"){
                var gimbokbab = ["김치볶음밥", "라이어", "김치볶음밥", "김치볶음밥", "김치볶음밥", "라이어","김치볶음밥", "라이어", "김치볶음밥", "김치볶음밥"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + gimbokbab[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "피자"){
                var pizza = ["피자", "라이어", "피자", "피자", "피자","라이어", "피자", "피자", "라이어", "피자"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + pizza[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "치킨"){
                var chicken = ["치킨", "치킨","라이어", "치킨", "치킨", "치킨", "라이어", "치킨", "라이어", "치킨"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + chicken[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "보쌈"){
                var bossam = ["보쌈", "라이어", "보쌈", "라이어", "보쌈", "보쌈", "라이어", "보쌈", "보쌈", "보쌈"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + bossam[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "케이크") {
                var cake = ["케이크", "케이크", "케이크", "라이어","라이어", "케이크", "케이크", "라이어", "케이크", "케이크"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + cake[i] + "입니다.");
                }
            }

            else if(foods[random_foods] === "잡채"){
                var jabchae = ["잡채", "잡채", "라이어", "잡채", "잡채", "잡채", "라이어", "잡채", "라이어", "잡채"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jabchae[i] + "입니다.");
                }
            }
            
            else if(foods[random_foods] === "돈가스"){
                var dongas = ["돈가스", "돈가스", "라이어", "돈가스", "라이어", "돈가스", "돈가스", "돈가스", "라이어", "돈가스"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + dongas[i] + "입니다.");
                }
            }
            else if(foods[random_foods] === "떡볶이"){
                var topoki = ["떡볶이", "떡볶이", "떡볶이", "떡볶이", "떡볶이", "라이어", "떡볶이", "라이어", "떡볶이", "라이어"]
                
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + topoki[i] + "입니다.");
                }
            }
        }
                    
    else if ( random_themes === 2) {
            var exercises = ["야구", "축구", "수영","피구", "배드민턴", "줄넘기", "컬링" ];
            var random_exercises = Math.floor(Math.random() * exercises.length); // 랜덤 정수 추출

            if( exercises[random_exercises] === "야구" ){                
                var baseball = ["야구", "야구", "라이어", "야구", "라이어", "야구", "야구", "라이어", "야구", "야구"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + baseball[i] + "입니다.");
                }
            }

            else if( exercises[random_exercises] === "축구" ){
                
                var football = ["라이어", "축구", "라이어", "축구", "축구", "축구", "축구", "라이어", "축구", "축구"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + football[i] + "입니다.");
                }
            }
            else if( exercises[random_exercises] === "수영" ){
                
                var swim = ["수영", "수영", "수영", "수영", "라이어", "라이어", "수영", "수영", "수영", "라이어"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "피구" ){
                var swim = ["피구", "라이어", "피구", "라이어", "피구", "라이어", "피구", "피구", "피구","피구"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "배드민턴" ){
                var swim = ["배드민턴", "배드민턴", "배드민턴", "라이어", "배드민턴", "라이어", "배드민턴", "라이어", "배드민턴", "배드민턴"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + swim[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "줄넘기" ){
                var line = ["라이어", "줄넘기", "줄넘기", "줄넘기", "라이어", "줄넘기", "줄넘기", "라이어", "줄넘기", "줄넘기"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + line[i] + "입니다.");
                 }
            }
            else if( exercises[random_exercises] === "컬링" ){
                var curling = ["컬링", "컬링", "라이어", "컬링", "컬링", "라이어", "컬링", "라이어", "컬링", "컬링"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + curling[i] + "입니다.");
                 }
            }

        }
    
    else if ( random_themes === 3 ){
        var electronics = ["스마트폰", "노트북", "전자레인지", "태블릿PC", "TV", "로봇청소기"];
        var random_electronics = Math.floor(Math.random() * electronics.length); // 랜덤 정수 추출

        if( electronics[random_electronics] === "스마트폰" ){                
            var phone = ["스마트폰", "스마트폰", "라이어", "스마트폰", "스마트폰", "라이어",  "스마트폰", "스마트폰", "스마트폰","라이어"]

            for (var i = 0; i < 10; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + phone[i] + "입니다.");
            }
        }

        else if( electronics[random_electronics] === "노트북" ){
            
            var notebook = ["라이어", "노트북", "라이어", "노트북", "노트북", "라이어", "노트북", "노트북", "노트북","노트북"]

            for (var i = 0; i < 10; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + notebook[i] + "입니다.");
            }
        }
        else if( electronics[random_electronics] === "전자레인지" ){
            
            var junja = ["전자레인지", "전자레인지", "전자레인지", "라이어",  "전자레인지", "전자레인지", "라이어", "전자레인지", "라이어","전자레인지"]

            for (var i = 0; i < 10; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + junja[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "태블릿PC" ){
            var tablet = ["태블릿PC", "라이어", "태블릿PC", "라이어", "태블릿PC", "태블릿PC", "태블릿PC", "라이어", "태블릿PC", "태블릿PC"]

            for (var i = 0; i < 10; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tablet[i] + "입니다.");
             }
        }
        else if( electronics[random_eelectronics] === "TV" ){
            var tv = ["TV", "TV", "라이어","TV", "라이어", "TV", "TV", "TV", "라이어", "TV"]

            for (var i = 0; i < 10; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + tv[i] + "입니다.");
             }
        }
        else if( electronics[random_electronics] === "로봇 청소기" ){
            var cleaner = ["로봇 청소기", "라이어", "로봇 청소기", "로봇 청소기", "라이어", "로봇 청소기", "로봇 청소기", "로봇 청소기","로봇 청소기", "라이어"]

            for (var i = 0; i < 10; i++) {
                alert("제시어를 확인하세요.");
                alert(i+1 + "번째 당신은 " + cleaner[i] + "입니다.");
             }
        }
    }
    
    else if ( random_themes === 4) {
            var fruits = ["딸기", "자몽", "두리안", "귤", "리치", "잭프루트" ];
            var random_fruits = Math.floor(Math.random() * fruits.length); // 랜덤 정수 추출
        
            if( fruits[random_fruits] === "딸기") {
                var strawberry = ["딸기", "라이어", "딸기", "라이어",  "딸기", "딸기", "딸기", "딸기", "딸기", "라이어"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + strawberry[i] + "입니다.");
                  }
            }

            else if ( fruits[random_fruits] === "자몽") {
                var grapefruit = ["자몽", "라이어", "자몽", "라이어", "자몽", "자몽", "자몽","라이어", "자몽", "자몽"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + grapefruit[i] + "입니다.");
                  }
            }

            else if( fruits[random_fruits] === "두리안") {
                var durian = ["라이어", "두리안", "두리안", "두리안", "라이어", "두리안", "라이어", "두리안", "두리안", "두리안"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + durian[i] + "입니다.");
                  }
                }

            else if( fruits[random_fruits] === "귤") {
                var guul = ["귤", "귤", "귤", "라이어", "귤", "라이어", "귤", "귤", "라이어", "귤"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + guul[i] + "입니다.");
                  }
                }
                
            else if( fruits[random_fruits] === "리치") {
                 var rich = ["리치", "라이어", "리치", "라이어", "리치", "리치", "리치", "라이어",  "리치", "리치"]
    
                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + rich[i] + "입니다.");
                  }
                }
            
            else if( fruits[random_fruits] === "잭푸르트") {
                var jack = ["잭푸르트", "잭푸르트", "잭푸르트", "라이어", "잭푸르트", "라이어", "잭푸르트", "라이어",  "잭푸르트", "잭푸르트"]

                for (var i = 0; i < 10; i++) {
                    alert("제시어를 확인하세요.");
                    alert(i+1 + "번째 당신은 " + jack[i] + "입니다.");
                  }
            }
        }
}