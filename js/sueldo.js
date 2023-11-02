function sueldo(sueldotra, categoria){

    if (categoria =1){
        let sueldot1 = (sueldotra+(sueldotra*.15));
        return [categoria,  sueldot1.toFixed(2)]
    }else if (categoria =2){
        let sueldot2 = (sueldotra+(sueldotra*.10));
        return [categoria,  sueldot2.toFixed(2)]
    }else if (categoria =3){
        let sueldot3 = (sueldotra+(sueldotra*.8));
        return [categoria, sueldot3.toFixed(2)]
    }else if (categoria =4){
        let sueldot4 = (sueldotra+(sueldotra*.7));
        return [categoria, sueldot4.toFixed(2)]
    }else{
        return "categoria no valida"
    }
}

// console.log(sueldo(1000, 1));