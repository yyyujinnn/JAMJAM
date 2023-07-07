
$(document).ready(function() {
// 게임시작 버튼 클릭 이벤트
$("#btn").click(function() {
    // 게임영역 초기화
    $("#gameArea").empty();
    
    // 정답카운트 초기화
    $("#resultCount").val("0");

    // 랜덤난수 부여
    var randomNumber = Math.floor(Math.random() * 101);
    $("#randomNumber").val(randomNumber);

    // 게임 영역 생성
    $("#gameArea").append("<p><br>0 ~ 100 중 숫자를 랜덤 생성했습니다.</p>");
    $("#gameArea").append("<p>숫자를 입력하여 맞춰보세요.</p>");
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
    $("#gameArea").append("<p>정답은 " + randomValue + '입니다.<br> "' + resultCount + '번"만에 정답을 맞췄습니다.</p>'); 
    document.getElementById("btn").innerHTML = "다시 시작";            
} 
// 오답(작은 수 입력)
else if (Number(randomValue) > Number(txtAnswer)) {
    // 정답 입력칸 비우기
    $("#txtAnswer").val('');
    // 시도횟수 카운트
    resultCount = Number(resultCount) + 1;
    $("#resultCount").val(String(resultCount));
    $("#gameArea").append("<p>정답은 " + txtAnswer + "보다 " +  "<span style = color:red>큰 수 </span>" + "입니다.</p>");   
} 
// 오답(큰 수 입력)
else if (Number(randomValue) < Number(txtAnswer)) {
    // 정답 입력칸 비우기
    $("#txtAnswer").val('');
    // 시도횟수 카운트
    resultCount = Number(resultCount) + 1;
    $("#resultCount").val(String(resultCount));
    $("#gameArea").append("<p>정답은 " + txtAnswer + '보다 ' + "<span style = color:blue>작은 수 </span>" + "입니다.</p>");  
}
}
