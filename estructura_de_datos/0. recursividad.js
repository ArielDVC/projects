class SinRecursividad{
    sumaPares(numero){
        let suma  = 0,
            valor = 0;
        while(valor <= numero)
            suma += 2 * valor++;
        return suma;
    }
    contarDigitos(numero){
        let contador = 0;
        numero = Math.abs(numero);
        while(numero >= 1){
            numero = Math.floor(numero / 10);
            contador++;
        }
        return contador;
    }
    invertirCadena(cadena){
        let invertida = '';
        for(let i=(cadena.length-1); i>=0; i--)
            invertida += cadena[i];
        return invertida;
    }
    factorial(numero){
        let resultado = 1;
        while(numero > 0)
            resultado *= numero--;
        return resultado;
    }
    potencia(base, exponente){
        let resultado = 1;
        while(exponente > 0){
            resultado *= base;
            exponente--;
        }
        return resultado;
    }
    fibonacci(numero){
        if(numero == 1)
            return 0;
        if(numero == 2)
            return 1;
        let primero   = 0,
            segundo   = 1,
            resultado = 0;
        for(let i=3 ; i<=numero ; i++){
            resultado = primero+segundo;
            primero   = segundo;
            segundo   = resultado;
        }
        return resultado;
    }
    sumaDigitos(numero){
        let suma = 0;
        numero   = Math.abs(numero);
        while(numero > 0){
            suma  += numero % 10;             // Sumar el último dígito
            numero = Math.floor(numero / 10); // Eliminar el último dígito
        }
        return suma;
    }
    contarOcurrencias(arreglo, ocurrencia){
        let contador = 0;
        for(let i=0; i<arreglo.length; i++)
            if(arreglo[i] === ocurrencia)
                contador++;
        return contador;
    }
    productoArreglo(arreglo){
        let producto = 1;
        for(let i=0 ; i<arreglo.length; i++)
            producto *= arreglo[i];
        return producto;
    }
}
class Recursividad{
    sumaPares(numero){
        return numero==1 ? 2 : (numero*2) + this.sumaPares(--numero);
    }
    contarDigitos(numero){
        numero = Math.abs(numero);
        if(numero < 10)
            return 1;
        return 1 + this.contarDigitos(Math.floor(numero / 10));
    }
    invertirCadena(cadena){
        if(cadena === '')
            return cadena;
        return this.invertirCadena(cadena.substring(1)) + cadena.charAt(0);
    }
    factorial(numero){
        return numero==0 ? 1 : numero * this.factorial(--numero);
    }
    potencia(base, exponente){
        return exponente==0 ? 1 : base*(this.potencia(base, --exponente));
    }
    fibonacci(numero){
        if(numero == 1)
            return 0;
        if(numero == 2)
            return 1;
        return this.fibonacci(numero - 1) + this.fibonacci(numero - 2);
    }
    sumaDigitos(numero){
        if(numero == 0)
            return 0;
        return (numero % 10) + this.sumaDigitos(Math.floor(numero / 10));
    }
    contarOcurrencias(arreglo, ocurrencia, index = 0){
        if(index >= arreglo.length)
            return 0;
        return (arreglo[index]==ocurrencia ? 1 : 0) + this.contarOcurrencias(arreglo, ocurrencia, ++index);
    }
    productoArreglo(arreglo, index=0){
        if(index >= arreglo.length)
            return 1;
        return arreglo[index] * this.productoArreglo(arreglo, ++index);
    }
}