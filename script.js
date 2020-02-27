let arr = [];
let newArr = [];
function getgroups() {
  let { length } = arr;
  let { value: groupSize } = document.getElementById("group");
  let groupsCount = Math.ceil(length / groupSize);

  document.getElementById("grupyoutput").innerHTML =
    "ilość grup " + groupsCount + "<br>";

  for (let j = 1; j < groupsCount + 1; j++) {
    document.getElementById("grupyoutput").innerHTML += " Grupa " + j + "<br>";
    for (let i = groupSize * j - groupSize; i < groupSize * j; i++) {
      document.getElementById("grupyoutput").innerHTML += arr[i]
        ? arr[i] + "<br>"
        : "";
    }
  }
}
function getplayers() {
  let first = document.getElementById("player").value;

  arr.push(first);
  let pval = "";
  for (var i = 0; i < arr.length; i++) {
    pval = pval + arr[i] + "<br>";
  }

  document.getElementById("zawodnicy").innerHTML = arr;
}

document.querySelector("#grupy").addEventListener("click", getgroups);
