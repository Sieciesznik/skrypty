var firstTimeTool = 0;

var stoneAxeTool = {

	name: "stone axe",
	amount: 0

}

function makeTool(toolName){
	
	if(toolName == 'stone_axe'){
		console.log(toolName);
		if(branchResource.stored >= 10 && stoneResource.stored >= 2){
			if(firstTimeTool == 0){
				document.getElementById("tools_storage").style.display = 'block';
				firstTimeTool = 1;
			}
			
			branchResource.stored -= 10;
			stoneResource.stored -= 2;
			stoneAxeTool.amount++;
			branchResource.income = 2;
			displayWood();
			displayTools();
		}
	}
}