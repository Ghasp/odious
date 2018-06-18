
class experience {
    constructor(health, defense, strength, agility, stamina, intellect, recovery) {
        this._health = health //this can affect the amount of damage a character can take.
        this._defense = defense //decreases the damange affect a character recieves.
        this._strength = strength //affects anything that may be heavy or difficult to move.
        this._agility = agility //how quickly action can be completed and repeated.
        this._stamina = stamina //how often a task can be performed consecutively
        this._intellect = intellect //how complex of tasks the character can complete.
        this._recovery = recovery //how quickly stats can be recovered
        
        //crafting
        this._carpentry
        this._smithing
        this._sowing
        this._cooking
        this._fishing
        this._mining
        this._jewlery
    }

    increaseDefense(n=1) { }
    increaseStrength(n=1) { }
    increaseAgility(n=1) { }
    increaseIntellect(n=1) { }

    decreaseDefense(n=1) { }
    decreaseStrength(n=1) { }
    decreaseAgility(n=1) { }
    decreaseIntellect(n=1) { }
}
