function produceDrivingRange(limit){
  return function(block1,  block2){
    range = Math.abs(parseInt(block1) - parseInt(block2)) - limit

    if(range > 0){
      return `${range} blocks out of range`
    } else {
      return `within range by ${range * -1}`
    }
  }
}

function produceTipCalculator(tip){
  return function(totalCost){
    return totalCost * tip;
  }
}
