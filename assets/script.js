let stone = document.getElementById("stone")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let choice = document.getElementById("choice")
let fight = document.getElementById("fight")
let robot = document.getElementById("robot")
let myResult = document.getElementById("result")
let selectedWeapon = document.getElementById("selectedWeapon")
let img = document.getElementById("img")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let divImg = document.getElementById("divImg")
let myButton = document.getElementById("myButton")
let scoreUser = 0
let scoreRobot = 0
let selected = ""
fight.disabled = true

const weapon = ["Rond", "Triangle", "Carre"]

//**********************Fonction Random****************************************

function randomWeapon(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

 //**************************************************************************** 

//*************Choix utilisateur*************************************************

choice.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON") {
        console.log(e.target.value)
        selected = e.target.value
        console.log("User's choice : " + selected)
                stone.disabled = true
                paper.disabled = true
                scissors.disabled = true
                fight.disabled = false
                selectedWeapon.innerHTML = "Vous avez choisi : " + selected
                selectedWeapon.className = "fw-bold fs-5 h5 d-block text-center text-white"
                myButton.className = "d-none"

                if (selected == "Rond"){
                img3.src = "assets/img/rondremove.png"
                img3.className = "d-block"
                }
                if (selected == "Carre"){
                    img3.src = "assets/img/carreremove.png"
                    img3.className = "d-block"
                }
                if (selected == "Triangle"){
                    img3.src = "assets/img/triangleremove.png"
                    img3.className = "d-block"
                }

    }
})
//********************************************************************************

//**************************bouton combat et comparaisons*************************

fight.addEventListener("click", () => {

    let weaponRandom =  weapon[randomWeapon(0, weapon.length)]
    console.log("CPU's Choice : " + weaponRandom)
    fight.disabled = true

    robot.innerHTML = "Mr Robot a choisi : " + weaponRandom
    robot.className = "robotWeapon m-3 fs-5 h3 d-block fw-bold text-center text-white"
    myResult.className = "result fs-1 fw-bold text-center mt-4 d-block h2"

    if (weaponRandom == "Carre") {
        img.src = "assets/img/carreremove.png"
    }
    if (weaponRandom == "Rond") {
        img.src = "assets/img/rondremove.png"
    }
    if (weaponRandom == "Triangle") {
        img.src = "assets/img/triangleremove.png"
    }


    if (selected == weaponRandom){
        myResult.innerHTML = "Match nul"
        img2.src = "assets/img/nullremove.png"
        img2.className = "d-block"
        divImg.className = "d-flex justify-content-center d-block"
    }

    if (selected == "Carre" && weaponRandom == "Rond"){
        myResult.innerHTML = "Le rond bat le carré, c'est perdu!"
        img2.src = "assets/img/perdu.png"
        img2.className = "d-block"
        divImg.className = "d-flex justify-content-center d-block"
        scoreRobot++
        document.getElementById("scoreRobot").innerHTML = "Score Mr Robot  " + scoreRobot
    }
    if (selected == "Carre" && weaponRandom == "Triangle"){
        myResult.innerHTML = "Le carré bat le triangle, c'est gagné!"
        img2.src = "assets/img/gagné.png"
        img2.className = "d-block text-center"
        divImg.className = "d-flex justify-content-center d-block"
        scoreUser++
        document.getElementById("scoreUser").innerHTML = "Votre Score " + scoreUser
    }
    if (selected == "Rond" && weaponRandom == "Carre") {
        myResult.innerHTML = "Le rond bat le carré, c'est gagné!!"
        img2.src = "assets/img/gagné.png"
        img2.className = "d-block text-center"
        divImg.className = "d-flex justify-content-center d-block"
        scoreUser++
        document.getElementById("scoreUser").innerHTML = "Votre Score " + scoreUser
    }
    if (selected == "Rond" && weaponRandom == "Triangle") {
        myResult.innerHTML = "Le triangle bat le rond, c'est perdu!!"
        img2.src = "assets/img/perdu.png"
        img2.className = "d-block"
        divImg.className = "d-flex justify-content-center d-block"
        scoreRobot++
        document.getElementById("scoreRobot").innerHTML = "Score Mr Robot  " + scoreRobot
    }
    if (selected == "Triangle" && weaponRandom == "Rond"){
        myResult.innerHTML = "Le triangle bat le rond, c'est gagné!!"
        img2.src = "assets/img/gagné.png"
        img2.className = "d-block text-center"
        divImg.className = "d-flex justify-content-center d-block"
        scoreUser++
        document.getElementById("scoreUser").innerHTML = "Votre Score " + scoreUser
    }
    if (selected == "Triangle" && weaponRandom == "Carre"){
        myResult.innerHTML = "Le carré bat le triangle,c'est perdu!!"
        img2.src = "assets/img/perdu.png"
        img2.className = "d-block text-center"
        divImg.className = "d-flex justify-content-center d-block"
        scoreRobot++
        document.getElementById("scoreRobot").innerHTML = "Score Mr Robot  " + scoreRobot
    }
     weaponRandom =""
})
// *****************************************************************************

//*****************bouton rejouer***********************************************

function reload(){
    fight.disabled = true
    stone.disabled = false
    paper.disabled = false
    scissors.disabled = false
    myResult.innerHTML = ""
    robot.innerHTML = ""
    robot.className = "d-none"
    selectedWeapon.innerHTML = ""
    selectedWeapon.className = "d-none"
    img.src =""
    img2.src =""
    img3.src = ""
    myButton.className = "d-flex row m-auto text-center d-block"
    divImg.className = "d-flex justify-content-center d-none"
}
//******************************************************************************