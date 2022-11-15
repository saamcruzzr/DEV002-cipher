
 const cipher = {
 
  encode:function (offset, string) {

   
    let resultado = "";
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    offset = (offset % 26 + 26) % 26;      

    if (string) {
        for (let i = 0; i < string.length; i++) {
            if (abc.indexOf(string[i]) != -1) {
                let posicion = ((abc.indexOf(string[i]) + offset) % 26);
                resultado += abc[posicion];
            }

            else{
                resultado += string[i];}
        }
    }
    return resultado;
  },

  decode:function (offset, string) {
  
 
    let resultado = "";
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    offset = (offset % 26 - 26) % 26;      

    if (string) {
        for (let i = 0; i < string.length; i++) {
            if (abc.indexOf(string[i]) != -1) {
                let posicion = ((abc.indexOf(string[i]) - offset) % 26);
                resultado += abc[posicion];
            }

            else{
                resultado += string[i];}
        }
    }
    return resultado;
  },
}
export default cipher;

