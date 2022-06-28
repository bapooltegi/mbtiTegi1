const main = document.querySelector("#main");
const qna = document.querySelector("#qna");


//답변버튼 추가하는 함수
function addAnswer(answerText, qIdx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button')
  answer.classList.add('answerList'); //answer버튼에 answerList 클래스를 추가함.classList의 메소드 .add 클래스추가
  a.appendChild(answer); //.answerBox에 answer 클래스 버튼들을 자식으로 넣음.

  answer.innerHTML = answerText;
  answer.addEventListener('click',function(){
    var children = document.querySelectorAll('.answerList'); //answerList클래스를 가진 모든 놈들을 children 변수에 추가
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.display = 'none';
    }
    goNext(++qIdx); //답변 버튼을 클릭하면 기존 칠드런들을 다 없애고 goNext(qIdx값을 늘려서) 실행해서 다음 문항이 오게 만듬.
  }, false);

}



//다음으로 넘어갈때 나오는 함수 -> 문제를 불러오고, 반복문으로 addAnswer()호출해서 버튼을 만듬.
function goNext(qIdx){
  var q = document.querySelector(".qbox");
  q.innerHTML = qnaList[qIdx].q; //qnaList[0]번째에 있는 q를 불러와서 HTML텍스트를 붙힘.

  for(let i in qnaList[qIdx].a){
    // qnaList[qIdx]의 a 만큼 반복시킴.
    addAnswer(qnaList[qIdx].a[i].answer,qIdx);
  }
}



//시작버튼 눌렀을때 실행하는 함수. goNext()로 문제를 만듬.
function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s"
  setTimeout(()=>{
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s"
    setTimeout(()=>{
      main.style.display = "none";
      qna.style.display ="flex";
    },450)
    let qIdx = 0;
    goNext(qIdx);
  },450);


}
