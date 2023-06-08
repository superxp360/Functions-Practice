function coneCalucator(radius, height){
    volume = 3.14 * (radius ** 2) * (height / 3);
    return volume;
}

const coneVolume = coneCalucator(3 , 9);

console.log(coneVolume);