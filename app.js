window.addEventListener("DOMContentLoaded", () => obtenerLexemas());
const lexico = document.getElementById("datos");
const sintac = document.getElementById("aSintactico");
let codigo = document.getElementById("codigo");
let cCodigo = document.getElementById("container_codigo");
let lexemas;
let tokens = [];

lexemas=[

  {
      "nombre": "grant",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
    "nombre": "on",
    "tipo": "reservada",
    "codigo":"100"
},
  
  {
      "nombre": "var",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "const",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "let",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "switch",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "case",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "if",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "else",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "for",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "while",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "parseFloat",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "break",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "textContent",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "innerHTML",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "document",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "getElementById",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "return",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "continue",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "try",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "catch",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "console",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "log",
      "tipo": "reservada",
      "codigo":"100"
  },
  {
      "nombre": "0",
      "tipo": "numero",
      "codigo":"102"
  },
  {
      "nombre": "1",
      "tipo": "numero",
      "codigo":"102"
  },
  {
      "nombre": "2",
      "tipo": "numero",
      "codigo":"102"
  },
  {
      "nombre": "3",
      "tipo": "numero",
      "codigo":"102"
  },
  {
      "nombre": "4",
      "tipo": "numero",
      "codigo":"102"
  },
  {
      "nombre": "6",
      "tipo": "numero",
      "codigo":"102"
  },
  {
      "nombre": "7",
      "tipo": "numero",
      "codigo":"102"
  },
  {
      "nombre": "8",
      "tipo": "numero",
      "codigo":"102"
  },
  {
      "nombre": "9",
      "tipo": "numero",
      "codigo":"102"
  },
  {
      "nombre": "(",
      "tipo": "simbolo",
      "codigo":"1"
  },
  {
      "nombre": ")",
      "tipo": "simbolo",
      "codigo":"2"
  },
  {
      "nombre": "{",
      "tipo": "simbolo",
      "codigo":"6"
  },
  {
      "nombre": "=",
      "tipo": "simbolo",
      "codigo":"8"
  },
  {
      "nombre": "==",
      "tipo": "simbolo",
      "codigo":"8"
  },
  {
      "nombre": ">=",
      "tipo": "simbolo",
      "codigo":"8"
  },
  {
      "nombre": "<=",
      "tipo": "simbolo",
      "codigo":"8"
  },
  {
      "nombre": "!=",
      "tipo": "simbolo",
      "codigo":"8"
  },
  {
      "nombre": "!==",
      "tipo": "simbolo",
      "codigo":"8"
  },
  {
      "nombre": ";",
      "tipo": "simbolo",
      "codigo":"5"
  },
  {
      "nombre": ":",
      "tipo": "simbolo",
      "codigo":"4"
  },
  {
      "nombre": "}",
      "tipo": "simbolo",
      "codigo":"7"
  },
  {
      "nombre": ".",
      "tipo": "simbolo",
      "codigo":"3"
  },
  {
      "nombre": "+",
      "tipo": "operador",
      "codigo":"103"
  },
  {
      "nombre": "-",
      "tipo": "operador",
      "codigo":"103"
  },
  {
      "nombre": "*",
      "tipo": "operador",
      "codigo":"103"
  },
  {
      "nombre": "/",
      "tipo": "operador",
      "codigo":"103"
  },
  {
      "nombre": "%",
      "tipo": "operador",
      "codigo":"103"
  },
{
      "nombre": "pudin",
      "tipo": "reservada",
      "codigo":"100"
  }
  
];


/* obteniendo la informacion de la bd y pasandola a una variable local */
// var obtenerLexemas = async () => {
//   try {
//     const rs = await fetch();
//     const data = await rs.json();
//     lexemas = data;
//   } catch (error) {
//     console.log(error);
//   }
// };

/* buscar palabra en lexemas */
function buscar(listaDePalabras) {
  let subTokens =[];
  /* recorrer la lista que nos pasan */
  listaDePalabras.forEach((palabra)=>{
    /* combrobar si la palabra se encuentra en la bd lexemas */
    lexemas.some((item)=> item.nombre == palabra)?
    lexemas.filter((item) => {
      if (item.nombre == palabra) {
        subTokens.push(item);
      }
    })
    /* combrobar si la palabra noencontrada no es un string vacio*/
    : comprobarPalabraNoEncontrada(palabra) !== undefined ?
      subTokens.push(comprobarPalabraNoEncontrada(palabra)):
      console.log('es un estring vacio')
      ;
  });
  tokens.push(subTokens);
  console.log(tokens);
  lexico.innerHTML=``;
  tokens.forEach(item=>{
    lexico.innerHTML+=`
      <tr>
      <td class='linea text-body-1' colspan='3'>
      Linea ${tokens.indexOf(item) + 1}
      </td>
      </tr>`
    item.forEach(item=>{
      lexico.innerHTML+=`
      <tr>
      <td class="text-body-1">
          ${item.nombre}
      </td>
      <td class="text-body-1">
        ${item.tipo}
      </td>
      <td class="text-body-1">
        ${item.codigo}
      </td>
    </tr>`;
    })
  })
}

/*  funcion que compara las palabras no encontradas*/
function comprobarPalabraNoEncontrada(palabra){
/*   console.log('No se encontro',palabra); */
  let temp;
  /* comprueba si no es un string vacio y no es un numero */
  if(palabra !== '' && isNaN(palabra)){
    temp = {
      nombre: palabra,
      tipo: "identidicador",
      codigo: "101"
    }
  /* comprueba si no es un string vacio y si es un numero */
  }else if (palabra !== '' && !isNaN(palabra)){
    temp = {
      nombre: palabra,
      tipo: "numero",
      codigo: "102"
    }
  }
  return temp;
}

/* funcion que divide el texto en bloque de codigo */
function dividirBloque(cadenas){
  let bloques = cadenas.split(';\n')
  console.log(bloques);
  return bloques;
}
/* funcion que separa los casos */
function comprobarCaso(bloques){
  let respuestas = [];
  let respuesta;
  let i=0;
  bloques.forEach(item=>{
        

    item.startsWith('GRANT')?
        item.match(/(GRANT )(SELECT|DELETE|UPDATE|INSERT)( ON TABLE )/gim)?
        respuesta =[i+1,'Compila correctamente la declaración de variable']:
        respuesta =[i+1,`El bloque de codigo ${bloques.indexOf(item)+1} es incorrecta`]


    
        
    :respuesta =[i+1,'no reconozco esta sintaxis']
    respuestas.push(respuesta);
    console.log(respuestas);
    i++;
  })
  sintac.innerHTML=``;
  respuestas.forEach(item=>{
    sintac.innerHTML+=`
    <p class='text-body-1'>
    Bloque de codigo ${item[0]}
    </p>
    <p class='text-body-1'>
    ${item[1]}
    </p>
    `;
  })
}
/* funcion que divide el texto en lineas */
function dividirLineas(cadenas){
  let listDeCadenas = cadenas.split(/\n/g);
  /*   console.log(listDeCadenas); */
  return listDeCadenas;
}
/* funcion que divide el texto en palabras y luego las busca en la bd lexemas */
function dividirPalabras(cadenas){
  /* recorremos las lineas */
  cadenas.forEach((cadena)=>{
    /* en cada linea separamos los simbolos*/
    cadena = cadena.replace(';',' ;');
    cadena = cadena.replace('=',' =');
    cadena = cadena.replace('+',' +');
    cadena = cadena.replace('.',' . ');
    cadena = cadena.replace('(',' ( ');
    cadena = cadena.replace(')',' ) ');
/*     console.log(cadena) */
  /* separamos cada linea por los espacios */
  let listaDePalabras = cadena.split(/\s/g);
  /*     console.log(listaDePalabras); */
  /* buscamos cada parabra */
  buscar(listaDePalabras);
  });
}
/* agregando la accion al form */
cCodigo.addEventListener('submit', event=>{
  event.preventDefault();
  tokens=[];
  dividirPalabras(dividirLineas(codigo.value));
  comprobarCaso(dividirBloque(codigo.value));
  /*   dividirLineas() */
})
cCodigo.addEventListener('reset', event=>{
  lexico.innerHTML=``;
  sintac.innerHTML=``;
})