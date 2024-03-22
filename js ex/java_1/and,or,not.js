//or
//이름이 톰이거나, 성인이면 통과 하나면 맞아도 통과 됨

const name='mike'; //이름을 마이크로 지정
const age=30; //나이는 30

if(name ==='tom'|| age===11){ // or함수 이름이 톰이거나 나이가 11살이면 통과
    console.log("통과"); 
}else {                       // if문에서 다른 값이 나올 때 else를 써야 함
    console.log("불통과");      // 이름이 마이크고 나이가 30살이라서 불통과가 출력됨
}

//and
//이름이 mike , 성인이면 통과 둘다 맞아야 통과 됨

const namee='jang';
const agee=26;

if (namee ==='mike' && agee > 20){ // 이름이 마이크이고 , 나이가 20살 이상이어야 한다.
    console.log("통과");
} else {
    console.log("불통과"); //나이는 통과지만 이름이 달라서 불통과
}

//not
//성인이 아니면 돌아가

//const agz= prompt("나이가?");  나이를 물어보는 창을 띄움
//const isAdult = agz > 19;      변수에 agz는 19살 보다 많다라고 값을 입력함
//if(!isAdult){                 not 함수를 이용해서 간편하게 작성 
//    console.log("돌아가");     19살 보다 낮으면 돌아가 라는 문구가 뜸
//} else {
//    console.log("어서오세요");  19살 보다 많으면 어서오세요 라는 문구가 뜸
//}

//우선순위
//남자이고 , 이름이 mike 이거나 성인이면 통과
const gender= 'm'; //성별은 m
const named='jong'; //이름은 종
const isAdulte = true; //isadulte는 참으로 설정 우선순위를 보기 위함

//if(gender === 'm' && named ==='mike' || isAdulte) {
if(gender === 'm' && (named ==='mike' || isAdulte)) { // and가 *라서 and먼저 검사를 함
    console.log("통과"); // 만약 성별이 여자 였으면 다른것이  일치해도 false가 나옴
}else {
    console.log("돌아가"); //수학에서 우선순위로 문제 푸는것 과 동일
}