/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */


module.exports = function getTimeForEducation(focus , knowsProgramming , config) {
    let hoursForEducation = 800;
    let weeksCount;
    if(!knowsProgramming){
        hoursForEducation += 500;
    }
    weeksCount = Math.floor(hoursForEducation/config[focus]);
    if (hoursForEducation%config[focus]>0){
        weeksCount++;
    }
    return weeksCount;
  };