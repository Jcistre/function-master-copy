//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//const { stubFalse } = require("lodash");

function objectValues(object) {
    var output = [];
    for (var key in object) {
        output.push(object[key])
    }
    return output;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var output = [];
    for (var key in object) {
        output.push(key)
    }
    return output.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var output = [];
    for (var key in object) {
        if (typeof object[key] === "string")
        output.push(object[key])
    }
    return output.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array";
    } else if(collection === null){
        return false;
    } else if (collection instanceof Date){
        return false;
    } else if (typeof collection === 'object'){
        return 'object';
    } else {
        return false
    } 
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var output = string.split(' ');
   for (var i = 0; i < output.length; i++) {
       output[i] = output[i].charAt(0).toUpperCase() + output[i].slice(1);     
   }
   return output.join(' '); 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    for (var key in object) {
        if (key === 'name') {
            object['name'] = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
            return "Welcome " + object['name'] + "!"
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    for (var key in object) {
        if (key === 'name') {
            object['name'] = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
        }
        if (key === 'species') {
            object['species'] = object['species'].charAt(0).toUpperCase() + object['species'].slice(1);
        }
    }
    return object['name'] + " is a " + object['species'];
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    var output = [];
      if (Object.keys(object).length === 0){
        return "there are no noises";
      } else if (object.noises.length === 0) {
        return "there are no noises";
      } else {
        for (var i = 0; i <= object.noises.length - 1; i++) {
          output.push(object.noises[i]);
        }
      }
      return output.join(" ")
        }
    
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var output = string.split(" ");
    for (var i = 0; i <= output.length - 1; i++) {
        if (output[i].toLowerCase() === word.toLowerCase()) {
            return true;
        }
    }
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    var output = [];
    output.push(object)
    output[0].friends.push(name);
    return output[0];
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (Object.keys(object).length === 0) {
        return false;
    } else {
        for (var i = 0; i <= object.friends.length - 1; i++) {
            if (object.friends[i] === name){
                return true;
            }
            }
        }
        return false;
    }

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var list = [];
    var output = [];
    var current = null;
    for (var i = 0; i < array.length; i++){
        if (name === array[i].name){
            current = array[i];
        } else {
            list.push(array[i].name);
        }
    }
    if (current === null){
        return list;
    }
    for(var i = 0; i < list.length; i++){
        if (current.friends.indexOf(list[i]) == -1){
            output.push(list[i]);
        }
    }
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i <= array.length - 1; i++) {
        for (var key in object){
            if (array[i] === key) {
                delete object[key];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}