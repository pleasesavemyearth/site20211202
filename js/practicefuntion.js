var acc = document.getElementsByClassName("accordion"); //클래스 이름을 통해 요소들을 가져와라
console.log(acc); //콘솔 창에서 돌아가는거 확인가능
var i;

for ( i = 0 ; i < acc.length ; i++ ) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active"); //active라고하는 클래스가 있으면 제거, 없으면 추가

        var panel = this.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }


    }); //클릭이라느 이벤트에 대해 이런함수를 추가하라
}

