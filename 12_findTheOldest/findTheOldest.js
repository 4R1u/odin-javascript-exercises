const findTheOldest = function(people) {
    const ages = people.map((person) => 
        (("yearOfDeath" in person)
        ? person.yearOfDeath
        : new Date().getFullYear()) 
        - person.yearOfBirth
    );
    const oldestAge = Math.max(...ages);
    console.log(ages);
    console.log(oldestAge);
    return people[ages.indexOf(oldestAge)];
};

// Do not edit below this line
module.exports = findTheOldest;
