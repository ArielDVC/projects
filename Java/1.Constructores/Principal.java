class Principal{
    static int a,b,c;
    public static void main(String[]args){
		System.out.println("Constructores...");
		System.out.println("Ingrese Dos Numeros:");
		a=Leer.datoInt();
		b=Leer.datoInt();
		Constructor x=new Constructor();
		System.out.println("La suma de 5+8="+x.Suma());
		Constructor y=new Constructor(a,b);
		System.out.println("La suma de "+a+"+"+b+"="+y.Suma());
    }
}
