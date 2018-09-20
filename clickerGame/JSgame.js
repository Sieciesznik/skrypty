
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function displayPlayer() {
	var container = document.getElementById("player_storage");
	
	if(typeof player_table !== "undefined"){
		container.removeChild(document.getElementById("player_table"));
	}
	
	try {
		playTableCreate(container);
	}
	catch(err) {
		console.log("table create fail");
		console.log(err);
	}
}

function displayWood() {
	var container = document.getElementById("resources_storage");
	
	if(typeof resources_table !== "undefined"){
		container.removeChild(document.getElementById("resources_table"));
	}
	
	try {
		resTableCreate(container);
	}
	catch(err) {
		console.log("table create fail");
		console.log(err);
	}
	
	// var bWoodUpgrade = document.getElementById("wood_upgrade_button");
	// var bWoodUpgradeString = "upgrade wood: "+woodResource.upgradePrice+" wood";
	// bWoodUpgrade.firstChild.data = bWoodUpgradeString;
	
	// var bWoodCollect = document.getElementById("wood_collection_button");
	// var bWoodCollectString = "wood +"+woodResource.income;
	// bWoodCollect.firstChild.data = bWoodCollectString;
}

function displayBuilds(){
	var container = document.getElementById("buildings_storage");
	
	if(typeof buildings_table !== "undefined"){
		container.removeChild(document.getElementById("buildings_table"));
	}
	
	try {
		buildTableCreate(container);
	}
	catch(err) {
		console.log("table create fail");
		console.log(err);
	}

}

function displayTools(){
	var container = document.getElementById("tools_storage");
	
	if(typeof tools_table !== "undefined"){
		container.removeChild(document.getElementById("tools_table"));
	}
	
	try {
		toolTableCreate(container);
	}
	catch(err) {
		console.log("table create fail");
		console.log(err);
	}

}

function playTableCreate(container) {
	
	var playArray = buildPlayArray();
	// create elements <table> and a <tbody>
	var tbl     = document.createElement("table");
	tbl.setAttribute("id", "player_table");
	var tblBody = document.createElement("tbody");

	// cells creation
	for (var j = 0; j < playArray.length; j++) {
		// table row creation
		var row = document.createElement("tr");

		var cell = document.createElement("td");
		var cellText = document.createTextNode(playArray[j].name);
		cell.setAttribute("class", "cell");
		cell.appendChild(cellText);
		row.appendChild(cell);
		
		var cell = document.createElement("td");
		var cellText = document.createTextNode(playArray[j].stored +"/"+ playArray[j].capacity);
		cell.setAttribute("class", "cell cell_right");
		cell.appendChild(cellText);
		row.appendChild(cell);
		
	
		tblBody.appendChild(row);
	}

	tbl.appendChild(tblBody);
	container.appendChild(tbl);
	tbl.setAttribute("border", "0");
}

function buildPlayArray(){

	var arr = new Array();
	arr.push({name: "Health", stored: playerInfo.hp, capacity: playerInfo.maxhp});
	arr.push({name: "Warmth", stored: playerInfo.warmth, capacity: playerInfo.maxwarmth});
	if(playerInfo.meat > 0){
		arr.push({name: "Meat", stored: playerInfo.meat, capacity: 20});
	}
	
	return arr;
}


function resTableCreate(container) {
	
	var resArray = buildResArray();
	// create elements <table> and a <tbody>
	var tbl     = document.createElement("table");
	tbl.setAttribute("id", "resources_table");
	var tblBody = document.createElement("tbody");

	// cells creation
	for (var j = 0; j < resArray.length; j++) {
		// table row creation
		var row = document.createElement("tr");

		var cell = document.createElement("td");
		var cellText = document.createTextNode(resArray[j].name);
		cell.setAttribute("class", "cell");
		cell.appendChild(cellText);
		row.appendChild(cell);
		
		var cell = document.createElement("td");
		var cellText = document.createTextNode(resArray[j].stored +"/"+ resArray[j].capacity);
		cell.setAttribute("class", "cell cell_right");
		cell.appendChild(cellText);
		row.appendChild(cell);
		
	
		tblBody.appendChild(row);
	}

	tbl.appendChild(tblBody);
	container.appendChild(tbl);
	tbl.setAttribute("border", "0");
}

function buildResArray(){

	var arr = new Array();
	if(branchResource.stored > 0){
		arr.push({name: "branches", stored: branchResource.stored, capacity: branchResource.capacity});
	}
	if(woodResource.stored > 0){
		arr.push({name: "wood", stored: woodResource.stored, capacity: woodResource.capacity});
	}
	if(stoneResource.stored > 0){
		arr.push({name: "stone", stored: stoneResource.stored, capacity: stoneResource.capacity});
	}
	return arr;
}

function toolTableCreate(container) {
	
	var toolArray = buildToolArray();
	// create elements <table> and a <tbody>
	var tbl     = document.createElement("table");
	tbl.setAttribute("id", "tools_table");
	var tblBody = document.createElement("tbody");

	// cells creation
	for (var j = 0; j < toolArray.length; j++) {
		// table row creation
		var row = document.createElement("tr");

		var cell = document.createElement("td");
		var cellText = document.createTextNode(toolArray[j].name);
		cell.setAttribute("class", "cell");
		cell.appendChild(cellText);
		row.appendChild(cell);
		
		var cell = document.createElement("td");
		var cellText = document.createTextNode(toolArray[j].amount);
		cell.setAttribute("class", "cell cell_right");
		cell.appendChild(cellText);
		row.appendChild(cell);
		
	
		tblBody.appendChild(row);
	}

	tbl.appendChild(tblBody);
	container.appendChild(tbl);
	tbl.setAttribute("border", "0");
}

function buildToolArray(){

	var arr = new Array();
	if(stoneAxeTool.amount > 0){
		arr.push({name: stoneAxeTool.name, amount: stoneAxeTool.amount});
	}
	if(stoneSwordTool.amount > 0){
		arr.push({name: stoneSwordTool.name, amount: stoneSwordTool.amount});
	}
	return arr;
}

function buildTableCreate(container) {
	
	var buildArray = buildBuildArray();
	// create elements <table> and a <tbody>
	var tbl     = document.createElement("table");
	tbl.setAttribute("id", "buildings_table");
	var tblBody = document.createElement("tbody");

	// cells creation
	for (var j = 0; j < buildArray.length; j++) {
		// table row creation
		var row = document.createElement("tr");

		var cell = document.createElement("td");
		var cellText = document.createTextNode(buildArray[j].name);
		cell.setAttribute("class", "cell");
		cell.appendChild(cellText);
		row.appendChild(cell);
		
		var cell = document.createElement("td");
		var cellText = document.createTextNode(buildArray[j].amount);
		cell.setAttribute("class", "cell cell_right");
		cell.appendChild(cellText);
		row.appendChild(cell);
		
	
		tblBody.appendChild(row);
	}

	tbl.appendChild(tblBody);
	container.appendChild(tbl);
	tbl.setAttribute("border", "0");
}

function buildBuildArray(){

	var arr = new Array();
	if(hut.amount > 0){
		arr.push({name: hut.name, amount: hut.amount});
	}
	if(shed.amount > 0){
		arr.push({name: shed.name, amount: shed.amount});
	}
	return arr;
}


// From start almost all hud elements are hidden

document.getElementById("realm_button").className += " active";
document.getElementById("realm_container").style.display = 'block';
document.getElementById("buildings_button").style.display = 'none';
document.getElementById("tools_button").style.display = 'none';

document.getElementById("resources_storage").style.display = 'none';
document.getElementById("tools_storage").style.display = 'none';
document.getElementById("buildings_storage").style.display = 'none';

document.getElementById("wood_collection_button").style.display = 'none';
document.getElementById("burn_branches_button").style.display = 'none';
document.getElementById('wood_alert').style.display = 'none';
document.getElementById('wood_alert').innerHTML = '&nbsp;';
document.getElementById('branch_alert').innerHTML = '&nbsp;';

document.getElementById("use_branch").style.display = 'none';
document.getElementById("use_sword").style.display = 'none';
document.getElementById("throw_rock").style.display = 'none';
displayPlayer();
displayWood();

var person = prompt("And here you are, standing alone in the middle of the forrest.\nYou can see only endless sea of trees and bonfire burning nearby.\nWhat is your name?");
var player_name = document.getElementById("player_name");
player_name.innerHTML = "<h2>" + person + "</h2>" ;

playerInfo.name = person;
setInterval(playerInfo.coolDown, 1000);

//var modalBeast = document.getElementById("modal_beast");
$("#modal_beast").modal({
            backdrop: 'static',
            keyboard: false
        });

$('#modal_beast').modal('hide');

setInterval(playerInfo.beastAttack, ((Math.random()*30) + 30) * 1000);
//Math.random()



