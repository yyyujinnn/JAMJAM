function start() {

// 밸런스 문장 랜덤 추출
var list1 = ["카레 맛 똥", "빚 100억 차은우","먹어도 살 안찜", "평생 친구 한 명도 없이 살기",
             "평생 라면 X", "에어컨 없는 여름", "10년 전으로 타임머신", "평생 기어다니기",
             "혼자 뷔페가기", "일 년 동안 스마트폰 없이 살기", "언제 죽는지 알기", "100원짜리 동전으로 300만원 받기",
             "나 혼자 1억 받기", "문화시설 가깝지만 시끄러운 도심", "싸가지 없는데 일 잘하는 후배(갱생불가)" , 
             "순간이동 초능력자", "평생 한식만 먹기", "제주도 한 달 살기", "싸울 때 우는 애인", "먹는 위주의 여행",
             "단체 톡방에서 구구절절 고백받기", "평생 택시비 무료", "사람 많은 대중교통 출퇴근 30분", "1년에 2번 가까운 해외여행 (여행일수 같음)",
             "술 필수 회식", "길거리에서 노래부르기", "꿈에 그리던 이상형", "500만원으로 10개국 여행하기", "하루종일 코막힘",
             "5일 내내 관광지 여행", "왕복 4시간 환승 3번 통학"            
            ];

var list2 = ["똥 맛 카레", "재산 100억 윤석열", "평생 식비 안내도 됨", "평생 친구랑 24시간 붙어 살기",
             "평생 탄산 X","전기장판 없는 겨울", "10년 후로 타임머신", "평생 뒤로 걷기",
             "혼자 놀이공원 가기", "일 년 동안 친구 없이 살기", "죽는 이유 알기", "5만원짜리 지폐로 200만원 받기",
             "나 5억받고 제일 싫어하는 사람이 20억 받기", "편의점도 좀 멀지만 아늑한 마을", "정말 착한데 일 못하는 후배 (갱생불가)",
             "시간여행 초능력자", "평생 한식만 금지", "일본 한 달 살기", "싸울 때 연락 안되는 애인", "관광 위주의 여행",
             "수많은 인파 속 공개 고백 받기", "평생 배달비 무료", "사람 없는 대중교통 출퇴근 90분", "1년에 1번 유럽여행 (여행일수 같음)",
             "밤샘 야근", "길거리에서 춤추기", "누가봐도 예쁜(잘생긴) 사람", "500만원으로 한 나라 여행하기", "하루종일 재채기",
             "5일 내내 호캉스", "바퀴벌레 나오는 학교 앞 자취방"            
            ];

var balance = document.getElementById("balance");
var random_list = Math.floor(Math.random() * list1.length); // 랜덤 정수 추출
    
balance1.innerHTML = list1[random_list];
balance2.innerHTML = list2[random_list];

document.getElementById("start").innerHTML = "다음";
}