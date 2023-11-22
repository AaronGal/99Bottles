
function bottles(){
    var bottleLine = ""
    for(i = 99; i > 0; i = i-1){
        var NextBottle=i-1;
        bottleLine += i + " bottles of beer on the wall, "+ i + " bottles of beer, Take one down and pass it around," + NextBottle + " bottles of beer on the wall<br>";
    }
    document.getElementById("bottleLine").innerHTML = bottleLine;
}
    