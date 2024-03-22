/*
Data Types

여섯개의 Primitive Type과
한개의 오브젝트 타입이 있다.
Primitive Type
1) Number (숫자)
2) String (문자열)
3) Boolean (불리언) 참, 거짓
4) undefiend (언디파인드) 정의가 되지 않은 타입
5) Null (널) 
6) Symbol (심볼)

Object Type
7) Object (객체)
    Function
    Array
    Object
*/
// Number Type
const age = 32;
const tempature = -10;
const pi = 3.14;
console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

console.log('------------');

// String Type
const codeFactory = '"코"드팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

/* Template Literal

Escaping Character
1) newLine - \n 엔터역활임
2) tap - \t
3) 백슬레시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
*/

const iveYujin = '아이브\n안유진';
console.log(iveYujin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);
console.log('----------------');

// boolean Type
const isTrue = true;
const isFalse = false;
console.log(typeof isFalse);
console.log(typeof isTrue);

/* Undefined
사용자가 직접 값을 초기화 하지 않았을 때 
지정되는 값이다. 

직접 Undefined로 값을 초기화하는건 지양해야한다.
*/
let noInit;
console.log(noInit);
console.log(typeof noInit);

/* Null
Undefined 랑 마찬가지로 값이 없다는 뜻이나
JS에서는 개발자가 명시적으로 없는 값으로 초기화 할때
사용된다.
*/
let init = null;
console.log(init);
console.log(typeof init); // object로 나오는 이유는 버그 때문에
console.log('---------');

/* symbol type
유일무이한 값을 생성할 때 사용된다,
다른 프리미티브 값들과 다르게 symbol 함수를 
호출해서 사용한다.
*/
const test1= '1';
const test2= '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);

/* object type

map
키:벨류의 쌍으로 이루어져있다.
key : value
*/
const dictionary = {
    red : '빨간색',
    orange : '주항색',
    yellow : '노란색',
}
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/* arry type
값을 리스트로 나열할수 있는 타입이다.
*/
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '원영',
    '리즈',
    '이서',
];
console.log(iveMembersArray);

/* 
index 
0부터 시작해서 1씩 올라감
*/

console.log( iveMembersArray[5]);

iveMembersArray[0] = '코드';
console.log(iveMembersArray[0]);
console.log(typeof iveMembersArray);

/*
static typing - 변수를 선언 할때 어떤타입의 변수를 선언할지 명시를 한다.
dynamic typing - 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론" 한다.
JS - dynamic typing 

