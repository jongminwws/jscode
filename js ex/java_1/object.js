//접근 , 추가, 제거
const superman = {
    name : 'jong', //접근 superman.name , superman[33]
    age:33,        //추가 superman.gender = 'male', superman['haircolor'] = 'black'
                   //삭제 delete superman.haircolor;
}
/*object 단축 프로퍼티
const supermen = {
    jong, // == name : 'jong'
     32, // == age :33
    gender : 'male',
}*/

//프로퍼티 존재 여부확인
//superman.birthday = undefiend
//'birthday' in superman = false
//'age' in superman = true
superman.gender = 'male'; //추가
superman['haircolor'] = 'blue'; //추가
delete superman.haircolor; //제거
console.log(superman);

//함수를 이용해서 객체 만들기

function makeobject (name,age,hobby){ //함수를 이용해서 객체를 만들지만 리턴 값을 이용해서 마이크 객체에 값을 반환한다,
    return{
        name, // 단축 프로젝트 이용하기로 리턴 값 반환으로 mike가 값으로 출력
        age : 30, 
        hobby, //마찬가지로 단축 프로퍼티 이용 하지만 마이크 객체를 만들 때 풋볼이라고 적어야 함
    };
}
const mike = makeobject("mike",30,'football'); //마이크 객체를 생성
console.log(mike); //마이크 객체 값을 출력한다.

console.log('age'in mike); // 마이크 객체에 age가 있는지 
console.log('name' in mike); // 마이크 객체에 name이 있는지 
console.log('nama' in mike); // 있다면 true 없다면 false가 출력

//성인인지 아닌지 함수 이용해서

function isAdult(user){
    if(!('age' in user) || //age가 있다면 true지만 !not을 이용해서 반대로 출력하게 만듬
    user.age < 20) {      // 20살 미만이거나
        return false;
    } else{
        return true;
    }
}

const jang ={
    name : 'jang',
    age : 30,
}

const min ={
    name : 'min',
}

console.log(isAdult(min));

//for in문 예제

const jong = {
    name : 'jong',
    age : 26,
}

for(x in jong){
    //console.log(x); //jong이 가지고 있는 키 값이 출력됨
    console.log(jong[x]); // name['jong']이 뜻이라서 jong이 가지고 있는 키 값들에 값이 출력됨
}
