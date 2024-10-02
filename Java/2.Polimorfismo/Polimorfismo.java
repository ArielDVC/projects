class Polimorfismo{
    static int a,b,c;
    int Resta(){
		a=8;
		b=5;
		return a-b;
    }
    int Resta(int x){
		b=x;
		c=a-b;
		return c;
    }
    int Resta(int x,int y){
		a=x;
		b=y;
		c=a-b;
		return c;
    }
}
