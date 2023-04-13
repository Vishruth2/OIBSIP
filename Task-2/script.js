var typed = new Typed('.typer', {
    strings: ['Web Developer.','Data Scientist.','AI Engineer.'],
    typeSpeed: 100,
    backSpeed:100,
    loop:true
  });

let valueNumbers = document.querySelectorAll(".exp-number");
let interval=2000;

valueNumbers.forEach((valueNumbers)=>{
    let startValue=0;
    let endValue=parseInt(valueNumbers.getAttribute('data-val'));
    let duration=Math.floor(interval/endValue);
    let counter = setInterval(
        ()=>{
            startValue+=1;
            valueNumbers.textContent=startValue;
            if(startValue==endValue){
                clearInterval(counter);
            }
        }
    )
}

)    