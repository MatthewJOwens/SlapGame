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
}

function slap() {
  if (shield.shielded == true || quadDamage.applied == true) {
    target.hp = target.hp - Math.round(((1 + fireDamage.damage) * shield.multiper * quadDamage.multiplier))
  } else {
    target.hp -= 1
    target.hp -= fireDamage.damage
  }
  decrementMods()
  update()
}

function punch() {
  if (shield.shielded == true || quadDamage.applied == true) {
    target.hp = target.hp - Math.round(((5 + fireDamage.damage) * shield.multiper * quadDamage.multiplier))
  } else {
    target.hp -= 5
    target.hp -= fireDamage.damage
  }
  decrementMods()
  update()
}

function kick() {
  if (shield.shielded == true || quadDamage.applied == true) {
    target.hp = target.hp - Math.round(((10 + fireDamage.damage) * shield.multiper * quadDamage.multiplier))
  } else {
    target.hp -= 10
    target.hp -= fireDamage.damage
  }
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

function addMods() {
  let modifiedDamage = 0
  if (target.specials[0])
    return modifiedDamage
}

function update() {

}
function decrementMods() {
  if (fireDamage.turns > 0) {
    fireDamage.turns--
  }
  if (shield.turns > 0) {
    shield.turns--
  }
  if (quadDamage.turns > 0) {
    quadDamage.turns--
  }
}