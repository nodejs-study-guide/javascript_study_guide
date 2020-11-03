function getNameInUpperCase(userData) {
    return userData && userData.name && userData.name.toUpperCase();
    // if we use userData.name.toUpperCase() 
    // it will throw error if userData is undefined
    // So we normally use multiple condition 
    // instead of that we can use the above statement.
}
getNameInUpperCase(); //undefined;
getNameInUpperCase({}); //undefined;
getNameInUpperCase({name : "Noob master"}); // NOOB MASTER


// this was exmaple 5 in - https://levelup.gitconnected.com/secrets-of-logical-%EF%B8%8F-operator-in-javascript-98efbae5e8aa
