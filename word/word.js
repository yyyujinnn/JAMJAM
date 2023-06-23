// 게임 시작 전 카운트다운 3,2,1,start

// let stringArr = ["3","2","1","START"];
// let selectString = stringArr[Math.random() * stringArr.length];

let stringArr = ["죽 마 O O", "고 등 O O", "아 프 O O", "스 나 O O"];

function start()
{   
    let selectString = stringArr[Math.random() * stringArr.length];

    var count = document.getElementById('sec');
    var html;
   
    for(count = 5; count > 0; count--)
    {
         count--;
    }

    if(count <= 0)
    {
        html = '<div>종료</div>';
    }

    count.innerHTML = html;
}