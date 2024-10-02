class Principal{
    static int Opcion,Sw=0,Posicion;
    static String Dato;
    public static void main(String[]args){
		ListaLineal x=new ListaLineal();
		do{
			System.out.println("Ingrese una Opcion:");
			System.out.println("1.Mostrar Nodo\n2.Insertar Primera Posicion");
			System.out.println("3.Insertar Ultima Posicion\n4.Eliminar Primera Posicion");
			System.out.println("5.Insertar Ultima Posicion\n6.Dimensionar Nodo");
			System.out.println("7.Insertar Posicion N\n8.Eliminar Posicion N");
			System.out.println("9.Esta Vacio???\n10.Invertir Nodo");
			System.out.println("11.Eliminar N Dato\n12.Eliminar Repetidos");
			System.out.println("13.Eliminar Los que inician con X Valor\n14.Finalizar");
			Opcion=Leer.datoInt();
			if(Opcion<1||Opcion>14){
				System.out.println("Ingrese un Valor entre 1 y 10...");
			}
			switch(Opcion){
				case 1:
					System.out.println(x.ListarLista());
				break;
				case 2:
					System.out.println("Ingrese un Dato:");
					Dato=Leer.datoString();
					x.InsertarPrimero(Dato);
				break;
				case 3:
					System.out.println("Ingrese un Dato:");
					Dato=Leer.datoString();
					x.InsertarFinal(Dato);
				break;
				case 4:
					x.EliminarPrimero();
				break;
				case 5:
					x.EliminarUltimo();
				break;
				case 6:
					System.out.println("Dimension del Nodo: "+x.DimensionNodo());
				break;
				case 7:
					System.out.println("Ingrese un Dato:");
					Dato=Leer.datoString();
					System.out.println("Ingrese la Posicion:");
					Posicion=Leer.datoInt();
					x.InsertarNPosicion(Dato,Posicion);
				break;
				case 8:
					System.out.println("Ingrese la Posicion a Eliminar: ");
					Posicion=Leer.datoInt();
					x.EliminarNPosicion(Posicion);
				break;
				case 9:
					System.out.println("Esta Vacio???: "+x.EstaVacio());
				break;
				case 10:
					x.Invertir();
				break;
				case 11:
					System.out.println("Ingrese el Dato a Eliminar:");
					Dato=Leer.datoString();
					x.EliminarXValor(Dato);
				break;
				case 12:
					x.EliminarRepetidos();
				break;
				case 13:
					char Caracter;
					System.out.println("Ingrese la Letra Inicial de la Palabras a Eliminar");
					Caracter=Leer.datoChar();
					x.EliminarInicioX(Caracter);
				break;
				default:
					Sw=1;
					System.out.println("Finalizado...");
			}
			System.out.println();
		}while(Sw==0);
    }
}
