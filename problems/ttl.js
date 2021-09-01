//taggedTemplateLiterals 테스트

// const name = '보석이';
// const age = 7;


// function test(string, ...etc){

//     console.log('string',string);
//     console.log('name',name);
//     console.log('age',age);
// }


// test`우리강아지의 이름은 ${name}이고, 나이는 ${age}살 입니다.`


// const red = '빨간색';
// const blue = '파란색';
// function favoriteColors(texts, ...values) {
//    return texts.reduce((result, text, i) => `${result}${text}${values[i] ? `<b>${values[i]}</b>`: ''}`, '');
   
// }
// let a = favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`
// console.log(a)


// const red = '빨간색';
// const blue = '파란색';
// function favoriteColors(texts, ...values) {

// // console.log(texts)

// // return texts.reduce((result, text, i) => `${result}${text}${values[i] ? `<b>${values[i]}</b>`: ''}`, '');

// let result = '';

// texts.map((t,i) => {
//     result += t;
//     (values[i]) ? (result += `<b>${values[i]}</b>`) : (result += '')    
// })

// return result



// }
// let a = favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`
// console.log(a)

function sample(texts,...fns){

    const mockProps = {
        title: '안녕하세요',
        body: '내용은 블라블라 입니다.'
    };

    return texts.reduce((result, t, i)=> `${result}${text}${fns[i] ? fns[i] : ''}`,'');
}

sample`
제목 : ${props => props.title}
내용 : ${props => props.body}
`

