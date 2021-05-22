function distanceFromHqInBlocks(location){
    const hq = 42
    if (location >= hq){
        return(location - hq)
    }
    else if (location < hq){
        return (hq - location)
     } 
    }


function distanceFromHqInFeet(location){
    let feet = (distanceFromHqInBlocks(location)* 264)
    return (feet)
}
    
function distanceTravelledInFeet(block1,block2){
    let feet = ((block1 -block2) * 264)
    return Math.abs(feet)
   
}

function calculatesFarePrice(start, destination){
    const tripdist = distanceTravelledInFeet(start, destination)

    if (tripdist <= 400){
        return 0;
    }
    if (tripdist > 400 && tripdist <= 2000){
        return (tripdist - 400) * .02
}

    if (tripdist > 2000 && tripdist<= 2500){
        return 25
    }

    if (tripdist > 2500){
      return 'cannot travel that far'

    }

}








