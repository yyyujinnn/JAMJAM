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
    
    // 사진 랜덤 추출
    var pictures = ["photo/고윤정.jpg", "photo/남우현.jpg", "photo/이보영.jpg", "photo/지성.jpg", "photo/한지민.jpg",
                    "photo/안보현.jpg", "photo/신혜선.jpg", "photo/부승관.jpg", "photo/백종원.jpg", "photo/이미주.jpg",
                    "photo/유재석.jpg", "photo/이동욱.jpg", "photo/김범.jpg", "photo/조보아.jpg", "photo/김유정.jpg",
                    "photo/여진구.jpg", "photo/아이유.jpg", "photo/이종석.jpg", "photo/김우빈.jpg", "photo/배수지.jpg",
                    "photo/RM(김남준).jpg", "photo/진(김석진).jpg", "photo/슈가(민윤기).jpg", "photo/제이홉(정호석).jpg", "photo/박지민.jpg",
                    "photo/뷔(김태형).jpg", "photo/전정국.jpg", "photo/김성규.jpg", "photo/장동우.jpg", "photo/이성열.jpg",
                    "photo/엘(김명수).jpg", "photo/이성종.jpg", "photo/안유진.jpg", "photo/가을.jpg", "photo/레이.jpg",
                    "photo/장원영.jpg", "photo/리즈.jpg", "photo/이서.jpg", "photo/김채원.jpg", "photo/사쿠라.jpg",
                    "photo/허윤진.jpg", "photo/카즈하.jpg", "photo/홍은채.jpg", "photo/최예나.jpg", "photo/권은비.jpg",
                    "photo/민지.jpg", "photo/하니.jpg", "photo/다니엘.jpg", "photo/해린.jpg", "photo/혜인.jpg"];

    var picture = document.getElementById("picture");
    var random_pictures = Math.floor(Math.random() * pictures.length); // 랜덤 정수 추출
        
    picture.src = pictures[random_pictures];
    
    document.getElementById("start").innerHTML = "다음문제";
      
    //setInterval(함수, 시간) : 주기적인 실행
    var timer = setInterval( function() {
        sec = time;
        document.getElementById("leftTime").innerHTML = "남은 시간";

        document.getElementById("sec").innerHTML = sec;
        time--;
        
        var names = ["고윤정", "남우현", "이보영", "지성", "한지민",
                     "안보현", "신혜선", "부승관", "백종원", "이미주",

                     "유재석", "이동욱", "김범", "조보아", "김유정",
                     "여진구", "아이유(이지은)", "이종석", "김우빈", "배수지",

                     "RM(김남준)", "진(김석진)", "슈가(민윤기)", "제이홉(정호석)", "박지민",
                     "뷔(김태형)", "전정국", "김성규", "장동우", "이성열",

                     "엘(김명수)", "이성종", "안유진", "가을", "레이",
                     "장원영", "리즈", "이서", "김채원", "사쿠라",

                     "허윤진", "카즈하", "홍은채", "최예나", "권은비",
                     "민지", "하니", "다니엘", "해린", "혜인"];

        //타임아웃 
        if (time < 0) {
            clearInterval(timer); // setInterval() 실행 끝
            document.getElementById("leftTime").innerHTML = "정답";
            document.getElementById("sec").innerHTML = names[random_pictures];
            audio1.pause();
            // 다시 랜덤 추출
        }
    }, 700 );   
}

