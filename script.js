var wrap = document.body.querySelector(".wrap");

var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]

for(var i=0; i<warriors.length; i++) {

if (warriors[i].health >= 10 && warriors[i].damage >= 2 && warriors[i].warrior) {
  var ele = document.createElement("div");
  var eleName = document.createElement("h1");
  var eleDamage = document.createElement("h4");
  var eleHealth = document.createElement("h4");
  var eleWarrior = document.createElement("h4");
  
  //This goes through each name and looks for the letter 'a'
  const string = warriors[i].name;
  const substring = "a";
  
  if (string.indexOf(substring) !== -1) {
    ele.style.color = 'red';
  }
    
  eleName.innerHTML=warriors[i].name
  eleDamage.innerHTML="Damage: "+warriors[i].damage;
  eleHealth.innerHTML="Health: "+warriors[i].health;
  eleWarrior.innerHTML="Warrior: "+warriors[i].warrior;
  ele.appendChild(eleName);
  ele.appendChild(eleDamage);
  ele.appendChild(eleHealth);
  ele.appendChild(eleWarrior);
  wrap.appendChild(ele);
}
}