function start()
{   
    // 3초 타이머
    var time = 3;
    var sec="";

    // countdown.mp3 재생
    var audio1 = new Audio("../audio/countdown.mp3");
    audio1.loop = false; // 반복재생하지 않음
    audio1.volume = 0.5; // 음량 설정
    audio1.play(); // sound1.mp3 재생
      
    // 네글자 단어 랜덤 추출 현재 64개
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
    
    
    //setInterval(함수, 시간) : 주기적인 실행
    var timer = setInterval( function() {
        sec = time;
        
        document.getElementById("leftTime").innerHTML = "남은 시간";
        document.getElementById("sec").innerHTML = sec;
        time--;

        var result = ["죽 마 고 우", "고 등 학 생", "아 프 리 카", "스 나 이 퍼", 

        "도 라 에 몽", "딸 기 우 유", "모 래 시 계, 모 래 사 장", "바 람 개 비, 바 람 둥 이", "블 루 오 션, 블 루 투 스", 
        "아 이 크 림, 아 이 패 드", "중 간 고 사", "기 말 고 사", "인 피 니 트", "데 이 식 스", 
        
        "초 코 우 유, 초 코 에 몽", "사 제 동 행, 사 제 지 간", "신 서 유 기", "카 푸 치 노", "포 스 트 잇",
        "양 념 치 킨", "전 신 거 울", "비 트 박 스", "방 방 곡 곡", "도 원 결 의",
    
        "스 파 게 티", "대 한 민 국", "누 네 띠 네", "어 장 관 리", "버 터 맥 주, 버 터 쿠 키",
        "업 데 이 트", "카 페 라 떼", "붉 은 노 을", "소 녀 시 대", "스 타 워 즈",
    
        "백 설 공 주", "요 구 르 트", "파 인 애 플", "오 토 바 이", "사 자 성 어",
        "비 밀 번 호", "계 좌 이 체", "우 리 은 행, 우 리 나 라", "생 년 월 일", "알 레 르 기",
    
        "종 이 접 기", "주 의 사 항", "삼 각 김 밥", "미 끄 럼 틀", "호 랑 나 비",
        "뭉 게 구 름", "샌 드 위 치", "탄 수 화 물", "하 모 니 카", "신 용 카 드",
    
        "하 드 웨 어", "아 카 시 아", "롯 데 마 트", "플 라 밍 고, 플 라 토 닉", "맘 스 터 치",
        "허 리 케 인", "인 어 공 주", "마 요 네 즈", "오 버 워 치", "겨 울 방 학"]

        //타임아웃 
        if (time < 0) {
            clearInterval(timer); // setInterval() 실행 끝
            document.getElementById("leftTime").innerHTML = "정답";
            document.getElementById("sec").innerHTML = result[random_words];
            audio1.pause();
            // 다시 랜덤 추출
        }
    }, 700 );
    
    

}