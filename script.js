fetch('https://api.frankfurter.app/currencies')
  .then(res => res.json())
  .then(res => display(res))

var selCountry=document.querySelectorAll('#currency')
let btn=document.getElementById('btn')
let input=document.getElementById('input')
let result=document.getElementById('result')


function display(res){
    //console.log(Object.entries(res)[0])
    let curr=Object.entries(res)
    for(let i=0;i<curr.length;i++){
        let opt=Object.entries(res)[i][0]
        let seloption=`<option value="${opt}">${opt}</option>`
        selCountry[0].innerHTML+=seloption
        selCountry[1].innerHTML+=seloption
    }
}


btn.addEventListener('click',()=>{
    let curr1=selCountry[0].value
    let curr2=selCountry[1].value
    let inputVal=input.value
    if(curr1===curr2)
        alert("choose differend Countries")
    else
        convert(curr1,curr2,inputVal)
})

function convert(curr1,curr2,inputVal){
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
      .then((resp) => resp.json())
      .then((data) => {
        result.value=Object.values(data.rates)[0]
        //`${data.rates.USD} USD`);
      });
}