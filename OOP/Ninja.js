class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("Ninja name: ", this.name);
    }

    showStats(){
        console.log("Ninja's name: ", this.name ,"|" , "Ninja's strenght: " , this.strength,"|" ,"Ninja's speed: ", this.speed ,"|", "Ninja's health: ", this.health );
    }

    drinkSake(){
        this.health += 10;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();