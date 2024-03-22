// 함수 표현식: 이름이 없는 함수를 만들고 함수를 활당해줌

//함수 선언문은 어디서든 호출이 가능하다.

//sayhello(); 이렇게 바꿔도 동작이 된다. 호이스팅 덕분에 가능하다
//호이스팅 : 자바스크립트 내부에서 알고리즘으로 함수를 모두 모으기 때문에 실제 코드위치보다 사용 범위가 넓다.
function sayhello(){
    console.log('hello');
}
sayhello();

//함수 표현식 : 코드에 도달하면 생성

let sayhell=function(){  //함수 표현식은 순차적으로 코드를 실행한다,
    console.log('hello');
}
sayhell();

//arrow function 첫번째 예제를 화살표 함수로 바꾸면 이렇게 된다.

/*let sayhelo =()=> {
    console.log('hello');
}*/

/*const sayhel = function(name){
    const msg = 'hello' + name;
    console.log(msg);
}*/

//화살표 함수로 바꾸면 function을 지우고 화살표로 표시만 하면 된다.
const sayhel = (name)=> {
    const msg='hello' + name;
    console.log(msg);
}

//인수가 2개이고 return이 있는경우
/*const add = function(num1, num2){
    const result = num1 + num2 ;
    return result; 
}*/

const add = (num1, num2)=> num1+ num2; 
// return문을 한줄로 바꾸면 이렇게 변경이 가능하다.
//return문이 한줄이기 때문에 간결하게 줄일수 있다.