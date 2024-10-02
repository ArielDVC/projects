class Estudiante extends Persona{
    static String Carrera,Universidad,Especialidad;
    void LeerE(){
		Leer();
		System.out.println("Ingrese la Carrera:");
		Carrera=Leer.datoString();
		System.out.println("Ingrese la Universidad:");
		Universidad=Leer.datoString();
		System.out.println("Ingrese la Especialidad:");
		Especialidad=Leer.datoString();
    }
    void MostrarE(){
		Mostrar();
		System.out.println("Carrera: "+Carrera);
		System.out.println("Universidad: "+Universidad);
		System.out.println("Especialidad: "+Especialidad);
    }
}
