class Lote{
    fechaVencimiento;
    disponible;
    constructor(fechaVencimiento, disponible){
        this.fechaVencimiento = fechaVencimiento;
        this.disponible       = disponible;
    }
    getDatos(){
        console.log('---- Datos del Lote ----');
        console.log('Fecha de vencimiento: ' + this.fechaVencimiento);
        console.log('Cantidad disponible : ' + this.disponible);
    }
    getDisponible(){
        return this.disponible;
    }
    setDisponible(disponible){
        this.disponible = disponible;
    }
}