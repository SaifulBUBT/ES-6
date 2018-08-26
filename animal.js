class Animal{
    constructor(name, type){
        this.name= name;
        this.type = type;
        
    }

    print(){
        console.log(`name :${this.name}; type :${this.type}`);
        
    }
}

export default Animal;