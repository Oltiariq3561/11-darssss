// 1 - masala
// function getLastChar(str) {
//     let a = 'salom'
//     let res = a.at(-1);
//     console.log(res);
// }
// getLastChar()

// 2 - masala
// TUSHUNMADIM

// 3 - masala
// function getFirstCharCode(str) {
//     let a = 'salom'
//     res = a.charCodeAt(0);
//     console.log(res);
// }
// getFirstCharCode();

// 4 - masala
// function getStringLengthDescription(str) {
//     let a = "assalomu alaykum"
//     let res;
//     if (a.length > 10) {
//         console.log(a.length);
//         res = 'uzoq string'
//     } else {
//         console.log(a.length);
//         res = 'uzoq string'
//     }
//     console.log(res);
// }

// getStringLengthDescription();

// 5 - masala
// function getCharCodes(str) {
//     let a = 'salom'
//     let res = a.charCodeAt(0);
//     let res1 = a.charCodeAt(1)
//     let res2 = a.charCodeAt(2)
//     let res3 = a.charCodeAt(3)
//     let res4 = a.charCodeAt(4)
//     console.log(res);
//     console.log(res1);
//     console.log(res2);
//     console.log(res3);
//     console.log(res4);
// }
// getCharCodes()

// // 6-masala
// // function getFirstThreeChars(str){
// // let a = 'salom'
// // let res = a.slice(0,3)
// // console.log(res);
// // }
// // getFirstThreeChars();

// 7 - masala
// function getLastFiveChars(str) {
//     let a = 'assalomu alekum'
//     let res = a.slice(9, -1);
//     console.log(res);
//     return res
// }
// getLastFiveChars()

// 8 - masala
// function getMiddleChars(str) {
//     let res;
//     if (str.length % 2 == 1) {
//         let middleIndex = Math.trunc(str.length / 2);
//         res = str.substring(middleIndex = middleIndex + 1)
//     }

//     return res
// }
// console.log(getMiddleChars("hello"));

// 9 - masala
// function getThreeCharsFromFifthIndex(str) {
//     let res = str.substr(5, 3)
//     return res
// }
// console.log(getThreeCharsFromFifthIndex('assalomu alaykumm'));

// 10 - masala
// function getFirstTenChars(str) {
//     let res = str.substring(0, 10);
//     return res
// }
// console.log(getFirstTenChars('assalomu alaykum'));

// 11 - masala
// function getLastThreeChars(str) {
//     let res;
//     if (str.length % 2 == 1) {
//         let middleIndex = Math.trunc(str.length / 2);
//         res = str.substring(middleIndex = middleIndex)
//     }

//     return res
// }
// console.log(getMiddleChars("hello"));

// 12 - masala
// function getSubstringFromSecondIndex(str) {
//     let res = str.substring(2);
//     return res;
// }
// console.log(getSubstringFromSecondIndex('salomm'));

// 13 - masala
// function convertToUpperCase(str) {
//     let res = str.toUpperCase()
//     return res;
// }
// console.log(convertToUpperCase('salom'));

// 14 - masala
// function convertToLowerCase(str) {
//     let res = str.toLowerCase()
//     return res;
// }
// console.log(convertToLowerCase('SALOM'));

// 15 - masala
// function concatStrings(str1, str2) {
//     let res = str1.concat(str2);
//     return res;
// }
// console.log(concatStrings('salom', 'vali'));

// 16 - masala
// function trimString(str) {
//     let res = str.trim()
//     return res
// }
// console.log(trimString('                             salom                '));

// 17 - masala
// function padStringStart(str) {
//     let res = str.padStart(11, '*')
//     return res
// }
// console.log(padStringStart('salom'));
// 18 - masala
// function padStringEnd(str) {
//     let res = str.padEnd(11, '*')
//     return res
// }
// console.log(padStringEnd('salom'));

// 19 - masala
// function trimEndString(str) {
//     let res = str.trimEnd()
//     return res
// }
// console.log(trimEndString('                      salomat                       '));

// 20 - masala
// function trimStartString(str) {
//     let res = str.trimStart()
//     return res
// }
// console.log(trimStartString('                      salomat                       '));

// 21 - masala
// function padStringWithZerosStart(str) {
//     let res = str.padStart(12, 0)
//     return res
// }
// console.log(padStringWithZerosStart('salomat'))

// 22 - masala
// function padStringWithZerosEnd(str) {
//     let res = str.padEnd(12, 0)
//     return res
// }
// console.log(padStringWithZerosEnd('salomat'))

// 23 - masala
// function repeatString(str, N){
// let res = str.repeat(N)
// return res
// }
// console.log(repeatString('salom' , 5));

// 24-masala
// function replaceAppleWithOrange(str){
// let res = str.replace('Apple' , 'orange') ;
// return res;
// }
// console.log(replaceAppleWithOrange('Apple N1'));

// 25-masala
// function FirstSmallAToBigA(str){
//     let res = str.replace('a' , 'A') ;
//     return res;
//     }
//     console.log(FirstSmallAToBigA('Apple N1'));

// 26-MASALA
// function replaceAllCatsWithDogs(str){
//     let res = str.replaceAll('cat' , 'dog') ;
//     return res;
//     }
//     console.log(replaceAllCatsWithDogs('cat dog cat cat cat dog cat dog cat',));

// 27-masala
// function replaceAllSmallEToBigE(str){
//     let res = str.replaceAll('e' , 'E') ;
//     return res;
//     }
//     console.log(replaceAllSmallEToBigE('Apple N1 enemy'));

// 28-masala
// function splitBySpaces(str){
// let res = str.split( )
// return res
// }
// console.log(splitBySpaces('salomm nima gaplar tinchmi'));

// 29-masala
// function splitByCommas(str){
//     let res = str.split(" ")
//     return res
//     }
//     console.log(splitByCommas('salomm nima gaplar tinchmi'));

// 30-masala
// function splitByEachCharacter(str){
//     let res = str.split("")
//     return res
//     }
//     console.log(splitByEachCharacter('salomm nima gaplar tinchmi'));

// 31-masala
// function splitByEachCharacter(str){
//     let res = str.split("*");
//     return res
//     }
//     console.log(splitByEachCharacter('salomm nima gaplar tinchmi'));

// 32-masala
// (repeat, replace, split)**: Berilgan stringdagi barcha "a" harflarini "*" bilan almashtiradigan, so'ngra har bir so'z uchun 3 marta takrorlaydigan va natijada bo'sh joylar bilan ajratib, massivga aylantiradigan `processString(str)` funksiyasini yozing.
// function processString(str) {
// let res = str.replaceAll('a','*');
// let res1 = str.repeat(3); 
// return res1, res
// }
// console.log(processString('salom yaxshimisila iPhone legenda'));

// 33-misol
// TUSHUNMADM

// 43-masala
// function findFirstAppleIndex(str){
// return str.indexOf('Apple') 
// }
// console.log(findFirstAppleIndex('samsung redmi huawey Apple'));

// 44-masala
// function findFirstAppleIndex(str){
//     return str.indexOf('Apple') 
//     }
//     console.log(findFirstAppleIndex('samsung redmi huawey Apple'));

// 45-masala
// function findFirstAppleIndex(str){
//     return str.indexOf('@') 
//     }
//     console.log(findFirstAppleIndex('!#$%^&*@#$'));

// 46-masala
// function searchBanana(str){
// return str.search('banana');
// }
// console.log(searchBanana(' mevalar banana applee '));

// 47-masala
// function searchForDigit(str) {
//     let index = str.search(/\d/);
//     return index;
// }
// console.log(searchForDigit("assalomu alaykim yaxsh1m1s1z b1rodar"));

// 48-masala
// function includesCat(str){
// let res = str.includes('cat')
// return res
// }
// console.log(includesCat('kjjs xjnedjo sjoexncatokzdfn'));

// 49-masala
// function includes2024(str){
// let res = str.includes('2024')
// return res;
// }
// console.log(includes2024('kdsj 2024'));

// 50-masala
// function startsWithHello(str){
// let res = str.startsWith('Hello')
// return res
// }
// console.log(startsWithHello('Hello world'));