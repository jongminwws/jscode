//한명 한명 모두 변수를 만들 때 헷갈릴수도 있기 때문에 array 배열을 사용하면 편리하다
//array : 순서가 있는 리스트 
//배열은 []로 묶어주고 ,로 구분할수 있다.
//ex) let students['철수','영희',...'맹구'];
//index : 배열의 고유번호 0부터 시작함 console.log(sutdents[0]);으로 하면 철수가 출력이 된다,
//sudents[0] = '민정'; 이렇게 수정도 가능하다. 철수에서 민정으로 바뀐다.
//배열은 문자 뿐만 아니라 숫자, 객체, 함수도 포함된다
let arr =[
    '민수', //문자
    3, //숫자
    false, //boolean
    {
        name : 'mike', //객체
        age : 30,
    },
    function(){  //함수
        console.log('test');
    }
];

//length : 배열의 길이 
//students.length //30

//push :  배열 끝에 추가
//pop : 배열 끝에 요소를 제거
//shift 배열 앞에 제거
//unshift 배열 앞에 추가
let days = ['월','화','수','목','금','토','일']; //days라는 변수에 월화수목금토일 입력
days.push('바보'); //끝에 추가
days.pop(); // 끝에 제거
days.unshift('나는','누구게'); // 앞에 나는,누구게 추가
days.shift(); // 앞에 나는을 제거
console.log(days); // 전체 출력 , 앞에 나는, 누구게 를 추가했으나 shift때문에 나는 제거 그래서 누구게 월화수목금토일이 출력됨

for(let index =0; index < days.length; index++){ //index가 days숫자만큼 증가
    console.log(days[index]); // 위에는 차례대로 가로로 출력이 되었다면 이번에는 새로로 출력이 된다
}

console.log(days[3]); //day에 3번째 자리 출력 누구게 ,월 ,화 ,수 참고로 0부터 시작
console.log(days.length); //글자수 출력

//for of를 이용
for (let day of days){ //day는 배열의 요소라서 아무렇게 작성해도 된다
    console.log(day);
}
