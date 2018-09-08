var firstTimeBuilding = 0;

var hut = {
	
	name: 'Hut',
	amount: 0,
	cost: 50
	
}

var shed = {
	
	name: 'Shed',
	amount: 0,
	cost: 50
	
}

function buildBuilding(buildingName){
	if(buildingName == 'hut'){
		console.log(buildingName);
		if(branchResource.stored >= hut.cost){
			if(firstTimeBuilding == 0){
				document.getElementById("buildings_storage").style.display = 'block';
				firstTimeBuilding = 1;
			}
			
			branchResource.stored -= hut.cost;
			hut.amount++;
			displayWood();
			displayBuilds();
		}
	}
	if(buildingName == 'shed'){
		console.log(buildingName);
		if(branchResource.stored >= shed.cost){
			if(firstTimeBuilding == 0){
				document.getElementById("buildings_storage").style.display = 'block';
				firstTimeBuilding = 1;
			}
			
			branchResource.stored -= shed.cost;
			shed.amount++;
			branchResource.capacity += 10;
			woodResource.capacity += 5;
			stoneResource.capacity += 5;
			displayWood();
			displayBuilds();
		}
	}	
}

