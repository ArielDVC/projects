class Militar extends Persona{
    static String Rango, Funcion;
    void LeerM(){
		Leer();
		System.out.println("Ingrese el Rango:");
		Rango=Leer.datoString();
		System.out.println("Ingrese la Funcion: ");
		Funcion=Leer.datoString();
    }
    void MostrarM(){
		Mostrar();
		System.out.println("Rango: "+Rango);
		System.out.println("Funcion: "+Funcion);
    }
}
