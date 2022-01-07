function GetNumbers(number){  //Récupérer les nombres saisies et les mettre dans div respectives
    if (document.getElementById("operator").innerHTML == ""){
        document.getElementById("number1").innerHTML += number;  //div premier nombre 
    }else{
        document.getElementById("number2").innerHTML += number;  //div deuxième nombre 
    }
}

function GetAdd(){  //Récupérer le + dans la div add et ajouter à la div opérateur 
    document.getElementById("operator").innerHTML = document.getElementById("add").innerHTML ;
}

function GetSubstraction(){
    document.getElementById("operator").innerHTML = document.getElementById("substraction").innerHTML;
}

function GetDivide(){
    document.getElementById("operator").innerHTML = document.getElementById("divide").innerHTML;
}

function multiply(){
    document.getElementById("operator").innerHTML = document.getElementById("multiply").innerHTML;
}



function GetComma(){ //Mettre une virgule si aucune virgule 
    let number2 = document.getElementById("number2").innerHTML;
    let number1 = document.getElementById("number1").innerHTML;
    let commaNumber2 = false;
    let commaNumber1 = false;

    if (number2 != ""){
        for(i=0; i< number2.length; i++){
            if (number2[i] == ","){  //Cherche si virgule en place
                commaNumber2 = true;
            }
        }
        if(commaNumber2 == false){
            document.getElementById("number2").innerHTML += ".";  //Insére une virgule si pas de virgule dans la ligne 
        }
    }else{
        for(i=0; i< number1.length; i++){
            if (number1[i] == ","){
                commaNumber1 = true;
            }
        }
            if(commaNumber1 == false){
                document.getElementById("number1").innerHTML += ".";
            }
    }
}

function eraseAll(){  //Bouton CE pour tout effacer
    document.getElementById("number1").innerHTML = "";
    document.getElementById("operator").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}

function back(){  //Bouton <- pour faire retour arrière supprimer dernier chiffre
    let number2 = document.getElementById("number2").innerHTML;
    let operator = document.getElementById("operator").innerHTML;
    let number1 = document.getElementById("number1").innerHTML;
    if (number2 != ""){
        document.getElementById("number2").innerHTML = number2.substring(0, number2.length-1); //Enlever le dernier élément de la div nombre 2
    }else if (operator != ""){
        document.getElementById("operator").innerHTML = operator.substring(0, operator.length-1);
    }else{
        document.getElementById("number1").innerHTML = number1.substring(0, number1.length-1);
    }
}

function eraseElement(){  //Bouton C pour effacer le dernier élément
    if (document.getElementById("number2").innerHTML != ""){
        document.getElementById("number2").innerHTML = "";
    }else if(document.getElementById("operator").innerHTML != ""){
        document.getElementById("operator").innerHTML = "";
    }else{
        document.getElementById("number1").innerHTML = "";
    }
}

function addNegative(){  //Bouton +/- pour mettre nombre en négatif 
    let number2 = document.getElementById("number2").innerHTML;
    let number1 = document.getElementById("number1").innerHTML;
    if (number2 != ""){
        if (number2[0] == "-"){
            let varStock = "";
            for (i=1; i<number2.length; i++){
                varStock += number2[i];     //utilise une variable pour récupérer chaine sans le premier caractère "-"
            }
            document.getElementById("number2").innerHTML = varStock;
        }else{
            document.getElementById("number2").innerHTML = "-" + number2; //Mettre le signe négatif devant le nombre 
        }
    }else{
        if (number1[0] == "-"){
            let varStock = "";
            for (i=1; i<number1.length; i++){
                varStock += number1[i];     
            }
            document.getElementById("number1").innerHTML = varStock;
        }else{
            document.getElementById("number1").innerHTML = "-" + number1; 
        }
    }
}

function calculate(){  //Récupérer les éléments dans div et faire calcule
    let number1 = document.getElementById("number1").innerHTML;
    let number2 = document.getElementById("number2").innerHTML;
    let operator = document.getElementById("operator").innerHTML;

    switch(operator){
        case "+":
            document.getElementById("result").innerHTML = "= " + ((+number1)+(+number2));
            break;
        case "-":
            document.getElementById("result").innerHTML = "= " + ((+number1)-(+number2));
            break;
        case "*":
            document.getElementById("result").innerHTML =  "= " + ((+number1)*(+number2));
            break;
        case "/":
            document.getElementById("result").innerHTML = "= " + ((+number1)/(+number2));
            break;
    }
}

function square(){ //Calculer le carré 
    document.getElementById("result").innerHTML = "= " + Math.pow(document.getElementById("number1").innerHTML, document.getElementById("number1").innerHTML);
}

function squareRoot(){  //Calculer la racine carrée
    document.getElementById("result").innerHTML = "= " + Math.sqrt(document.getElementById("number1").innerHTML);
}

function cos(){  //Calculer le cosinus
    document.getElementById("result").innerHTML = "= " + Math.cos(document.getElementById("number1").innerHTML);
}

function tan(){ //Calculer la tangente 
    document.getElementById("result").innerHTML = "= " + Math.atan(document.getElementById("number1").innerHTML);
}





