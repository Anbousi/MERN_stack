class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name , cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        if(target instanceof Unit){
                target.res -= this.power;
        }
        else{
            console.log("Target must be Unit Card");
        }
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    attack(target){
        if(target instanceof Unit){
            if(this.stat === "resilience"){
                target.res += this.magnitude;
            }
            else if(this.stat === "power"){
                target.power += this.magnitude;
            }
        }

        else{
            console.log("Target must be Unit Card");
        }
    }
}

const u1 = new Unit("Red Belt Ninja" , 3 , 3 , 4);
const u2 = new Unit("Black Belt Ninja" , 4 , 5 , 4);
const e1 = new Effect("Hard Algorithm" , 2 , "increase target's resilience by 3","resilience" , 3);
const e2 = new Effect("Unhandled Promise Rejection" , 1 , "reduce target's resilience by 2","resilience" , -2);
const e3 = new Effect("Pair Programming" , 3 , "increase target's power by 2","power" , +2);

console.log("Unit1: ", u1);

e1.attack(u1);
console.log("Unit1 attacked by Effect1 ", u1);

e2.attack(u1);
console.log("Unit1 attacked by Effect2 ", u1);

e3.attack(u1);
console.log("Unit1 attacked by Effect3 ", u1);

u2.attack(u1);
console.log("Unit1 attacked by Unit2 ", u1);

e2.attack(e1);
u1.attack(e3);



