function start()
{   
    // 네글자 단어 랜덤 추출
    var words = ["죽 마 O O", "고 등 O O", "아 프 O O", "스 나 O O"];

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