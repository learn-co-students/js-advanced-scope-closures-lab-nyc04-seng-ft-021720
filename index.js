
function produceDrivingRange(blockRange){
    return function(firstBlock,secondBlock){
        let difference = parseInt(secondBlock) - parseInt(firstBlock)
        if(difference > blockRange){
            return `${difference-blockRange} blocks out of range`
        }
        else {
            return `within range by ${difference}`
        }
    }
}


function produceTipCalculator(percentage){
    return function(total){
        return total * percentage
    }
}


function createDriver() {
    let DriverID = 0 ;
    return class Driver{
        constructor(name){
            this.name = name 
            this.id = ++DriverID
        }
    }
}