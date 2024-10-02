class Principal {
    static int n,m;

    public static void main(String[] args) {
		Fibonacci x=new Fibonacci();
		System.out.println("Ingrese un Numero:");
		n=Leer.datoInt();
		System.out.println("La secuencia Fibo es: "+x.Fibo(n));

		System.out.println("Ingrese un numero:");
		n=Leer.datoInt();
		System.out.println("la suma de 1/3+1/6+1/9... es:"+x.SumaD(n));

		System.out.println("Ingrese dos Numeros: ");
		n=Leer.datoInt();
		m=Leer.datoInt();
		System.out.println("La Potencia de: "+n+" a la "+m+" es: "+x.Potencia(n,m));

		System.out.println("Ingrese un Numero:");
		n=Leer.datoInt();
		System.out.println("la sumatoria de 2+3/3+4/5+5/7... es: "+x.SumaT(n));

		System.out.println("Ingrese un Numero: ");
		n=Leer.datoInt();
		System.out.println("La suma de pares es: "+x.SumaP(n));

		System.out.println("Ingrese un Numero: ");
		n=Leer.datoInt();
		System.out.println("el factorial es: "+x.Factorial(n));
    }
}
