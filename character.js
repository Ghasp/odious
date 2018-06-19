class character {
  constructor (){
    this.guid //the characters globlally unique id
    this.name //the name that floats above the characters head
    
    this.experienceEarned = xp // earned and leveled up xp.
    this.experienceBuffed = stats // this is xp plus any buffs
    this.items = items // an array of item objects
  }
}
