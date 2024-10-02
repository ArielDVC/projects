class Persona{
    static String Nombre,Apellido;
    static int Edad;
    void Leer(){
		System.out.println("Ingrese un Nombre:");
		Nombre=Leer.datoString();
		System.out.println("Ingrese el Apellido:");
		Apellido=Leer.datoString();
		System.out.println("Ingrese la Edad:");
		Edad=Leer.datoInt();
    }
    void Mostrar(){
		System.out.println("Nombre: "+Nombre);
		System.out.println("Apellido: "+Apellido);
		System.out.println("Edad: "+Edad);
    }
}
