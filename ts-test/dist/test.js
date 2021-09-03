"use strict";
// interface CraftBeer {
//     beerName: string;
//     nameBeer(beer: string): void;
// }
// class myBeer implements CraftBeer {
//     beerName: string = 'baby cass';
//     nameBeer(b: string){
//         this.beerName = b;
//     }
//     constructor(){}
// }
// interface Person {
//     name: string;
// }
// interface Developer extends Person {
//     skill: string;
// }
// let fe = {} as Developer;
// fe.name = 'sj';
// fe.skill = 'TypeScript';
// console.log(fe);
// interface Person{
//     name: string;
// }
// interface Drinker{
//     drink: string;
// }
// interface Developer extends Person, Drinker{
//     skill: string;
// }
// let fe2 = {} as Developer;
// fe2.name = 'ss';
// fe2.skill = 'ts';
// fe2.drink = 'beer';
// console.log(fe2);
// enum LogLevel {
//     ERROR, WARN, INFO, DEBUG
// }
// type LogLevelString = keyof typeof LogLevel;
// function printImpotant(key: LogLevelString, message: string){
//     const num = LogLevel[key];
//     if(num <= LogLevel.WARN){
//         console.log('Log level key is : ', key);
//         console.log('Log level value is : ', num);
//         console.log('Log level message is : ', message);     
//     }
//     console.log('no');     
// }
// // printImpotant('ERROR', 'This is a message');
// printImpotant('DEBUG', 'This is a message');
// function getAge(age: number | string) {
//     if (typeof age === 'number') {
//       age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
//       return age;
//     }
//     if (typeof age === 'string') {
//       return age;
//     }
//     return new TypeError('age must be number or string');
//   }
// class Developer {
//     readonly name: string;
//     constructor(theName: string){
//         this.name = theName;
//     }
// }
// let sj = new Developer('sj');
// class Developer2 {
//     constructor(readonly name: string){
//     }
// }
// let sj = new Developer2('sj');
// console.log(sj.name);
// // sj.name='mg'; //error발생
// interface LengthWise{
//     length: number;
//     // value: string;
// }
// function logText<T extends LengthWise>(text: T): T{
//     console.log(text.length);
//     return text;
// }
// let test = logText({length: 10, value: 'hi'});
// console.log(test);
//타입연습
var count = 0;
count += 1;
// count = "아하하하하";
var message = 'hello world';
var done = true;
var number = [1, 2, 3];
var messages = ['hello', 'world'];
// messages.push(1);
var mightBeUndefined = undefined;
var nullableNumber = null;
var color = 'red';
color = 'yellow';
// color = 'green';
