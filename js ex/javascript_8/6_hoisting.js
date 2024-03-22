/*
Hoisting
*/
console.log('hello');
console.log('world');
console.log('---------');

// console.log(name);
// var name = '코드';
// console.log(name);

/*
Hoisting 은 무엇인가
모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
var , let, const 모두 호이스팅이 발생한다
var는 호이스팅이 발생하는되로 실행이 되지만
let, const는 에러가 난다.

*/

var name;
console.log(name);
name = '코드';
console.log(name);

console.log(yuJin);
let yuJin = '안유진';
