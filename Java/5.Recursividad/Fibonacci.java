class Fibonacci {
    int fibonacci(int numero){
		if(numero<=1)
			return numero + 1;
		else
			return fibonacci(numero-1) + fibonacci(numero-2);
    }
	int potencia(int base,int exponente){
		if(exponente==0)
			return 1;
		else
			return base * (potencia(base,--exponente));
    }
    double SumaD(int x){
		if(x==1)
			return (1/(double)3);
		else
			return (1/(double)(x*3))+SumaD(x-1);
    }
    double SumaT(double x){
		if(x==1)
			return 2;
		else
			return ((x+1)/((x*2)-1))+SumaT(x-1);
    }
    int SumaP(int x){
		if(x==1)
			return 2;
		else
			return (x*2)+SumaP(x-1);
    }
    int Factorial(int x){
		if(x==0)
			return 1;
		else
			return x*Factorial(x-1);
    }
}
