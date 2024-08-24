function BMI (){
    let height = document.getElementById('height').value
   let weight = document.getElementById('weight').value
    
   let bmi = weight/ (height/100)** 2
  let  resultmsg = "your BMI is " + bmi.toFixed(2)


if(bmi<18.5){
    resultmsg = resultmsg + "( underweight)"


}else if(bmi>=18.5  && bmi<25){
resultmsg = resultmsg + "( normal)"

}else if(bmi>=25  && bmi<30){
resultmsg = resultmsg + "( overweight)"

}else if(bmi=>30 && bmi<35){
    resultmsg = resultmsg + "( obese)"
}

else{
    resultmsg = "enter valid weight & height"
}
     document.getElementById('result').innerHTML = resultmsg
}