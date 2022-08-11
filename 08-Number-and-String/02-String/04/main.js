function search(word) {
    let lowerWord = word.toLowerCase();
    let isMatch = lowerWord.includes('xxx') || lowerWord.includes('porn') || lowerWord.includes('sex')
    return isMatch;


}
console.log(search('pORN'));