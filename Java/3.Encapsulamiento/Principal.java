class Principal{
    static int a,b,c;
    public static void main(String[]args){
		System.out.println("Encapsulamiento...");
		System.out.println("Ingrese 3 Numeros:");
		a=Leer.datoInt();
		b=Leer.datoInt();
		c=Leer.datoInt();
		Encapsulamiento x=new Encapsulamiento();
		x.Ecu(a,b,c);
    }
}
