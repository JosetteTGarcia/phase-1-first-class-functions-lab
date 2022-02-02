const returnFirstTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
    let newArray = drivers.slice(0,2);
    return newArray;
}

returnFirstTwoDrivers(); 

const returnLastTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
    let newArray = drivers.slice(-2);
    return newArray;
}

returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = multiplier => {
    return (fare) => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers= [], returnLastTwoDrivers) => {
    return returnLastTwoDrivers(drivers);
}