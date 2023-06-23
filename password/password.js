// 게임 시작 전 카운트다운 3,2,1,start
//let stringArr = ["3","2","1","START"];
//let selectString = stringArr[Math.random() * stringArr.length];

// random1,2,3,4 랜덤 0~9 정수 추출
// const $random1 = document.querySelector('#random1');
// const $random2 = document.querySelector('#random2');
// const $random3 = document.querySelector('#random3');
// const $random4 = document.querySelector('#random4');
// const randomNum1 = Math.floor(Math.random() * 10);
// const randomNum2 = Math.floor(Math.random() * 10);
// const randomNum3 = Math.floor(Math.random() * 10);
// const randomNum4 = Math.floor(Math.random() * 10);

// $random1.append(randomNum1, document.createElement('br'));
// $random2.append(randomNum2, document.createElement('br'));
// $random3.append(randomNum3, document.createElement('br'));
// $random4.append(randomNum4, document.createElement('br'));

// function game() {
//     var num1 = document.getElementById("random1").value;
//     if (num1 == "") {
//         document.getElementById("random1").style.backgroundColor="red";
//     }
//     else if (num1 == blockNum1) {
//         document.getElementById("random1").style.backgroundColor="green";
//     }
//     else {
//         if (ran > num1) {
//             // 위 화살표 이미지 
// 			<input type="file" src></input>
//         }
//         else {
//             // 아래화살표
//         }
//     }
// }

$(document).ready(function() {
// 게임시작 버튼 클릭 이벤트
$("#btn").click(function() {
    // 게임영역 초기화
    $("#gameArea").empty();

    // 랜덤난수 부여
    var randomNumber = Math.floor(Math.random() * 101);
    $("#randomNumber").val(randomNumber);

    // 게임 영역 생성
    $("#gameArea").append("<p>1 ~ 100까지 랜덤한 숫자를 생성되었습니다. 숫자를 입력하여 맞춰주세요.</p>");
    $("#gameArea").append("<input type='text' id='txtAnswer'></input>  ");
    $("#gameArea").append("<button id='btnAnswer' onclick='randomAnswerSubmission();'>정답제출</button>");

});
});

// 정답제출 함수
function randomAnswerSubmission() {
var randomValue = $("#randomNumber").val();     // 랜덤난수
var txtAnswer = $("#txtAnswer").val();          // 입력한 정답
var resultCount = $("#resultCount").val();

// 정답
if(randomValue == txtAnswer) {
    $("#gameArea").append("<p>정답은 " + randomValue + "입니다. " + resultCount + "번만에 정답을 맞췄습니다.</p>");                
} 
// 오답(작은 수 입력)
else if (Number(randomValue) > Number(txtAnswer)) {
    resultCount = Number(resultCount) + 1;
    $("#resultCount").val(String(resultCount));
    $("#gameArea").append("<p>정답은 " + txtAnswer + "보다 " +  "<span style = color:red>큰 수 </span>" + "입니다.</p>");   
} 
// 오답(큰 수 입력)
else if (Number(randomValue) < Number(txtAnswer)) {
    resultCount = Number(resultCount) + 1;
    $("#resultCount").val(String(resultCount));
    $("#gameArea").append("<p>정답은 " + txtAnswer + "보다 " + "<span style = color:blue>작은 수 </span>" + "입니다.</p>");  
}
}

// focus가 다음 input 박스로 자동 이동
// $("#random1").on("keyup",function(){
    
// 	if(this.value.length == 1){
// 		$("#random2").focus();
// 	}	
// });
