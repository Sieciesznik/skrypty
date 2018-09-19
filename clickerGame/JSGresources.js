var firstTimeRes = 0;
var firstTimeHut = 0;
var firstTimeAxe = 0;

var branchResource = {

	name: "branch",
	stored: 0,
	capacity: 50,
	income: 1,
	upgradePrice: 20,
	upgradeMult: 1.2,
	upgradeMax: 10,
	
	collectRes: function(){
		if(firstTimeRes == 0){
			document.getElementById("resources_storage").style.display = 'block';
			firstTimeRes = 1;
		}
		
		if(this.stored >= 5){
			document.getElementById("burn_branches_button").style.display = 'block';
		}
		
		
		if(this.stored >= this.capacity){
			document.getElementById('branch_alert').innerHTML = 'Branches storage capacity reached!';
			return;
		}
		document.getElementById('branch_alert').innerHTML = '&nbsp;';
		this.stored += this.income;
		
		
		if(Math.random() >= 0.90){
			stoneResource.addRes(1);
		}
		
		if(this.stored > this.capacity){
			this.stored = this.capacity;
		}
		
		if(firstTimeAxe == 0){
			if(this.stored >= 10 && stoneResource.stored >= 2){
				var bTemp = document.getElementById("tools_button");
				bTemp.style.display = 'block';
				firstTimeAxe = 1;
			
			}
			else if(woodResource.stored >= 2 && stoneResource.stored >= 5){
					var bTemp = document.getElementById("tools_button");
					bTemp.style.display = 'block';
					firstTimeAxe = 1;
				
			}
		}
		
		displayWood();
	},
	
	burnBranches: function(){
		if(branchResource.stored >= 5){
			branchResource.stored -= 5;
			playerInfo.warmUp(10);
			
			if(branchResource.stored == 0){
				document.getElementById("burn_branches_button").style.display = 'none';
			}
			displayWood();
		}
	
	}
};

var woodResource = {

	name: "wood",
	stored: 0,
	capacity: 20,
	income: 1,
	upgradePrice: 20,
	upgradeMult: 1.2,
	upgradeMax: 10,
	
	collectRes: function(){
		this.stored += this.income;
		document.getElementById('wood_alert').innerHTML = '&nbsp;';
		displayWood();
	},
	
	addRes: function(amount){
		if(this.stored + amount <= this.capacity){
			this.stored += amount;
		}else{
			this.stored = this.capacity;
			document.getElementById('branch_alert').innerHTML = 'Wood storage capacity reached!';
		}
		
		if(firstTimeHut == 0){
			if(this.stored == 20){
				var bTemp = document.getElementById("buildings_button");
				bTemp.style.display = 'block';
				firstTimeHut = 1;
			}
		}
		if(firstTimeAxe == 0){
			if(this.stored >= 2 && stoneResource.stored >= 5){
					var bTemp = document.getElementById("tools_button");
					bTemp.style.display = 'block';
					firstTimeAxe = 1;
				
			}
		}
	},
	
	upgradeRes: function(){
		if (this.stored >= this.upgradePrice){
			this.stored -= this.upgradePrice;
			this.income += 1;
			this.upgradePrice = parseInt(this.upgradePrice * this.upgradeMult);
			displayWood();
		}else{
			document.getElementById('wood_alert').innerHTML = 'Not enough wood!';
		}
	}
	
};

var stoneResource = {

	name: "stone",
	stored: 0,
	capacity: 20,
	income: 1,
	upgradePrice: 20,
	upgradeMult: 1.2,
	upgradeMax: 10,
	
	collectRes: function(){
		this.stored += this.income;
		document.getElementById('wood_alert').innerHTML = '&nbsp;';
		displayWood();
	},
	
	addRes: function(amount){
		if(this.stored + amount <= this.capacity){
			this.stored += amount;
		}else{
			document.getElementById('branch_alert').innerHTML = 'Stone storage capacity reached!';
		}
	},
	
	upgradeRes: function(){
		if (this.stored >= this.upgradePrice){
			this.stored -= this.upgradePrice;
			this.income += 1;
			this.upgradePrice = parseInt(this.upgradePrice * this.upgradeMult);
			displayWood();
		}else{
			document.getElementById('wood_alert').innerHTML = 'Not enough wood!';
		}
	}
	
};











