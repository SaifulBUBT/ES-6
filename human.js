import Animal from './animal';
class Human extends Animal{
    constructor(name, type, legs){
        super(name, type)
        this.legs = legs;
    }
    print(){
        super.print();
        console.log('legs :'+this.legs);
        
    }
}

export default Human;