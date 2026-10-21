class Yofiana{
    skillCoding(){
        console.log("Amat sangat bagus sekali");
    }
    levelCoding(){
        console.log(50);
    }
}

class Shaleh{
    skillCoding(){
        console.log("Sangat bagus sekali");
    }
    levelCoding(){
        console.log(4664806);
    }
}

class Ilham{
    skillCoding(){
        console.log("Bagus sekali");
    }
    levelCoding(){
        console.log(2);
    }
}

const orang = new Yofiana();
orang.skillCoding();
orang.levelCoding();

const orang2 = [new Shaleh(), new Ilham()];
orang2.forEach(orang2 => orang2.skillCoding());
orang2.forEach(orang2 => orang2.levelCoding());