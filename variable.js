const name = "Dasol"; // 되도록 const를 사용하여 안전성을 추구

name = "Minjeong"; // var로 선언하면 에러가 나지 않지만 값이 변한 걸 모름

const person = {
    name: "Kim"
}

// person = true; // ERROR
person.name = "Park";

let name2 = "Dasol";
name2 = "Minjeong"; // 변수를 덮어써야하는 상황이 있을 때만 let 사용, 그렇지 않다면 항상 const 사용 권장


var myname = "Dasol";
console.log(myname);

console.log(myname); // 순서를 바꾸면 undefined 출력
var myname = "Dasol"; // 자바스크립트는 위에서 아래로 실행, 이 줄마저 없으면 에러 발생

// 무조건 위에서 아래로 진행되는 게 아님
// Hoistong
var myname;
console.log(myname);
myname = "Dasol";
// 자바스크립트 내부 동작 원리
// 프로그램이 실행되면 var을 맨 위로 올려줌
// ★실제로는 에러를 내야하므로 let으로 바꾸어 해결
// Temporal Dead Zone of 'let'
console.log(myname);
let myname = "Dasol"; // myname 정의되지 않았다고 에러 발생, 호이스팅 발생하지 않음
// Don't use 'var'