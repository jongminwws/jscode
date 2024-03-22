//method : 객체 프로퍼티로 활당 된 함수
const superman = {
    name : 'jang',
    age :23,
    fly : 's'
}
console.log(superman);

//화살표 함수는 일반 함수와 달리 자신만의 this를 가지지않음.
// 화살표 함수 내부에서 this를 사용하면 ,그 this는 외부에서 값을 가져옴.

let boy ={
    name : 'mike',
    showname: function(){
        //console.log(boy.name);
        console.log(this.name); /* method에 this는 해당 객체를 가르키기 때문에
        객체 밖에 있는 boy=null은 입력이 되지 않는다, */
        //method에서는 객체 명을 써주는 것보다 this를 활용하는것이 더 좋다.
    }
}
let man =boy; // 이름은 마이크 그래도이지만 별명이 2개인 셈이다.
//man.name = 'tom' //이름을 톰으로 바꾸면 출력 값이 톰으로 나온다,

//console.log(man.name);
boy = null; // boy는 Null값이 들어왔기 때문에 mike한테 접근할수 없다.
man.showname(); // boy의 값이 null이기 때문에 동작할수가 없다. 
//이럴 때 this를 사용한다. 18번 줄

let bou = {
    name :'mee',
    saythis : () => {  // 화살표 함수에서 this는 bou를 가르키는게 아니라 윈도우 전역개체를 가르키게 된다.
        //그래서 객체의 매소드 함수를 작성할 때는 화살표는 비추천한다.
        console.log(this);
    }
}
bou.saythis();