const findTheOldest = function (people) {
  return people.reduce((prev, cur) => {
    let curDate = new Date();
    let prevYOD = prev.yearOfDeath || curDate.getFullYear();
    let curYOD = cur.yearOfDeath || curDate.getFullYear();

    return prevYOD - prev.yearOfBirth > curYOD - cur.yearOfBirth ? prev : cur;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
