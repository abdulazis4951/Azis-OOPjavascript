class Cuking {
    makan(){
        console.log("nyam nyam nyam");
    }
}

class Agung {
    makan() {
        console.log("Hap Hap Hap");
    }
}

class dormice {
    makan(){
        console.log("cap cap cap");
    }
}

const hewan = [new Cuking(), new Agung()];
hewan.forEach(hewan => hewan.makan());

const hewan3 = new dormice();
hewan3.makan();