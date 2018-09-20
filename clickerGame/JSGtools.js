var firstTimeTool = 0;

var stoneAxeTool = {

	name: "stone axe",
	amount: 0,
	
	useAxe: function(){
		
		if(woodResource.stored == woodResource.capacity){
			document.getElementById('branch_alert').innerHTML = 'Wood storage capacity reached!';
			return;
		}
		
		if(stoneAxeTool.amount > 0){
			--stoneAxeTool.amount;
			woodResource.addRes(5);
			displayWood();
			displayTools();
			if(stoneAxeTool.amount == 0){
				
				document.getElementById("wood_collection_button").style.display = 'none';
			}
		}
	}
};

var stoneSwordTool = {

	name: "stone sword",
	amount: 0,
	
	useSword: function(){
		this.amount--;
		beastInfo.dealDamage(20);
		playerInfo.dealDamage(beastInfo.attack);
		if(this.amount == 0){
			document.getElementById("use_sword").style.display = 'none';
		}
		displayTools();
	}
};

function makeTool(toolName){
	
	if(toolName == 'stone_axe'){
		if(branchResource.stored >= 10 && stoneResource.stored >= 2){
			if(firstTimeTool == 0){
				document.getElementById("tools_storage").style.display = 'block';
				firstTimeTool = 1;
			}
			document.getElementById("wood_collection_button").style.display = 'block';
			branchResource.subtractBranches(10);
			stoneResource.subtractStones(2);
			stoneAxeTool.amount++;
			displayWood();
			displayTools();
		}
	}
	else if(toolName == 'stone_sword'){
		if(woodResource.stored >= 2 && stoneResource.stored >= 5){
			if(firstTimeTool == 0){
				document.getElementById("tools_storage").style.display = 'block';
				firstTimeTool = 1;
			}
			document.getElementById("use_sword").style.display = 'inline';
			woodResource.stored -= 2;
			stoneResource.subtractStones(5);
			stoneSwordTool.amount++;
			displayWood();
			displayTools();
		}
	}
}