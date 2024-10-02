class Principal{
    public static void main(String[]args){
		System.out.println("Herencia...");
		Estudiante x=new Estudiante();
		Militar y=new Militar();
		System.out.println("Leer Datos Estudiantes...");
		x.LeerE();
		System.out.println("Mostrar Datos Estudiante...");
		x.MostrarE();
		System.out.println("Leer Datos del Militar...");
		y.LeerM();
		System.out.println("Mostrar Datos Militar...");
		y.MostrarM();
    }
}
