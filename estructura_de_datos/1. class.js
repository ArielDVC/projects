// FUNCIONES DE PRIMERA CLASE
    // function hello(){
    //     console.log('Hola');
    // }
    // const hola = hello;
    // hola();
    // function suma(a,b){
    //     return a+b;
    // }
    // const sumaBasica = suma;
    // console.log(sumaBasica(2,3));
// FUNCIONES DE ORDEN SUPERIOR
    // function superior(funcion){
    //     console.log('Se hace algo antes');
    //     funcion();
    //     console.log('Se hace algo despues');
    // }
    // superior(hola);
// FUNCIONES DE ORDEN SUPERIOR CON PARAMETROS
    // function superior2(funcion,a,b){
    //     console.log('Se hace algo antes');
    //     const res = funcion(a,b);
    //     console.log(res);
    //     console.log('Se hace algo despues');
    // }
    // superior2(suma,2,3);
// FUNCIONES ANONIMAS
    // const anonima = (a,b)=>3*4;
    // console.log(anonima(3,4));
// CLASES
    // const person = new Object();
    // person.name = 'Ariel Villca Calle';
    // person.age  = 25;
    // console.log(person);
// CLASE NATIVA
    // class Person{
    //     constructor(name,age){
    //         this.name = name;
    //         this.age  = age;
    //     }
    //     // GETTERS Y SETTERS
    //     get getName(){
    //         return this.name;
    //     }
    //     set setName(name){
    //         this.name = name;
    //     }
    //     // FUNCTION
    //     hola(){
    //         return `Hola soy ${this.name} y tengo ${this.age} años.`;
    //     }
    // }
    // const hector = new Person('Hector Higinio',25);
    // console.log(hector);
    // console.log(hector.hola());
    // hector.setName = 'Juan';
    // console.log(hector.getName);
    // console.log(hector.hola());
// HERENCIA Y POLIMORFISMO
    // class Padre{
    //     constructor(){
    //         console.log('Padre');
    //     }
    //     padre(){
    //         return 'Hola soy la funcion padre';
    //     }
    //     // Polimorfismo
    //     saludar(){
    //         return 'Hola soy el padre';
    //     }
    // }
    // class Hijo extends Padre{
    //     constructor(){
    //         super();
    //         console.log('Hijo');
    //     }
    //     // Polimorfismo
    //     saludar(){
    //         return 'Hola soy el hijo';
    //     }
    //     get saludarPadre(){
    //         return super.saludar();
    //     }
    // }
    // const hijo = new Hijo;
    // console.log(hijo.padre());
    // console.log(hijo.saludar());
    // console.log(hijo.saludarPadre);
// ENCAPSULAMIENTO
    // class Encapsulamiento{
    //     #variable_privada;
    //     #suma(a,b){
    //         return a+b;
    //     }
    //     #resta(a,b){
    //         return a-b;
    //     }
    //     #multiplicacion(a,b){
    //         return a*b;
    //     }
    //     #division(a,b){
    //         return a/b;
    //     }
    //     tabla(a,b){
    //         console.log('suma : '+this.#suma(a,b));
    //         console.log('resta : '+this.#resta(a,b));
    //         console.log('multiplicacion : '+this.#multiplicacion(a,b));
    //         console.log('division : '+this.#division(a,b));
    //     }
    // }
    // const en = new Encapsulamiento;
    // en.tabla(4,2);
    // // console.log(en.#suma(2,3));