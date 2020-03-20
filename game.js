let target = {
  name: "Grunt",
  hp: 100,
  hits: 0,
  img: "https://vignette.wikia.nocookie.net/halo/images/f/f1/HCE_Grunt_Major_transparent.png/revision/latest?cb=20140307200502",
  specials: []
}
let fireDamage = {
  onFire: false,
  turns: 0,
  damage: 0
}
let shield = {
  shielded: false,
  turns: 0,
  multiplier: 1
}
let quadDamage = {
  applied: false,
  turns: 0,
  multiplier: 1
}

function reset() {
  target.hp = 100
  target.hits = 0
  target.specials = []
  update()
}

function slap() {
  if (shield.shielded == true || quadDamage.applied == true) {
    target.hp = target.hp - Math.round(((1 + fireDamage.damage) * shield.multiplier * quadDamage.multiplier))
  } else {
    target.hp -= 1
    target.hp -= fireDamage.damage
  }
  target.hits++
  decrementMods()
  update()
}

function punch() {
  if (shield.shielded == true || quadDamage.applied == true) {
    target.hp = target.hp - Math.round(((5 + fireDamage.damage) * shield.multiplier * quadDamage.multiplier))
  } else {
    target.hp -= 5
    target.hp -= fireDamage.damage
  }
  target.hits++
  decrementMods()
  update()
}

function kick() {
  if (shield.shielded == true || quadDamage.applied == true) {
    target.hp = target.hp - Math.round(((10 + fireDamage.damage) * shield.multiplier * quadDamage.multiplier))
  } else {
    target.hp -= 10
    target.hp -= fireDamage.damage
  }
  target.hits++
  decrementMods()
  update()
}

function addFire() {
  //light the target on fire
  fireDamage.onFire = true
  fireDamage.turns = 3
  fireDamage.damage = 2
}

function addShield() {
  shield.shielded = true
  shield.multiplier = 0.5
  shield.turns = 3
}

function addQuad() {
  quadDamage.applied = true
  quadDamage.multiplier = 4
  quadDamage.turns = 2
}

// function addMods() {
//   let modifiedDamage = 0
//   if (target.specials[0])
//     return modifiedDamage
// }

function update() {
  let template = ""
  template += /*html*/ `
    <div class="row">
      <div class="col-4">
        <img class="img-fluid" src=${target.img}>
      </div>
      <div class="col-6">
        <h3>HP: ${target.hp}</h3>
        <h3>Hits: ${target.hits}</h3>
        <h3>${target.name}</h3>
      </div>
    </div>
    `
  let myTemplate = document.getElementById("update").innerHTML = template

  if (target.hp < 1) {
    let primebtn = document.querySelector(".btn-primary")
    let secbtn = document.querySelectorAll(".btn-secondary")
    primebtn.classList.add("disabled")
    for (let i = 0; i < secbtn.length; i++) {
      secbtn[i].classList.add("disabled")

    }
  }
  // document.getElementsByClassName("btn-primary").classList.add("hidden")
}

function decrementMods() {
  if (fireDamage.turns > 1) {
    fireDamage.turns--
  } else {
    fireDamage.onFire = false
    fireDamage.damage = 0
  }

  if (shield.turns > 1) {
    shield.turns--
  } else {
    shield.shielded = false
    shield.multiplier = 1
  }

  if (quadDamage.turns > 1) {
    quadDamage.turns--
  } else {
    quadDamage.applied = false
    quadDamage.multiplier = 1
  }
}