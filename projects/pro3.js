const form=document.querySelector('form')
///const height=parseInt(document.querySelector('#height').value) /// while we store value of height outside of the for first it will store empty value then again it will be filled
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseFloat(document.querySelector('#height').value)/// direct set value
    const weight=parseFloat(document.querySelector('#weight').value)
    const result=document.querySelector('#result')
    ///const my=typeof(document.querySelector('#height').value) ///test case for checking
    ///myopt.innerHTML=my
    if(height===''|| height<0 || isNaN(height)){
        result.innerHTML="pleae give a valid height "
    }
    else if(weight===''|| weight<0 || isNaN(weight)){
        result.innerHTML="pleae give a valid weight "
    }
    else{
        const bmi=(weight/(height*height/10000)).toFixed(2)
        if(bmi<18.6){
            result.innerHTML=`<span>${bmi} under weight</span>`
        }
        else if(bmi<=24.9 && bmi>=18.6){
            result.innerHTML=`<span>${bmi} normal</span>`
        }
        else{
            result.innerHTML=`<span>${bmi} overweight</span>`
        }
    }
})