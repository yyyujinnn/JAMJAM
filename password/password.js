// 게임 시작 전 카운트다운 3,2,1,start
//let stringArr = ["3","2","1","START"];
//let selectString = stringArr[Math.random() * stringArr.length];

// focus가 다음 input 박스로 자동 이동
$(function() {
    $(".password").keyup (function () {
        var intLimit = $(this).attr("maxlength");
        if (this.value.length >= intLimit) {
            $(this).next(".password").focus();
            return false;
        }
    });
});