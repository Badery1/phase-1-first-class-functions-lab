const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyFare) {
    return function (total) {
        return multiplyFare * total;
    };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function (drivers, driversReturn) {
    return driversReturn(drivers);
};
