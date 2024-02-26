function wistTnow() {
    console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
};

function abcNow() {
    console.log("abcdefghijklmnopqrstuvwxyz");
};

function piE() {
    let piE_var = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
    console.log(piE_var);
};

function wistDnow() {
    console.log(`${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`);
};

class CarBrand {
    constructor(brand, year) {
        this.name = brand;
        this.year = year;
    };

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    };
};


function hearAudio(audiolink){
    audiolink.play();
};

function stopAudio(audiolink){
    audiolink.pause();
};


module.exports = { wistTnow, abcNow, piE, wistDnow, CarBrand, hearAudio, stopAudio };