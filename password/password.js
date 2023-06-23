// 게임 시작 전 카운트다운 3,2,1,start
//let stringArr = ["3","2","1","START"];
//let selectString = stringArr[Math.random() * stringArr.length];

// random1,2,3,4 랜덤 0~9 정수 추출
const $random1 = document.querySelector('#random1');
const $random2 = document.querySelector('#random2');
const $random3 = document.querySelector('#random3');
const $random4 = document.querySelector('#random4');
const randomNum1 = Math.floor(Math.random() * 10);
const randomNum2 = Math.floor(Math.random() * 10);
const randomNum3 = Math.floor(Math.random() * 10);
const randomNum4 = Math.floor(Math.random() * 10);

$random1.append(randomNum1, document.createElement('br'));
$random2.append(randomNum2, document.createElement('br'));
$random3.append(randomNum3, document.createElement('br'));
$random4.append(randomNum4, document.createElement('br'));

function game() {
    var num1 = document.getElementById("random1").value;
    if (num1 == "") {
        document.getElementById("random1").style.backgroundColor="red";
    }
    else if (num1 == blockNum1) {
        document.getElementById("random1").style.backgroundColor="green";
    }
    else {
        if (ran > num1) {
            // 위 화살표 이미지 
			<input type="file" src></input>
        }
        else {
            // 아래화살표
        }
    }
}

// focus가 다음 input 박스로 자동 이동
$("#random1").on("keyup",function(){
    
	if(this.value.length == 1){
		$("#random2").focus();
	}	
});
