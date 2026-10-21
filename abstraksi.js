class Mobil {
    constructor(merek){
        this.merek = merek;
    }
    nyalakan(){
        console.log("nyalakan mobil...");
        this.#prosesMesin();
        console.log("mobil siap digunakan")
    }
    //method private
    #prosesMesin(){
        console.log("proses mesin");
    }
}

const mobil = new Mobil("Toyota");
mobil.nyalakan();