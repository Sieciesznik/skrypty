var playerInfo = {

	name: "",
	hp: 20,
	maxhp: 20,
	warmth: 100,
	maxwarmth: 100,
	meat:0,
	
	coolDown: function(){
		
		if(playerInfo.warmth > 0){
			playerInfo.warmth--;
			displayPlayer();
		}
		else{
			playerInfo.dealDamage(1);
		}
		
	},
	
	useBrand: function(){
		if(this.heat > 25){
			this.heat -= 25;
		}
		else{
			this.heat = 0;
		}
			beastInfo.dealDamage(5);
	},
	
	warmUp: function(heat){
		
		if(playerInfo.warmth + heat > 100){
			playerInfo.warmth = 100;
		}
		else{
			playerInfo.warmth += heat;
		}
		displayPlayer();
	},
	
	beastAttack: function(){
		
		beastInfo.hp = 6 + Math.floor(Math.random() * 10);
		beastInfo.attack = 1 + Math.floor(Math.random() * 5);

		$('#modal_beast').modal('show');
		var beast_stats = document.getElementById("beast_stats");
		beast_stats.innerHTML = "Beast has " + beastInfo.hp + " hp.";
		
	},
	
	dealDamage: function(dmg){
		if(this.hp - dmg > 0){
			this.hp -= dmg;
			displayPlayer();
		}
		else{
			this.hp = 0;
			displayPlayer();
			alert("You died, please refresh page to start again!");
		}
	},
	
	run: function(){
		branchResource.stored = 0;
		woodResource.stored = 0;
		stoneResource.stored = 0;
		hut.amount = 0;
		shed.amount = 0;
		this.dealDamage(beastInfo.attack);
		$('#modal_beast').modal('hide');
		displayWood();
	}
	
};

function refreashBeast(){
	
	var beast_stats = document.getElementById("beast_stats");
	beast_stats.innerHTML = "Beast has " + beastInfo.hp + " hp left.";
	
}

var beastInfo = {
	
	hp: 0,
	attack: 0,
	
	dealDamage: function(dmg){
		if(this.hp - dmg > 0){
			this.hp -= dmg;
			refreashBeast();
		}
		else{
			this.hp = 0;
			alert("You have killed the foul beast!");
			playerInfo.meat += 1 + Math.floor(Math.random()*3);
			$('#modal_beast').modal('hide');
		}
	}
	
};