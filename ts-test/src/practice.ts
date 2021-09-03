// function sum(x:number, y:number):number {
//     return x+y;
// }

// console.log( sum(1,2) )


// function sumArray(numbers:number[]):number{
//     return numbers.reduce((acc,current)=> acc+current,0);
// }

// const total = sumArray([1,2,3,4,5]);
// console.log(total)




// function returnNothing():void{
//     console.log('아무것도 반환하고 싶지 않은 함수는 리턴타입을 void로 설정해준다.')
// }

// function returnNothing2(): void {
//     console.log('I am just saying hello world');
//   }



// interface Shape {
//     getArea():number;
// }

// class Circle implements Shape {
    
//     radius: number;

//     constructor(radius:number){
//         this.radius = radius;    
//     }

//     getArea(){
//         return this.radius*this.radius*Math.PI;
//     }
// }

// class Rectangle implements Shape{

//     //클래스의 멤버변수선언 & 타입지정
//     width: number;
//     height: number;

//     //생성자 함수 -인스턴스 생성시 넣어줄 매개변수 width,height (위에 선언한 멤버변수와 다름)
//     constructor(width:number, height:number){
//         this.width = width; // 현재 클래스의 프로퍼티 width를 매개변수로 받아온 width로 할당
//         this.height = height;
//     }

//     getArea(){
//         return this.width*this.height;
//     }
// }

// const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];
// //아예 배열의 원소에 인스턴스 생성하는 new연산자 써줌.
// //const shape[0] = new Circle(5) 와 같은 뜻임

// shapes.forEach( s => {
//     console.log(s.getArea());
// })



// //// constructor 의 파라미터 쪽에 public 또는 private accessor 를 사용

// interface Shape{
//     getArea():number;
// }

// class Circle implements Shape {
    
//     constructor(public radius:number){ 
//         //이렇게 constructor함수의 매개변수에 publuc,private접근자를 붙여주면
//         //따로 클래스의 멤버변수를 선언하지 않아도 된다.

//         this.radius = radius;
//     }

//     getArea(){
//         return this.radius*this.radius*Math.PI;
//     }
// }

// class Rectangle implements Shape {
//     // constructor(private width:number, private height:number){
//     constructor(public width:number, public height:number){

//         this.width = width;
//         this.height=height;
//     }

//     getArea(){
//         return this.width * this.height
//     }
// }

// const circle = new Circle(5);
// const rectangle = new Rectangle(10,5);

// console.log(circle.radius);
// console.log(rectangle.width);

// const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];

// shapes.forEach( s => console.log(s.getArea()));

//////////////////////////////////////////////////////////////

// interface Person{
//     name: string,
//     age?: number
// }

// interface Developer extends Person{
//     skils: string[]
// }

// const person: Person ={
//     name:'위보석',
//     age: 7
// };

// const expert: Developer = {
//     name: '김개발',
//     skils: ['js','react']
// };


// const people : Person[] = [person, expert];

// console.log(people);

///////////////////////////////////////////////////////////////////

// type Person = {
//     name: string,
//     age?: number
// }


// type Developer = Person & {
//     skills: string[];
// }

// const person = {
//     name:'위보석'
// }

// const expert: Developer = {
//     name:'위보석',
//     skills: ['js','react']
// }

// type People = Person[]; //Person이라는 배열을, People이라는 타입으로 사용가능
// const people:People = [person, expert];

// type Color = 'red'|'orange'|'yellow';
// const color:Color = 'red';
// const colors: Color[] = ['red','orange'];

///////////////////////////////////////////////////////////////////

// function merge<A, B>(a:A, b:B):A&B {
//     return{
//         ...a,
//         ...b
//     };
// }

// const merged = merge( {foo:1}, {bar:1} );

// console.log(merged);

///////////////////////////////////////////////////////////////////


// function wrap<T>(param: T){
//     return{
//         param
//     }
// }

// const wrapped = wrap(10);
// console.log(wrapped);

///////////////////////////////////////////////////////////////////

// interface Items<T>{
//     list:T[];
// }

// const items: Items<string> = {
//     list: ['a','b','c']
// };

/////////////////////////////////////////////////////////////////////


class Queue<T> {
    list:T[] = [];

    get length(){
        return this.list.length;
    }

    enqueue(item:T){
        this.list.push(item);
    }

    dequeue(){
        return this.list.shift();
    }
}


const queue = new Queue<number>();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());