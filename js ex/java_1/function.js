//함수작성
//함수는 한번에 한 작업만 하는게 좋다
//읽기 쉽고 어떤 동작인지 알수있게 네이밍 
//ex) showerror : 에러를 보여줌, getname : 이름을 얻어옴, createuserdata : 유저데이터생성 이런식으로 이름을 알기쉽게 짖는게 좋다.
//매개변수가 없는 함수
/*function showerror(){
  alert('에러발생')
}
showerror(); */

//매개변수가 있는 함수
function sayhello(name){ //매게변수는 name으로 입력
    const msg = `hello, ${name}`; // `랑' 헷갈리지 말기 msg변수에 hello +Name 입력
    console.log(msg); //msg변수를 출력
}
sayhello('mike'); //매게변수 name통해 msg를 출력할 때 hello, mike가 출력이 된다
sayhello('jon'); // 마찬가ㅣㅈ로 jon이 출력이 된다. 한마디로 name하고 연결이 되어있다.

//sayhello(); 만약 사용자 이름을 모를 경우
function sayname(name){ //hello만 뜨는 이유는 여기서 undefiend가 나오기 때문이다.
    let msf = `hello`; // let으로 바꾼 이유는 값이 달라질수도 있기 때문,let은 지역변수라서
                        // 함수 안에서만 let이 사용가능하다.
    if(name){         // if undefiend는 false라서 if문에 들어가지 못한다.
        //msf = `hello, ${name}`; 
        // msf += name == msg에 name을 더해서 다시 msg에 넣어준다
        //msf +=name; //이렇게 하면 띄어쓰기가 안됨.
        msf +=', ' + name; //이런식으로 뛰어쓰기 하는게 좋다

    }
    console.log(msf)
}
sayname();
sayname('meek');

let msa='hello'; //전역변수 어디서든 쓸수있음
console.log('함수 호출 전');
console.log(msa); //함수 호출 전에는 hello만 나온다

function sayna(name){ 
    if(name){
        msa +=', '+name; //msa함수에 hello, meek를 더한다
        //지역변수 함수내부에서만 가능함
    }
    console.log('함수 내부');
    console.log(msa); //함수 내부에서 출력값은 hello, meek가 나온다.
}
sayna('meek'); //name에 매개변수 입력
console.log('함수 출력 후');
console.log(msa); //함수 출력 후에도 마찬가지로 hello, meek가 나온다

//전역변수와 지역변수는 서로 같은 이름을 써도 되고 간섭을 받지않는다.
//or 함수 이용하기
function sayhi(name){
    let newname = (name ||'friend'); //매개변수에 입력값이 없으므로 flase인데 or함수를 이용해서 뒤에있는 friend가 나온다.
    let msz= 'hello, '+newname;
    console.log(msz); 
}
sayhi(); //그래서 매개변수에 입력값을 입력하지 않으면 friend가 출력된다.
sayhi('jae'); //이름을 입력하면 이름이 출력된다.

//default value
function sayho(name='friend'){ //default 는 name에 값이 없을 때 default값이 출력이 된다.
    let msc='hello, ' + name; 
    console.log(msc);
}
sayho(); // 값이 없으므로 default 값인 friend가 출력
sayho('jong');

//reutrn 으로 값 반환
function add(num1, num2){ 
    return num1 + num2; //더한값은 반횐되며 반환된 값은 resuls로 들어간다.
} // return은 함수를 반환하고 즉시 종료해서 함수를 종료하는 목적으로도 사용한다.
const resuls = add(2,4); // return에서 -를 하면 -2가 나온다.
console.log(resuls);