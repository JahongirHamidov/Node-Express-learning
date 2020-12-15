function insert(num){
    document.getElementById('input').value =document.getElementById('input').value + num
}

function clean(){
    document.form.textView.value = ''
}
function back(){
let back = document.form.textView.value
document.form.textView.value = back.substring(0,back.length-1) 
}

function equal(){
    let exp = document.form.textView.value
    if(exp){
        document.form.textView.value = eval(exp)
    }
}