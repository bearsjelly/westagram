// # 메인 페이지
// 1. 댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록
// - createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.


// const commentA = document.querySelector('.com_txt');
// commentA.addEventListener('keyup',function(){
//     const commentB = commentA.value;

// console.log(commentB);
// })

const commentA = document.querySelector('.com_txt');
const btn = document.querySelector('.btn');




commentA.addEventListener('keydown',a);//댓글입력하면 게시버튼 색상바뀌기
btn.addEventListener('click',b);
commentA.addEventListener('keydown', c);


function a(){
    //키 입력하면 버튼 색상바뀌기
    const commentC = commentA.value.length;
    const btnColor = document.querySelector('.btn');
    if(commentC>=0){
        btnColor.style.color = '#5197e9';
    }
    
}
function b(){
    const commentB = commentA.value;
    const tagDiv = document.querySelector('.com_txt_block');
    const tagP = document.createElement('p');
    const tagSpan = document.createElement('span');


    tagSpan.innerText = "jelly_je2";
    console.log(tagSpan);
    tagP.innerHTML=commentB;
    tagP.prepend(tagSpan);
    tagDiv.appendChild(tagP);
    console.log(tagDiv);
    commentA.value = "";
}
function c(){
    if(event.keyCode == 13){
    // const commentB = commentA.value;
    // const tagDiv = document.querySelector('.com_txt_block');
    // const tagP = document.createElement('p');
    // const tagSpan = document.createElement('span');


    // tagSpan.innerText = "jelly_je2";
    // console.log(tagSpan);
    // tagP.innerHTML=commentB;
    // tagP.prepend(tagSpan);
    // tagDiv.appendChild(tagP);
    // console.log(tagDiv);
    // commentA.value = "";
    b();
    }
    
}
