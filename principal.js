


function convertir(){
    var ascii_code = "";
    var lmaquina = "";
    var y = document.getElementById('texto').value;
    

    for(let i = 0; i<y.length;i++){
        ascii_code = y.codePointAt(i)+" "+ascii_code;
            lmaquina ="0"+ y.charCodeAt(i).toString(2)+" "+lmaquina;       
    } 

    document.getElementById('resultado').value = ascii_code;
    document.getElementById('resultado_lm').value = lmaquina;
}



