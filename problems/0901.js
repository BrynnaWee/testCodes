// function solution(arr) {

//     let init = 1;    
    
//     for(i=0; i<arr.length; i++){
        
//         let a = arr[i];
//         let b = arr[i+1];
        
    
//     for(k=2; k<=Math.min(arr[i],arr[i+1]); k++){

//         let a = arr[i];
//         let b = arr[i+1];
    
//         while((a%k==0)&&(b%k==0)){        
        
//             a = Math.floor(a/k);
//             b = Math.floor(b/k);

//             init = init * k;
//             continue;   
//         }

//         init = init * a * b;
//       }
        
//     }
// return init;
// }

// console.log(solution([2,6,8,14]));

function solution(arr){

    let init = 1;

    for(i=0; i<arr.length; i++){
        
        let a = arr[i];
        let b = arr[i+1];

        for(k=2; k<=Math.min(a,b); k++){
            while( (a%k==0) && (b%k==0) ){
                a = Math.floor(a/k);
                b= Math.floor(b/k);
                init = init*k;
                continue;
            } 
            init = init*a*b;           
        }
    }
    return init;
}