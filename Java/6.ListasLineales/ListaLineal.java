class ListaLineal{

    Nodo Puntero;

    class Nodo{
		String Dato;
		Nodo Siguiente;
    }

    ListaLineal(){
		Puntero=null;
    }

    String ListarLista(){
		String Cadena="";
		if(Puntero!=null){
			Nodo Temporal=Puntero;
			while(Temporal!=null){
				Cadena=Cadena+" -> "+Temporal.Dato;
				Temporal=Temporal.Siguiente;
			}
		}
		return Cadena;
    }

    void InsertarPrimero(String Cadena){
		Nodo Temporal=new Nodo();
		Temporal.Dato=Cadena;
		Temporal.Siguiente=Puntero;
		Puntero=Temporal;
    }

    void InsertarFinal(String Cadena){
		Nodo Temporal=new Nodo();
		Temporal.Dato=Cadena;
		Temporal.Siguiente=null;
		if(Puntero!=null){
			Nodo Auxiliar=Puntero;
			while(Auxiliar.Siguiente!=null)
				Auxiliar=Auxiliar.Siguiente;
			Auxiliar.Siguiente=Temporal;
		}
		else{
			InsertarPrimero(Cadena);
		}
    }

    void EliminarPrimero(){
		if(Puntero!=null)
			Puntero=Puntero.Siguiente;
    }

    void EliminarUltimo(){
		if(Puntero!=null){
			if(Puntero.Siguiente==null)
				Puntero=null;
			else{
				Nodo Temporal=Puntero;
				while(Temporal.Siguiente.Siguiente!=null)
					Temporal=Temporal.Siguiente;
				Temporal.Siguiente=null;
			}
		}
    }

    int DimensionNodo(){
		int Contador=0;
		if(Puntero!=null){
			Nodo Temporal=Puntero;
			while(Temporal!=null){
				Temporal=Temporal.Siguiente;
				Contador++;
			}
		}
		return Contador;
    }

    void InsertarNPosicion(String Cadena,int Posicion){
		Nodo Auxiliar=new Nodo();
		Auxiliar.Dato=Cadena;
		if(Puntero!=null){
			if(Posicion==1)
				InsertarPrimero(Cadena);
			else{
				Nodo Temporal=Puntero;
				if(Posicion>DimensionNodo())
					Posicion=DimensionNodo();
				int Contador=1;
				while(Contador<Posicion-1){
					Temporal=Temporal.Siguiente;
					++Contador;
				}
				Auxiliar.Siguiente=Temporal.Siguiente;
				Temporal.Siguiente=Auxiliar;
			}
		}
		else{
			Auxiliar.Siguiente=null;
			Puntero=Auxiliar;
		}
    }

    void EliminarNPosicion(int Posicion){
		if(Puntero!=null){
			if(Posicion==1)
				EliminarPrimero();
			else{
				if(Posicion>DimensionNodo())
					Posicion=DimensionNodo()-1;
				Nodo Temporal=Puntero;
				int Contador=1;
				while(Contador<Posicion-1){
					Contador+=1;
					Temporal=Temporal.Siguiente;
				}
				Temporal.Siguiente=Temporal.Siguiente.Siguiente;
			}
		}
    }

    boolean EstaVacio(){
		return (Puntero==null)?true:false;
    }

    void Invertir(){
		if(Puntero!=null){
			Nodo Temporal=null;
			while(Puntero!=null){
				Nodo Auxiliar=new Nodo();
				Auxiliar.Dato=Puntero.Dato;
				Auxiliar.Siguiente=Temporal;
				Temporal=Auxiliar;
				Puntero=Puntero.Siguiente;
			}
			Puntero=Temporal;
			Temporal=null;
		}
    }

    void EliminarXValor(String Cadena){
		if(Puntero!=null){
			Nodo Temporal=null;
			while(Puntero!=null){
				System.out.println(Puntero.Dato);
				if(!Puntero.Dato.equals(Cadena)){
					Nodo Auxiliar=new Nodo();
					Auxiliar.Dato=Puntero.Dato;
					Auxiliar.Siguiente=Temporal;
					Temporal=Auxiliar;
				}
				Puntero=Puntero.Siguiente;
			}
			Puntero=Temporal;
			Temporal=null;
			Invertir();
		}
    }

    void EliminarRepetidos(){
		if(Puntero!=null){
			Nodo Temporal=null;
			Nodo Auxiliar=Puntero;
			while(Puntero!=null){
				while(Auxiliar!=null)
					Auxiliar=Auxiliar.Siguiente;
				Puntero=Puntero.Siguiente;
			}
		}
    }

    void EliminarInicioX(char Caracter){
		if(Puntero!=null){
			Nodo Temporal=null;
			while(Puntero!=null){
				if(Puntero.Dato.charAt(0)!=Caracter){
					Nodo Auxiliar=new Nodo();
					Auxiliar.Dato=Puntero.Dato;
					Auxiliar.Siguiente=Temporal;
					Temporal=Auxiliar;
				}
				Puntero=Puntero.Siguiente;
			}
			Puntero=Temporal;
			Temporal=null;
			Invertir();
		}
    }
}
