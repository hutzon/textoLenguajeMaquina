


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



function binary_decode(){
    var s = document.getElementById("texto").value;
    var i = 0, l = s.length, chr, out = '', out_text = '';
    for( ; i < l; i += 8 ){
        chr = parseInt( s.substr( i, 8 ), 2 ).toString( 10 );

        out_text += String.fromCharCode(chr);
        
        console.log(chr);
   
    }

    var nuevaCadena = "";
    for (var i = out_text.length - 1; i >= 0; i--) {
        nuevaCadena += out_text[i];
    }
    
   
    document.getElementById('resultado_b').value = nuevaCadena;

}



