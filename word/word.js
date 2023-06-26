function start()
{   
    // 3초 타이머
    var time = 3;
    var sec="";
      
    //setInterval(함수, 시간) : 주기적인 실행
    var timer = setInterval( function() {
        sec = time;
        
        document.getElementById("sec").innerHTML = sec;
        time--;
        
        //타임아웃 
        if (time < 0) {
            clearInterval(timer); // setInterval() 실행 끝
            // 다시 랜덤 추출
        }
    }, 700 );
    
    // 네글자 단어 랜덤 추출
    var words = ["죽 마 O O", "고 등 O O", "아 프 O O", "스 나 O O", 
    "도 라 O O", "딸 기 O O", "모 래 O O", "바 람 O O", "블 루 O O", 
    "아 이 O O", "중 간 O O", "기 말 O O", "인 피 O O", "데 이 O O", 
    "초 코 O O", "사 제 O O", "신 서 O O", "카 푸 O O", "포 스 O O",
    "양 념 O O", "전 신 O O", "비 트 O O", "방 방 O O", "도 원 O O",
    "스 파 O O", "대 한 O O", "누 네 O O", "어 장 O O", "버 터 O O",
    "업 데 O O", "카 페 O O", "붉 은 O O", "소 녀 O O", "스 타 O O",
    "백 설 O O", "요 구 O O", "파 인 O O", "오 토 O O", "사 자 O O",
    "비 밀 O O", "계 좌 O O", "우 리 O O", "생 년 O O", "알 레 O O",
    "종 이 O O", "주 의 O O", "삼 각 O O", "미 끄 O O", "호 랑 O O",
    "뭉 게 O O", "샌 드 O O", "탄 수 O O", "하 모 O O", "신 용 O O",
    "하 드 O O", "아 카 O O", "롯 데 O O", "플 라 O O", "맘 스 O O",
    "허 리 O O", "인 어 O O", "마 요 O O", "오 버 O O", "겨 울 O O"];

    var word = document.getElementById("word");
    var random_words = Math.floor(Math.random() * words.length); // 랜덤 정수 추출
        
    word.innerHTML = words[random_words];
    
    document.getElementById("start").innerHTML = "다음문제";

}