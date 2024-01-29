window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function changeTDChild(tdNode){
  return () => {
    tdNode.innerHTML = ""; 
    tdNode.appendChild(document.createElement("input")); 
  }
}

function createButton(tdNode){
  const button = document.createElement("button"); 
  button.textContent = "edit text"; 
  button.onclick = changeTDChild(tdNode); 
  return button; 
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let button = createTDNode(createButton(col1)); 
    tableNode.appendChild(createTRNode([col1, button]));
  }
  document.getElementById("root").appendChild(tableNode);
}
