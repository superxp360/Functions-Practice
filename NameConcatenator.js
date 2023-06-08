function getName( firstName, LastName, MiddleName){
    
    const fullName = LastName + firstName + MiddleName;
    return fullName;
}

const personName = getName("Jake", "Paul,", " Thomas");

console.log(personName);

