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
    
    // 사진 랜덤 추출
    var pictures = ["photo/고윤정.jpg", "photo/남우현.jpg", "photo/이보영.jpg", "photo/지성.jpg", "photo/한지민.jpg"];

    var picture = document.getElementById("picture");
    var random_pictures = Math.floor(Math.random() * pictures.length); // 랜덤 정수 추출
        
    picture.src = pictures[random_pictures];
    
    document.getElementById("start").innerHTML = "다음문제";

}