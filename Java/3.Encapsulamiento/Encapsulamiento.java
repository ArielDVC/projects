class Encapsulamiento{
    int a,b;
    double o,p,X1,X2;
    private void Ecuacion(double w,int x,int y){
		a=x;b=y;
		p=Math.sqrt(w);
		X1=(-b+p)/(2*a);
		X2=(-b-p)/(2*a);
		System.out.println("X1="+X1);
		System.out.println("X2="+X2);
    }
    void Ecu(int x,int y,int z){
		o=(y*y)-(4*x*z);
		if(o>0){
			Ecuacion(o,x,y);
		}
		else{
			System.out.println("Es una Inecuacion...");
		}
    }
}
