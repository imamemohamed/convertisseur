let fc = document.getElementById("fc");
let fmg = document.getElementById("fmg");
let ariary = document.getElementById("ariary");
let euro = document.getElementById("euro");

fc.addEventListener("input", function()
    {convM(this.id, this.value);});
fmg.addEventListener("input", function()
    {convM(this.id, this.value);});
ariary.addEventListener("input", function()
    {convM(this.id, this.value);});
euro.addEventListener("input", function()
    {convM(this.id, this.value);});

function convM(id, val){
    if(id == "fc"){
        fmg.value = val * 49.036984 ;
        ariary.value = val * 9.74;
        euro.value = val * 0.0020;
    }else if(id == "fmg"){
        fc.value = val *0.20495;
        ariary.value = val * 0.2006;
        euro.value = val * 0.0000414102;
    }else if(id == "ariary"){
        fc.value = val * 0.10;
        fmg.value = val * 4.984;
        euro.value = val * 0.00021;
    }else if(id =="euro"){
        fc.value = val * 493,22;
        fmg.value = val * 23925.2;
        ariary.value = val * 4802.56; 
    }
}

//pour les boutons

let aqua = document.getElementById("aqua");
let vert = document.getElementById("vert");
let blanc = document.getElementById("blanc");
let rouge = document.getElementById("rouge");

let parent =document.getElementById("parent");

aqua.addEventListener("click", aq);
vert.addEventListener("click", ver);
rouge.addEventListener("click",red);
blanc.addEventListener("click",blac);

function aq(e){
    parent.style.backgroundColor = "aqua";
}
function ver(e){
    parent.style.backgroundColor = "green";
}
function red(e){
    parent.style.backgroundColor = "red";
}
function blac(e){
    parent.style.backgroundColor = "white";
}


