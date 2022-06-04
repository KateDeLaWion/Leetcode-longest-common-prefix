var longestCommonPrefix = function(strs) {
if (strs.length == 0) return "";
let prefix = strs[0];
for(let i = 1; i<strs.length; i++){
while (strs[i].indexOf(prefix)!==0){
prefix = prefix.substring(0, prefix.length -1);
}
}
return prefix
};

//Alternatie answer: 

var longestCommonPrefix = function(strs) {
    let prefix = '';
    if (strs.length == 0) return "";
    for(let i=0; i<strs[0].length; i++){
    let character = strs[0][i];
    for(let j=0; j<strs.length; j++){
    if (character !== strs[j][i]) return prefix;
    }
    prefix = prefix + character
}
    return prefix
};
