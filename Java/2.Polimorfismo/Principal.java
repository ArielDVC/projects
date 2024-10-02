class Principal{
    static int a,b,c;
    public static void main(String[]args){
		System.out.println("Polimorfismo...");
		System.out.println("Ingrese dos Numeros:");
		a=Leer.datoInt();
		b=Leer.datoInt();
		Polimorfismo x=new Polimorfismo();
		System.out.println("La resta de 8-5="+x.Resta());
		System.out.println("La resta de 8-"+a+"="+x.Resta(a));
		System.out.println("La resta de "+a+"-"+b+"="+x.Resta(a,b));
    }
}
