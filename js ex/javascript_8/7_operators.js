/*
operators
연산자 
*/

/*
산술 연산자
1) 덧셈
2) 뺄셈
3) 곱셈
4) 나눗셈
5) 나머지
*/
console.log(10+10);
console.log(10-5);
console.log(10 * 10);
console.log(10/10);
console.log(10 % 10);
console.log(10 % 3);

console.log('------------');

console.log(10 *(10+10));

/*
증가 와 감소
*/
let number = 1;
number ++;
console.log(number);

number --;
console.log(number);
console.log('----------');
/* 
연산자의 위치
*/
let result =1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result,number);

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result,number);

/*
숫자가 아닌 타입에 +,- 를 사용하면 어떻게 될까?
*/

let sample = '99';
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
//Nan - Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);


/* 
활당 연산자 (assignment operator)
*/

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %=10;
console.log(number);
console.log('----------');

/*
    비교 연산자

1) 값을 비교 ==
2) 값 과 타입의 비교 ===
*/

console.log(5==5);
console.log(5=='5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true =='1');

console.log(5 === 5);
console.log( 5 === '5');
console.log(true === 1);
console.log('-----------');

console.log( 5 != 5); // != 다르다는 뜻
console.log(5 != '5');
console.log(4 !== 5); // !== 타입까지 비교함

console.log('------------');

/*
대소 관계 비교 연산자
*/
console.log( 100 > 5);
console.log( 100 <5);
console.log(100 >= 5);
console.log(100 <= 5);

/*
삼항 조건 연산자 (ternary operator)
*/

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다'); // true를 반한하면 크다가 출력 나오고 false를 반환하면 적다가 출력된다.
console.log('-------------');
/*
논리 연산자
1) and &&
2) or || 
*/
// && 조건은 모두 true여야 true를 반환한다.
console.log( true && true);
console.log( true && false);
console.log( false && false);
console.log('-------------');

// ||는 하나만 true여도 true를 반환한다.
console.log( true || true);
console.log( true || false);
console.log(false || false);

console.log( 10 > 0 && 20 > 30);
console.log(20 >10 && 10 > 4);
console.log(10<20 || 20 > 40);

/*
단축평가 (short circuit evaluation)
&&을 사용했을때 좌측이 true면 우측 값 반환
&&을 사용했을때 좌측이 false면 좌측 값 반환

||를 사용했을때 좌측이 true면 좌측 값 반한
||를 사용했을때 좌측이 false면 우측 값 반환
*/

console.log(false || '아이브');
console.log(true && '아이브');
console.log(false && '아이브');

console.log(true && true && '아이브'); // and일때 true 우측 값 true가 반환 다시 and일때 true라서 우측값 아이브가 반한된다
console.log(true && false && '아이브'); // and일때 true면 우측 값 false가 반환 and일때 false면 좌측 값 fasle가 반환된다

/*
지수연산자
*/
console.log(2 ** 2);//2의2승이라는 뜻
console.log(10 ** 3);

/*
null 연산자
*/
let name;
console.log(name);

name = name ?? '아이브'; // name이라는 변수가 null이거나 undefiend일때 오른쪽 값을 반환하는 뜻
console.log(name);

name= name ?? '아이봉'
console.log(name);

let name2;
name2 ??= '아이붕';
console.log(name2);

