const players = [];

const newPlayerInput = document.getElementById("newPlayerInput");
const newPlayerBtn = document.getElementById("newPlayerBtn");
const groupSizeInput = document.getElementById("groupSizeInput");
const createGroupsBtn = document.getElementById("createGroupsBtn");

const playersList = document.getElementById("playersList");
const groupsList = document.getElementById("groupsList");

const createGroups = () => {
  const { length } = players;
  const { value: groupSize } = groupSizeInput;

  const groupsCount = Math.ceil(length / groupSize);

  groupsList.innerHTML = `Liczba grup ${groupsCount}<br>`;

  for (let j = 1; j < groupsCount + 1; j++) {
    groupsList.innerHTML += ` Grupa ${j}<br>`;
    for (let i = groupSize * j - groupSize; i < groupSize * j; i++) {
      groupsList.innerHTML += players[i] ? `${players[i]}<br>` : "";
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
