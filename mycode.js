
function convertTemperature()
{
    /* Convert celsius to fahrenheit (CEL * 9/5) + 32*/
    var cel = document.getElementById("celsius").value;
    var far = (cel * 9/5) + 32
    document.getElementById("fahrenheit").value = far;     
}

function convertWeight()
{
    /* Convert kilos to pounds (KGS * 2.2*/
    var kg = document.getElementById("kg").value;
    var lb = kg * 2.2
    document.getElementById("lbs").value = lb;     
}

function convertDistance()
{
    /* Convert kms to miles (KMS * 0.62137*/
    var km = document.getElementById("kms").value;
    var ms = km * 0.62137
    document.getElementById("m").value = ms;     
}

