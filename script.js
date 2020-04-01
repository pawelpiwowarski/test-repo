const players = [];

const newPlayerInput = document.getElementById("newPlayerInput");
const newPlayerBtn = document.getElementById("newPlayerBtn");
const groupSizeInput = document.getElementById("groupSizeInput");
const createGroupsBtn = document.getElementById("createGroupsBtn");

const playersList = document.getElementById("playersList");
const groupsList = document.getElementById("groupsList");



const txtdata = document.querySelector('input[type="file"]');




const createGroups = () => {

  const { length } = players;
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

const addPlayer = () => {
  const { value: player } = newPlayerInput;

  players.push(player);
};

const renderPlayers = () => {
  playersList.innerHTML = "<ul>";
  players.map(player => (playersList.innerHTML += `<li>${player}</li>`));
  playersList.innerHTML += "</ul>";
};

newPlayerBtn.addEventListener("click", () => {
  addPlayer();
  renderPlayers();
});

createGroupsBtn.addEventListener("click", () => {
  createGroups();
});
