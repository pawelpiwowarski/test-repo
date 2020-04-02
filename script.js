

const newPlayerInput = document.getElementById("newPlayerInput");
const newPlayerBtn = document.getElementById("newPlayerBtn");
const groupSizeInput = document.getElementById("groupSizeInput");
const createGroupsBtn = document.getElementById("createGroupsBtn");

const playersList = document.getElementById("playersList");
const groupsList = document.getElementById("groupsList");



const txtdataload = document.querySelector('input[type="file"]');





const createGroups = (players) => {
  console.log(txtdataload.playersx);
  addPlayer.playersx = txtdataload.playersx;
  let { length } = players;

  const { value: groupSize } = groupSizeInput;


if (groupSize <=0)
{
	alert ("Rozmiar grupy nie może być mniejszy od zera ");
}

else 
{

  const groupsCount = Math.ceil(length / groupSize);

  let  currentIndex = players.length, temporaryValue, randomIndex;

  // tablica players jest mieszana w porządku losowym 
  while (0 !== currentIndex) {

 
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

   
    temporaryValue = players[currentIndex];
    players[currentIndex] = players[randomIndex];
    players[randomIndex] = temporaryValue;
  }

 //tutaj tablica jest wyświetlana z podziałem na zadane grupy 

   for (let j = 1; j < groupsCount + 1; j++) {
    groupsList.innerHTML += `<p class="grupy"> Grupa ${j}<br></p>`;
    for (let i = groupSize * j - groupSize; i < groupSize * j; i++) {
      groupsList.innerHTML += players[i] ? `${players[i]}<br>` : "";
    }
  }




}
};

let playersManualarr = [];
const addPlayer = () => {
  
  const { value: player } = newPlayerInput;
  playersManualarr.push(player);
  playersList.innerHTML = "<ul>";
  playersManualarr.map(player => (playersList.innerHTML += `<li>${player}</li>`));
  playersList.innerHTML += "</ul>";
  addPlayer.playersx = playersManualarr;

};



newPlayerBtn.addEventListener("click", () => {
  addPlayer();
});

createGroupsBtn.addEventListener("click", () => {
  groupsList.innerHTML = "";
  createGroups(playersManualarr);

});

txtdataload.addEventListener('change', (e) => {
const reader = new FileReader ()
reader.onload = () => {
const lines = reader.result.split('\n').map( (line) => {
let players2 = line.split(/[' ',;:]/);
txtdataload.playersx = players2;
groupsList.innerHTML = "";
createGroups(players2);


})

}
reader.readAsText(txtdataload.files[0])
}, false)

