function memberFactory(){
    this.createMember = function(name, type) {
        let member;
        

        if(type === "simple"){
            member = new SimpleMember(name);
        }else if( type === "standard"){
            member = new SuperMember(name);
        }else if( type === "super"){
            member = new SuperMember(name);
        }

        member.type = type;

        member.define = function(){
            console.log(`${this.name} (${this.type}) ${this.cost}`)
        }

        return member;
    }
}

const SimpleMember = function(name) {
    this.name = name;
    this.cost = "$5";
}

const StandardMember = function(name) {
    this.name = name;
    this.cost = "$15";
}

const SuperMember = function(name) {
    this.name = name;
    this.cost = "$25";
}

const members = [];
const factory = new memberFactory();

members.push(factory.createMember("Vihal", "super"))
members.push(factory.createMember("Rishabh", "standard"))
members.push(factory.createMember("Tejas", "simple"))

members.forEach(m => m.define())