function start()
{   
    // 네글자 단어 랜덤 추출
    var words = ["죽 마 O O", "고 등 O O", "아 프 O O", "스 나 O O", 
    "도 라 O O", "딸 기 O O", "모 래 O O", "바 람 O O", "블 루 O O", 
    "아 이 O O", "중 간 O O", "기 말 O O", "인 피 O O", "데 이 O O", 
    "초 코 O O", "사 제 O O", "신 서 O O", "카 푸 O O", "포 스 O O",
    "양 념 O O", "전 신 O O" ];

    var word = document.getElementById("word");
    var random_words = Math.floor(Math.random() * words.length); // 랜덤 정수 추출

    word.innerHTML = words[random_words];

    // var sec = 5;
    // var counter = setInterval(timer, 1000);
    // sec--;

    // if(sec <= 0)

    
    // var count = document.getElementById('sec');
    // var html;
   
    // for(count = 5; count > 0; count--)
    // {
    //      count--;
    // }

    // if(count <= 0)
    // {
    //     html = '<div>종료</div>';
    // }

    // count.innerHTML = html;
}