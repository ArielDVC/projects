import java.io.*;
import java.lang.*;
public class Leer
{
    public static int datoInt ()
    {
	DataInputStream inp = new DataInputStream (System.in);

	try
	{
	    String data = inp.readLine ();
	    try
	    {
		int resp = Integer.parseInt (data);
		return (resp);
	    }
	    catch (NumberFormatException s)
	    {
		System.out.print ("Error de entrada de datos");
	    }
	    return (000000);
	}

	catch (IOException e)
	{
	    System.out.print ("Error");

	    return (00000000000);
	}

    }


    public static String datoString ()
    {
	DataInputStream inp = new DataInputStream (System.in);

	try
	{
	    String data = inp.readLine ();
	    return (data);
	}
	catch (IOException e)
	{
	    return ("error");
	}
    }


    public static char datoChar ()
    {
	DataInputStream inp = new DataInputStream (System.in);

	try
	{
	    String data = inp.readLine ();
	    return (data.charAt (0));
	}
	catch (IOException e)
	{
	    return ('E');
	}
    }


    public static long datoLong ()
    {
	DataInputStream inp = new DataInputStream (System.in);

	try
	{
	    String data = inp.readLine ();
	    try
	    {
		long largo = Long.parseLong (data);
		return (largo);
	    }
	    catch (NumberFormatException s)
	    {
		System.out.print ("Error de entrada de datos");
	    }
	    return (0);
	}
	catch (IOException e)
	{
	    System.out.println ("Error");
	    return (0);
	}
    }


    public static double datoDouble ()
    {
	DataInputStream inp = new DataInputStream (System.in);

	try
	{
	    String data = inp.readLine ();
	    try
	    {
		double real = Double.valueOf (data).doubleValue ();
		return (real);
	    }
	    catch (NumberFormatException s)
	    {
		System.out.print ("Error de entrada de datos");
	    }
	    return (0);
	}


	catch (IOException e)
	{
	    System.out.println ("Error");
	    return (0);
	}
    }


    public static float datoFloat ()
    {
	DataInputStream inp = new DataInputStream (System.in);

	try
	{
	    String data = inp.readLine ();
	    try
	    {
		float punfl = Float.valueOf (data).floatValue ();
		return (punfl);
	    }
	    catch (NumberFormatException s)
	    {
		System.out.print ("Error de entrada de datos");
	    }
	    return (0);
	}


	catch (IOException e)
	{
	    System.out.println ("Error");
	    return (0);
	}
    }
}
