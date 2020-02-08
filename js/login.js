// 1. id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요.
// - 원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!

let idA = document.querySelector('.ID');
let pwA = document.querySelector('.PW');
let button = document.querySelector('.btn');


pwA.addEventListener('keydown',function(){
let idB = idA.value.length; //1이상
let pwB = pwA.value.length;  // 1이상


    if(idB > 0 && pwB > -1){
        button.style.backgroundColor = '#5197e9';
    }
})


// idA.addEventListener('keyup'function(){
//     if(pwB < -1 || idB < -1 ){
//         button.style.backgroundColor = '#c5e1fa';
//     }

// })
    
