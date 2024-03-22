const name= "mike"; //문자열 string
const age = 19; //숫자형 number

console.log(1+2); //1+2 =3
console.log(2/4); // 2/4 = 0.5
console.log(3*7); // 3*7 = 21
console.log(6%4); // 6%4 = 2


//boolean

const a= '나는'; //참
const b= '입니다'; //거짓

console.log (name=='mike');  //이름이 mike 라서 true
console.log (age > 40);      //현재 나이 19살 40살 보다 많다라서 true
console. log (a+name+b);     // 위에 변수 a= 나는 , name = mike, b= 입니다 ===나는mike입니다
console.log(a+age+'살'+b);   // a=나는 , age = 19 , '살' , 입니다 === 나는 19살 입니다

//alert 알려주는 이벤트 ex) 비밀번호가 틀렸습니다, 메세지를 보여줌
//prompt 입력하는 칸을 만듦 ex) 이메일을 입력하세요 메세지를 보여주고 어떤 값을 입력받을수 있는 필드를 제공한다. 두번째 인수를 넣어주면 디폴트 값을 제공한다.
//confirm 확인을 받기 위한 용도로 사용 alert 랑 다른점은 confirm 은 취소 버튼이 있다.

//const namee = prompt("생일을 입력하세요", "20203-10-");
//alert ("환영합니다 " + namee + "님");

//const isAdult = confirm ("당신은 성인입니까");
//console.log(isAdult);

let num =10; //변수 num을 10으로 지정

//num = num +5;
//num++;
let result = ++num; //다시 result값에 ++num으로 지정 ++num이니깐 +1해서 11이 됨
console.log (result); //result 값을 출력

console.log(10>5);  //5보다 크니깐 true
console.log(10 ==5); //동등연산자 10이랑 5랑 같다 false
console.log(10 !=5); // 10이랑 5랑 같지 않다 true

const ae=1; //ae변수에 1을 지정 1은 숫자
const aw='1'; //aw 변수에 1을 지정 1은 "" 때문에 문자열로 구분됨

console.log(ae==aw); // ==은 데이터 값이 일치하면 true가 나옴
console.log(ae===aw); //일치연산자 ===은 데이터 값하고 자료형이 일치 해야 true가 나옴
// 하지만 여기서는 자료형이 숫자형 하고 문자형이라서 false가 나옴

console.log("hello world");
console.log("hello, world");

