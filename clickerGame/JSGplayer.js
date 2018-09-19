var playerInfo = {

	name: "",
	hp: 20,
	maxhp: 20,
	warmth: 100,
	maxwarmth: 100,
	
	coolDown: function(){
		
		if(playerInfo.warmth > 0){
			playerInfo.warmth--;
			displayPlayer();
		}
		else{
			alert("You have frozen to death!");
		}
		
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
		
		//var modalBeast = document.getElementById("modal_beast");
		$('#modal_beast').modal('show');
		
	}
	
};