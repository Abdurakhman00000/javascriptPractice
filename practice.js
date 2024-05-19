// PRACTICE

// const findIconicSupercar = prompt('Find a iconic Japanese supercar in 90-x');

// switch (findIconicSupercar) {
//     case 'Honda NSX':
//         console.log('Yes, you right! This is a NSX!');
//         break;
//         case 'Toyota Supra':
//             console.log('Supra is not supercar, this is a sportcar');
//             break;
//             case 'Nissan GTR' :
//                 console.log('GTR is sportcar not a supercar');
//                 break;
//                 case 'Lexus LFA' :
//                     console.log('Yes this is a iconic SUPERCAR but not from in 90-x, try again');
//                     break;
//                     default :
//                     console.log('Not correct, try again!');
// }

function calculator() {
  const firstNumber = +prompt("Please write a first NUMBER");
  const firstNumber2 = +prompt("Please write a second NUMBER");
  const actions = prompt("Please write a ACTION");

  if (actions == "+") {
    console.log(firstNumber + firstNumber2);
  } else if (actions == "-") {
    console.log(firstNumber - firstNumber2);
  } else if (actions == "*") {
    console.log(firstNumber * firstNumber2);
  } else if (actions == "/") {
    console.log(firstNumber / firstNumber2);
  } else if (actions == "%") {
    console.log(firstNumber % firstNumber2);
  } else {
    console.log("ERROR");
  }
}

// Сумма чисел:
// Напишите программу, которая считает сумму чисел от 1 до 10 с использованием цикла.
// let thisNum = 1;
// while (thisNum < 10) {
//   console.log(thisNum);
//   thisNum++;
// }

// Вывод четных чисел:
// Выведите все четные числа от 1 до 20 с использованием цикла.
// for (let thisNum2 = 1; thisNum2 <= 20; thisNum2 += 2) {
//   console.log(thisNum2);
// }

// Таблица умножения:
// С помощью вложенных циклов создайте таблицу умножения от 1 до 5. Выведите результат в консоль.
// for (let num1 = 1; num1 <= 9; num1++) {
//   let result2 = num1 * 9;
//   console.log(result2);
// }

// for (let num2 = 1; num2 <= 9; num2++) {
//   let result3 = num2 * 2;
//   console.log(result3);
//   break;
// }

// Факториал:
// Напишите программу, которая вычисляет факториал числа 5, используя цикл.
// for (let i = 1; i < 6; i++) {
//   let num = 5;
//   let result = num * i;
//   console.log(result);
//   break;
// }

// let number = 5;

// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//   factorial *= i;
// }

// console.log(`${number}, ${factorial}`);

// Поиск простых чисел:
// Напишите программу, которая выводит все простые числа от 1 до 50 с использованием цикла.

// Обратный отсчет:
// Выведите обратный отсчет от 10 до 1 с использованием цикла.

// Палиндром:
// Проверьте, является ли строка "level" палиндромом, используя цикл.

// Сумма цифр:
// Напишите программу, которая считает сумму цифр числа 12345 с использованием цикла.

// Треугольник из звездочек:
// Создайте программу, которая выводит треугольник из звездочек высотой 5 строк с использованием цикла.

// Поиск наименьшего элемента:
// Напишите программу для нахождения наименьшего элемента в массиве [5, 2, 8, 1, 6] с использованием цикла.

//1
// for (let a = 1; a <= 50; a++) {
//   console.log(a);
// }

// //2
// for (let b = 50; b >= 1; b--) {
//   console.log(b);
// }

// //3

// for (let c = 2; c <= 50; c += 2) {
//   console.log(c);
// }

// //4

// for (let d = 1; d <= 50; d += 2) {
//   console.log(d);
// }

// //5
// //10 - 40;

// for (let y = 10; y <= 40; y += 2) {
//   console.log(y);
// }

// //6

//

// let u = ['pen', 'pineapple', 'apple', 'pen']

///Задачки

// 1. Вывести числа от 1 до 10.
// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
//   break;
// }

// for (let num = 1; num < 10; num++) {
//   console.log(num);
// }
// // 2. Вывести таблицу умножения на 5.
// for (let num2 = 1; num2 <= 9; num2++) {
//   let result = num2 * 5;
//   console.log(result);
// }

// // 3. Посчитать сумму чисел от 1 до 100.
// for (let num3 = 1; num3 <= 100; num3++) {
//   console.log(num3);
// }

// for (let num4 = 100; num4 > 0; num4--) {
//   console.log(num4);
// }
// // 4. Вывести каждую вторую букву из слова "JavaScript".
// let word2 = "JavaScript";

// for (let num5 = 0; num5 <= word2.length; num5++) {
//   let result = word2[num5];
//   console.log(result);
// }

// for (let num6 = word2.length; num6 >= 0; num6--) {
//   let result2 = word2[num6];
//   console.log(result2);
// }

// // 5. Вывести все ключи объекта.
// const objectA = {
//   name: "John",
//   age: 18,
//   nationality: "American",
// };

// for (let wor = 0; wor <= Object.keys(objectA); wor++) {
//   let result3 = objectA[wor];
//   console.log(result3);
//   break;
// }

// console.log(Object.keys(objectA));

// // 6. Вывести все значения объекта.
// console.log(Object.values(objectA));

// // 7. Посчитать количество элементов в массиве.
// const arrs = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arrs.length);

// // 8. Вывести все числа массива в обратном порядке.
// console.log(arrs.reverse());

// // 9. Вывести индексы элементов массива.
// for (let ia = 0; ia < arrs.length; ia++) {
//   let resulta = ia + arrs[ia];
//   console.log(ia);
// }
// // 10. Проверить, есть ли в массиве число 10.
// const arrss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// // if (arrss.includes(10)) {
// //   for (let iw = 1; iw < 11; iw++) {
// //     break;
// //   }
// // }

// if (arrss.includes(10)) {
//   console.log("true 10");
// } else {
//   console.log("10 is not defined");
// }

// // 11. Вывести все символы строки в обратном порядке.
// let word3 = "Mountain";

// let resultWord = word3.split("").reverse().join("");
// console.log(resultWord);

// for (let it = 1; it >= word3.length; it--) {
//   let itResult = word3[it];
//   console.log(itResult);
// }

// // 12. Вывести все четные числа от 1 до 20.

// for (let ror = 1; ror <= 20; ror += 2) {
//   console.log(ror);
// }

// // 13. Вывести сумму всех элементов массива.
// const variable = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const ResVariable = variable.reduce((acc, el, index) => {
//   return acc + el;
// }, 0);

// console.log(ResVariable);

// // 14. Вывести все элементы массива, кроме первого.
// const variable2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const ResVariable2 = variable2.filter((element, index) => {
//   return element > 1;
// });

// console.log(ResVariable2);

// // 15. Посчитать количество гласных букв в слове.

// // 16. Проверить, все ли элементы массива больше 0.
// const variable3 = [1, 2, 3, 4, -1, 5, 6, 7];

// const ResVariable3 = variable3.every((element, index) => element > 0);

// console.log(ResVariable3);

// // 17. Посчитать сумму квадратов чисел от 1 до 10.
// let thisNum = 0;

// for (let nus = 1; nus <= 10; nus++) {
//   thisNum += nus * 2;
//   console.log(thisNum);
// }

// // 18. Вывести все кратные 3 числа от 1 до 30.
// let thisNum1 = 0;
// for (let nus1 = 1; nus1 <= 10; nus1++) {
//   thisNum1 += nus1 % 3 === 0;
//   console.log(thisNum1);
// }
// // 19. Вывести среднее арифметическое элементов массива.
// const arrray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function thisArrray(arrrays) {
//   const san2 = arrrays.reduce((acc, element, index, arr) => {
//     return acc + element;
//   }, 0);

//   return san2 / arrray.length;
// }

// const thisAnyArrayResult = thisArrray(arrray);

// console.log(thisAnyArrayResult);

// // 20. Вывести последние 5 элементов массива.
// const nur = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const NurResult = nur.filter((element, index) => {
//   return element > 4;
// });

// console.log(NurResult);

// // 21. Вывести все ключи объекта в верхнем регистре.
// const objectPresent = { name: "John", age: 18 };

// // 23. Посчитать произведение всех элементов массива.
// const sur = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const ResSur = sur.reduce((acc, el, ind, arr) => {
//   return acc + el;
// }, 0);

// const totalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // for (let iu = 0; iu <= totalNum[""]; iu++) {
// //   let resultIu = totalNum[iu];
// //   console.log(resultIu);
// //   break;
// // }

// let arr8 = [20, 12, 40, 0, 24, 50, 32];

// let res432 = 0;

// for (let num7 of arr8) {
//   if (num7 == 0) {
//     break;
//   } else {
//     res432 += num7;
//   }
// }

// console.log(res432);

// let sim = "#";

// let res = sim.split();

// for (let gol = 0; gol <= 10; gol++) {
//   res.push("#");
//   console.log(res);
//   break;
// }

//

// let arrs22 = [];

// let sim2 = "#";

// let ressim = sim2.split();

// for (i = 0; i <= 7; i++) {
//   ressim.push("#");
//   console.log(ressim);
// }

// let tor = "#";

// let tor2 = "";

// for (let y = 1; y < 8; y++) {
//   let resultTor = tor[y];
//   console.log(resultTor);
// }
//////////////////////////////////////////////////////////////
// биринчи
// for (let ir = 1; ir < 9; ir++) {
//   console.log("#".repeat(ir));
// }
/////////////////////////////////////////////////////////////////
// экинчи
// for (let ir = 7; ir > 0; ir--) {
//   console.log("#".repeat(ir));
// }
///////////////////////////////////////////////////////////////
// учунчу
// for (let irs = 1; irs < 100; irs++) {
//   console.log("0".repeat(irs));
//   break;
// }

// задача с нахождением суммы пробелов

// let strrss = "fkd jfdj jkdj j jjj jkj jkjk  jkj j ";

// let sumLeng = 0;

// for (let i5 of strrss) {
//   if (i5 === " ") {
//     sumLeng += 1;
//   }
// }

// console.log(sumLeng);
//////////////////////////////////////////////////////////////////////////

// Task 1
// Создайте переменную str и присвойте ей строковое значение.
// Ваша программа должна каждую четную по последовательности букву
// перезаписать верхним регистром. Результат нужно вывести в консоль.
// Подсказка: нужно использовать метод split().

// let str4 = "javascript";

// let resStr4 = str4.split("");

// for (let io = 1; io < resStr4.length; io++) {
//   if (io % 2 === 1) {
//     resStr4[io] = resStr4[io].toLocaleUpperCase();
//   }
// }

// let GlobalRes = resStr4.join("");
// console.log(GlobalRes);
///////////////////////////////////////////

// let str5 = "hondaracing";

// let resStr5 = str5.split("");

// for (let re = 1; re < resStr5.length; re++) {
//   if (re % 2 === 0) {
//     resStr5[re] = resStr5[re].toLocaleUpperCase();
//   }
// }

// let Global = resStr5.join("");
// console.log(Global);
////////////////////////////////////////////////
/////////////////////////////////////

///////////////////////////////////////////////////////
// const userPrint = prompt('Please print your words!');

// let FixPrint = userPrint.split('');

// for(let fix = 1; fix < FixPrint.length; fix ++) {
//   if(fix % 2 === 0) {
//     FixPrint[fix] = FixPrint[fix].toLocaleUpperCase();
//   }
// }

// let fixedPrint = FixPrint.join('');

/////////////////////////////////////////////////////////
// Task 2
// Eсть переменная
// которая принимает строку в качестве аргумента и возвращает
// количество гласных, которые содержатся в строке.
// Гласными являются [а], [о], [и], [ы], [у] и [э], [й], [е], [я], [ю], [ё]
// К примеру:
// 'достопримечательность'// --> 7
// 'субстанционализирующийся' // --> 11

// let exWord = "субстанционализирующийся";

// let toExWord = exWord.toLocaleLowerCase();

// let count = 0;

// const weWant = ["а", "о", "и", "ы", "у", "э", "й", "е", "я", "ю", "ё"];

// for (let we = 1; we < exWord.length; we++) {
//   if (weWant.includes(toExWord[we])) {
//     count++;
//   }
// }

// console.log(count);
//////////////////////////////////////

// let ussrWord = "Солхоз";

// let wordTolow = ussrWord.toLocaleLowerCase();

// let wantedSyms = ["а", "о", "и", "ы", "у", "э", "й", "е", "я", "ю", "ё"];

// let countU = 0;

// for (let us = 1; us < wordTolow.length; us++) {
//   if (wantedSyms.includes(wordTolow[us])) {
//     countU++;
//   }
// }

// console.log(countU);

// Task 3
// Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for (let ex1 = 0; ex1 < 100; ex1 += 2) {
//   console.log(ex1);
//   break;
// }

/////////////////////////////////////////////////////////////////////////////////////

// Task 4
// Дана строка: 'Hello, world!', необходимо вывести в консоль
// каждый символ по-отдельности(игнорировать спец. и пробельные
//   символы(то есть, ' ', '!', ',' выводить не нужно))

// let MyStr = "Hello, world!";

// for (let b = 1; b < MyStr.length; b++) {
//   if (b === "," && b === " " && b === "!") {
//     break;
//   }
//   for (let b1 = 1; b < MyStr.length; b++) {
//     let resB1 = MyStr[b1];
//     let globalB1 = resB1.split("");
//     let globalBb = globalB1.join();
//   }
// }
///////////////////////////////////////////////////////
// let MyStr2 = "Hello, world!";

// for (let f = 0; f < MyStr2.length; f++) {
//   if (MyStr2[f] !== " " && MyStr2[f] !== "," && MyStr2[f] !== "!") {
//     console.log(MyStr2[f]);
//   }
// }

// Task 5
// let arrNums = [12, 21, 27, 31, 45, 50 ];
// С помощью цикла for и оператора if выведите в console элементы
// массива, которые больше 20-ти, но меньше 30-ти.

// let arrNums = [12, 21, 27, 31, 45, 50];

// for (let to = 1; to < arrNums.length; to++) {
//   if (arrNums[to] > 20 && arrNums[to] < 30) {
//     console.log(arrNums[to]);
//   }
// }
///////////////////////////////////////////////////////

// Task 5
// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL'

// function fixWordToUp(wordTo) {
//   let specSyms = ["а", "о", "и", "ы", "у", "э", "й", "е", "я", "ю", "ё"];
//   for (let wo = 1; wo < wordTo.length; wo++) {
//     if (specSyms.includes(wordTo[wo])) {
//       wordTo[wo] = wordTo[wo];
//     }
//     let toUP = wordTo.toLocaleUpperCase();
//     wordTo[wo] += toUP;
//   }
// }

// console.log(fixWordToUp("hello"));

///////////////////////////////////////////////////////////////////////////////

// Task 6
// Создайте переменную arr и присвойте массив со строками.
// Напишите код, который переписывает первые буквы строк
// массива верхним регистром. Вы должны вывести новый массив в
// переменной newArr в console.log()

// Пример ввода:
// let arr = ["programming", "code", "javascript", "react"];

// for (let iter of arr) {
//   let fixedEl = iter.charAt(0).toLocaleUpperCase();
//   if (iter !== iter.charAt(0)) {
//     fixedEl += iter;
//     console.log(fixedEl);
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////

// Task 7
// Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!',
// вывести в консоль символы у которых четный индекс
// let PresentStr = "Hello, I'm Jack. I'm 25 years old and I Frontend developer!";

// let PresentStrTo = PresentStr.split();

//////////////////////////////////////////////////////////////////////////////////////////////////

// Task 1
// Создайте массив из чисел arr.
// Напишите цикл for of, который выведет в консоль произведение
// всех элементов массива.Если в переменной  хранится массив [1 2, 3, 4]
// Вывод должен быть:
// 24
// т.к. 24 = 1 x 2 x 3 x 4

// let ArrToNum = [1, 2, 3, 4];

// for (let j = 0; j < ArrToNum.length; j++) {
//   let result65 = ArrToNum[j] * ArrToNum[j];
//   console.log(result65);
// }

// let num88 = 1;
// for (let js of ArrToNum) {
//   num88 *= ArrToNum[js];
//   console.log(num88);
// }

////////////////////////////////////////////////////////////////////////////

// Task 2
// Создайте переменную num.Присвойте переменной числовое
// значение. Напишите цикл, который выведет в консоль сумму
// всех чисел от 1 до num включительно.
// Например, если в перемнной num хранится число 5
// Выводом будет:
// 15

// т.к. 15 = 1 + 2 + 3 + 4 + 5
// let num_ = 5;

// let count_ = 0;

// for (let i_ = 0; i_ <= num_; i_++) {
//   console.log(num_ + num_[i]);
//   break;
// }
////////////////////////////////////////////////////////////////////////
// Task 3
// Создате массив из чисел arr.
// С помощью цикла for ... of и оператора if, выведите в консоль
// элементы массива, значение которых больше 3, но меньше 10.
// Например, если в переменной  хранится значение: [1, 4, 2, 5, 8, 5, 0, -1, 7, 33]
// Вывод должен быть:

// 4, 5, 8, 7

// Примечание:
// Сделать со всеми видами циклов !!!

// let arr_ = [1, 4, 2, 5, 8, 5, 0, -1, 7, 33];

// for (let i_i = 0; i_i < arr_.length; i_i++) {
//   if (arr_[i_i] > 3 && arr_[i_i] < 10) {
//     console.log(arr_[i_i]);
//   }
// }

// let i7 = 0;

/////////////////////////////////////////////////////////////////
// while (i7 <= arr_.length) {
//   if (arr_[i7] > 3 && arr_[i7] < 10) {
//     console.log(arr_[i7]);
//   }
//   i7++;
// }
///////////////////////////////////////////////////////////////////
// let i8 = 0;
// do
//   if (arr_[i8] > 3 && arr_[i8] < 10) {
//     console.log(arr_[i8]);
//     break;
//   }
// while ((i8 < arr_.length, i8++));

// ///////////////////////////////////////////
// for (let i9 of arr_) {
//   if (arr_[i9] > 3 && arr_[i9] < 10) {
//     console.log(arr_[i9]);
//   }
// }

// for (let i10 in arr_) {
//   if (arr_[i10] > 3 && arr_[i10] < 10) {
//     console.log(arr_[i10]);
//   }
// }

//? FUNCTION

//задачи

// / Задание №1
// Создайте функцию checkTask которая выводит в консоль строку:
// Hello World!

function checkTask(word5) {
  console.log(word5);
}

checkTask("Hello World");

// Задание №2
// Напишите функцию checkTask(), которая при вызове будет возвращать строку:
// Привет, JavaScript!

const function_77 = function checkTask3() {
  console.log("Привет, JavaScript!");
};

function_77();

// Задание №3
// Создайте функцию checkTask(), которая принимает в качестве аргумента два числа и возвращает их сумму.
// Например, для чисел 2 и 20 функция возвратит:
// 22

function checkTask2(num_1, num_2) {
  console.log(num_1 + num_2);
}

checkTask2(2, 20);

////////////////////////////////////////////////////////////////
function loop(number_) {
  for (let number_2 = number_; number_2 < 10; number_2++) {
    console.log(number_);
  }
}

loop(1);

// Задание №4
// Напишите функцию checkTask(), которая в качестве аргумента принимает число - возраст.
// Если возраст больше или равен 18 возвратите строку:
// Добро пожаловать
// иначе:
// Вход запрещен

function checkTask4(age_) {
  if (age_ >= 18) {
    console.log("Добро пожаловать");
  } else {
    console.log("Вход запрещен");
  }
}

checkTask4(17);

// Задание №5
// Напишите функцию checkTask(), которая принимает целое число и возвращает сумму всех его цифр.
// Например, для числа , функция должна вернуть:
// 15 так как 4 + 5 + 6 = 15

function checkTask5(integ) {
  const taskTo = integ.toString();

  const taskToArr = taskTo.split("");

  const resTask = taskToArr.reduce((acc, el) => acc + el, 0);

  return resTask;
}

const resGlobal = checkTask5(456);

console.log(resGlobal);

//////////////////////////////////////////////////

// function checkTask6(integ2) {
//   for (let i = 0; i < integ2.length; i++) {
//     break;
//   }
// }

// const resCheck = checkTask6(456);

// console.log(resCheck);

function checkTask7(integer) {
  for (let i = 1; i <= integer.length; i++) {
    plusNum = integer[i] + integer[i];
    console.log(plusNum);
    break;
  }
}

const resInteger = checkTask7(456);

console.log(resInteger);

/////////////////////////////////////////////////////////////////

function checkTask8(integer_) {
  let toInteg = integer_.toString();

  let summa = 0;

  for (let int = 0; int < toInteg.length; int++) {
    summa += parseInt(toInteg[int]);
  }
  return summa;
}

const resInteger2 = checkTask8(456);

console.log(resInteger2);

////////////////////////////////////////////////
// HOME WORK

// Напишите функцию checkTask(), которая принимает два аргумента, строку и букву.
// Функция должна возвращать число повторений переданной буквы в строке.
// Например, если были переданы такие аргументы - , функция должна возвратить:
// 2
// т.к в строке 'hello' две буквы 'l'

function Check_Task(strin, letter) {
  let totalLetter = 0;

  for (les = 1; les < strin.length; les++) {
    if (strin[les] === letter) {
      totalLetter++;
    }
  }
  return totalLetter;
}

const total_Lett = Check_Task("hello", "l");

console.log(total_Lett);

// Задание №7
// Напишите функцию, которая принимает параметром элемент и возвращает его тип (typeof)
function findTypeOf(date) {
  let finded = typeof date;
  return finded;
}

const resFind = findTypeOf("");

console.log(resFind);

// Напишите функцию которая принимает массив из чисел. Находит количество четных чисел в массиве и их сумму. И выведите их на экран.
// К примеру:
// let arr = [1, 2, 3, 4, 5, 6]
// Четные числа в массиве: ${newArr} их сумма равна ${sum}
// Четные числа в массиве: [2, 4, 6] их сумма равна 12

function getEvenNumber(arr_s) {
  let totall = 0;
  for (let iq of arr_s) {
    if (arr_s[iq] % 2 === 0) {
      totall += arr_s[iq];
    }
  }

  return totall;
}

const totalResult = getEvenNumber([1, 2, 3, 4, 5, 6]);

console.log(totalResult);

// Задание № 11
// Напишите функцию, которая принимает массив с числами и выводит количество отрицательных чисел в этом массиве
// Пример: [7, -5, -29, 0, 62, 4, 5, -6, -27]

function getNegativNumber(NegArr) {
  let totalNegative = 0;

  for (let t = 1; t < NegArr.length; t++) {
    if (NegArr[t] < 0) {
      totalNegative++;
    }
  }

  return totalNegative;
}

const TotalNegative_ = getNegativNumber([7, -5, -29, 0, 62, 4, 5, -6, -27]);

console.log(TotalNegative_);

// Вывод: //4
// Напишите функцию checkTask которая принимает число и возвращает его факториал.
// Факториал числа - это умножение всех порядковых чисел от 1 до самого числа.

function getFactorialNum(presentNum) {
  let factorial_ = 1;

  for (let ci = 1; ci <= presentNum; ci++) {
    factorial_ *= ci;
  }
  return factorial_;
}

const resultFactorial = getFactorialNum(6);

console.log(resultFactorial);

////////////////////////////////////////////////
let arr = ["1", 2, "3", 4, "5", 6];
function checkTask__(arr) {
  let strArr = [];
  let numArr = [];

  for (let v of arr) {
    if (typeof v === "string") {
      strArr.push(v);
    } else {
      numArr.push(v);
    }
  }

  return `Строка [${strArr}] Число [${numArr}]`;
}

console.log(checkTask__(arr));

////////////////////////////////////////////////////////////////////

function toUpperCaseEven(arr123) {
  for (let x = 1; x < arr123.length; x++) {
    let evenElements = arr123[x].split("");

    for (let z = 1; z < evenElements.length; z++) {
      if (z % 2 === 0) {
        evenElements[z] = evenElements[z].toUpperCase();
      }
    }
    arr123[x] = evenElements.join("");
  }

  return arr123;
}

console.log(toUpperCaseEven(["hello", "hello", "hello"]));

////////////////////////////////////////////////////////////////
// задача
// function checkTask(begin, end) {
//     for(let ch = 1; ch <= end; ch++) {
//       console.log(ch);
//     }
// }
// checkTask(4, 8000);

/////////////////////////////////////////////////////////////////
// задача

////////////////////////////////////////////////////////////////////
//задача
// Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать
//  строку вида «rgb(23,100,134)».
//   Если аргументы не заданы, считать их равными нулю.

function getRgb(a, b, c) {
  return `rgb(${a === undefined ? 0 : a}, ${b === undefined ? 0 : b}, ${
    c === undefined ? 0 : a
  })`;
}

console.log(getRgb(4, 1, 2));
////////////////////////////////////////////////////////////////////
// задача
// const userPrintKey = prompt("Введите любое число");

// function totalNumbers(userPrintKey) {
//   let sum_ = 1;
//   for (let user = 1; user <= userPrintKey; user++) {
//     sum_ += user;
//   }
//   return sum_;
// }

// console.log(totalNumbers(userPrintKey));

// ЗАДАЧКИ 22-февраль
// Задание №1
// Дан массив ["Sultan", "Azamat", "Eldar", "Islam", "Taalai"]. Выведите в консоль имена Azamat и Islam с помощью цикла while

// let arrArr = ["Sultan", "Azamat", "Eldar", "Islam", "Taalai"];

// let i4 = 0;

// while (i4 < arrArr.length) {
//   if (i4 % 2 !== 0) {
//     console.log(arrArr[i4]);
//   }
//   i4++;
// }

// // Задание №2
// // Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла while

// let nun = 1;

// while (nun <= 10) {
//   let newArrs = [];
//   newArrs.push(nun);
//   console.log(newArrs);

//   nun++;
// }

// // Задание №3
// // Выведите в консоль все числа в промежутке с 50 до 99 включительно с помощью цикла.
// let nun3 = 50;

// while (nun3 <= 99) {
//   console.log(nun3);
//   nun3++;
// }

// // Задание №4
// // Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.
// let nun4 = 99;

// while (nun4 >= 50) {
//   console.log(nun4);
//   nun4--;
// }

// // Задание №5
// // Найдите самый длинный элемент массива и вывкдите в консоль
// // ["pen", "pineapple", "apple", "pen"]

// let aarr = ["pen", "pineapple", "apple", "pen"];

// let o = 1;

// while (o < aarr.length) {
//   console.log(aarr[o]);
//   o++;
// }

// // Задание №6
// // Так же найдите самый короткий элемент этого же массива
// let aarr1 = ["pen", "pineapple", "apple", "pen"];

// let o1 = 1;

// while (o1 > aarr1.length) {
//   console.log(aarr1[o1]);
//   o1--;
// }

// // Задание №7
// // Выведите в консоль все элементы с четными индексами.
// // [1,2,3,4,5,6,7,8,9]

// let arras = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let p = 0;

// while (p < arras.length) {
//   if (p % 2 === 0) {
//     console.log(p);
//   }
//   p++;
// }

// // Задание №8
// // Дан двумерный массив. Выведите в консоль все элементы.
// // [[1,2], [3,4], [5,6]]

// let dualArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let d = 1;

// while (d < dualArr.length) {
//   console.log(dualArr);
//   d++;
// }

//HOME WORK
// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)

// Пример №1:
// Ввод: tenet
// Ответ: true

// Пример №2:
// Ввод: my gym
// Ответ: true

// Пример №3Ж
// Ввод: nolan
// Вывод: false

function palindrom_(word_) {
  const fixedWord = word_.toLowerCase().slice();

  let start = 0;
  let end = word_.length - 1;

  while (start > end) {
    if (word_[start] !== word_[end]) {
      console.log("false");
    } else {
      console.log("true");
    }
    (fixedWord += start), end;

    return fixedWord;
  }
}

console.log(palindrom_("tenet"));

//////////////////////////////////////////////////

// function palindrom2(word_1) {
//   const fixedWorr = word_1.toLowerCase().slice();

//   const fixered = fixedWorr.split("").reverse().join("");

//   const choose = fixedWorr === fixered;

//   console.log(choose);
// }

// palindrom2("tenet");

// Task 8
// Ввод: functionLimit(50)tenet
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// function functionLimitX(limitX) {
//   let curLimit = 1;

//   for (let limX = limitX; limX <= 800; limX += 50) {
//     console.log(limX);
//     if (limX === 800) {
//       curLimit *= -1;
//     }
//   }
// }

// functionLimitX(50);

// let person = {
//   name: "John",
//   age: 10,
//   work: ["HTML", "CSS", "JS"],
// };

// for (let i of person.work) {
//   person.work[i] = "is cool";
// }

// console.log(person.work);

///    HOME WORK

// Задание №1
// С помощью цикла написать код который находит наибольший общий
// делитель у двух чисел.
// Пример: для чисел 54 и 24 наибольший общий делитель равен 6.

// Задание №2
// Используя цикл for вывести все четные числа от 1 до 100;

for (let bb = 1; bb < 100; bb++) {
  // console.log(bb);
}

// Задание №3
// Подсчитайте сумму чисел в диапазоне от 1 до 20 с помощью цикла for, while и do...while.

//for
for (let bs = 1; bs < 20; bs++) {
  // console.log(bs);
}

//while
let br = 1;
while (br < 20) {
  console.log(br);
  br++;
}

//do...while
let brr = 1;
do {
  console.log(brr);
  brr++;
} while (brr < 20);

// Задание №4
// Создайте массив из 20 случайных чисел в диапазоне от 1 до 100. Выведите в консоль
// все числа, которые делятся на 3
// все числа, которые делятся на 5
// все числа, которые делятся на 10

let presentSTR = [
  1, 2, 78, 43, 12, 24, 89, 90, 99, 96, 91, 3, 7, 42, 34, 38, 31, 66, 69, 88,
  19,
];

for (let pre of presentSTR) {
  if (pre % 3 === 0) {
    console.log(pre);
  }
}

for (let pre2 of presentSTR) {
  if (pre2 % 5 === 0) {
    console.log(pre2);
  }
}

for (let pre3 of presentSTR) {
  if (pre3 % 10 === 0) {
    console.log(pre3);
  }
}

// Задание №5
// Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

function chooseTwoNum(numONE, numTWO) {
  if (numONE > numTWO) {
    console.log(1);
  } else if (numONE < numTWO) {
    console.log(-1);
  } else {
    console.log(0);
  }
}

console.log(chooseTwoNum(2, 3));
// Задание №5
// Напишите функцию, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.

// const user123Print = prompt('Please print number!')

// function userPrintFunction (user123Print) {
//   let sUM = 1;

//   for(let ss = 1; ss <= user123Print; ss++) {
//     sUM += ss;
//   }

//   return sUM;
// }

// console.log(userPrintFunction(user123Print));

// Задание №6
// Найдите самое длинное слово в строке и выведите его в консоли
// const str = "I am a Megalodon, oceans feeling like a pond"

function findBiggerStr(strq) {
  let strqToArr = strq.split("");
  let longWord = "";

  for (const tt of strqToArr) {
    if (tt.length > longWord.length) {
      longWord = tt;
    }
  }
  return longWord;
}


console.log(findBiggerStr("I am a Megalodon, oceans feeling like a pond"));

// Задание №8
// Напишите функцию для расчета площади и окружности круга по радиусу.
// Ввести радиус:
// Вывести площадь и окружность

function findAreaAndRangeCircle(radius) {
  const findAreaByFunction = 3.14 * radius ** 2;
  const findRangeByFunction = 2 * 3.14 * radius;

  return {
    Area: findAreaByFunction,
    Range: findRangeByFunction,
  };
}

console.log(findAreaAndRangeCircle(5));

/// ARRAY METODS

//! reduce()

// let arr__ = [12, 4, 2, 99, 6, 8, 4];

// let resArr = arr__.reduce((acc, el, index) => el, 0);

// console.log(resArr);

// При помощи метода reduce, вывести средний возраст всех юзеров.

// let users = [
//   {
//     name: "Askat",
//     age: 21,
//   },
//   {
//     name: "Mirdin",
//     age: 20,
//   },
//   {
//     name: "Begimay",
//     age: 24,
//   },
//   {
//     name: "Mikhail",
//     age: 27,
//   },
//   {
//     name: "Almas",
//     age: 38,
//   },
// ];

// let resUsers = users.reduce((acc, el) => acc + el.age , 0)

// let resUsers2 = resUsers / users.length;

// console.log(resUsers2);

// Нам дана функция checkTask(arr) которая принимает массив с объектами с ключами name. Нужно перебрать этот массив так,
//  чтобы функция нам вернула просто массив с именами в виде строк.

// Пример: Дан массив:

// [
//   {
//     name: 'Askat',
//   },
//   {
//     name: 'Begimay',
//   },
//   {
//     name: 'Mirdin',
//   },
//   {
//     name: 'Aiday',
//   },
// ];

// Результат: ["Askat", 'Begimay', 'Mirdin', 'Aiday'];

// let usersName = [
//   {
//     name: "Askat",
//   },
//   {
//     name: "Begimay",
//   },
//   {
//     name: "Mirdin",
//   },
//   {
//     name: "Aiday",
//   },
// ];

// let resultUsersName = usersName.map((el, ind) => {
//   return el.name;
// });

// console.log(resultUsersName);

// Вам дана функция которая принимает строку в виде предложения. Необходимо заменить регистр каждого символа и вернуть строку.
// Пример: Дана строка 'The Quick Brown Fox'. Результатом должно быть: 'tHE qUICK bROWN fOX'

// function checkTask (strCheck) {
//   let toCheck = strCheck.split('')
//   let resultCheck = toCheck.map((el, ind) => {
//     if(el === el.toUpperCase()) {
//       return el.toLowerCase()
//     } else {
//       return el.toUpperCase()
//     }
//   })

//   return resultCheck.join('')
// }

// console.log(checkTask('The Quick Brown Fox'));

// Дана функция checkTask(arr) которая принимает массив с предложениями. Необходимо вернуть новый массив
//  с количеством слов в каждом предложении.

// Пример: ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

// function checkTaskss (arrSTR) {
//   let resultExArr = arrSTR.map((el, ind) => {
//     if(el.length !== ' ') {
//       return el.length;
//     }
//   })

//   return resultExArr;
// }

// console.log(checkTaskss(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию checkTask(arr), принимающую в аргументы массив состоящий из других массивов.
// Используя метод reduce(), найдите сумму всех элементов.
// Результат выведите в консоль.
// Например, для массива:
// [1,2, [4,5,6], [7,8]]
// Вывод будет:
// 33

// function checkTaskO (arroo) {

// }

// console.log(checkTaskO([1,2, [4,5,6], [7,8]]));

// Напишите функцию checkTask(arr), которая получает в качестве параметра массив.
// Функция должна перебрать все его элементы и вывести сам элемент, а также тип данных элемента - числовой, либо не числовой.
// К примеру, для массива:
// ['Молоко', -77, 11, 'Мед', -88]
// Вывод будет следующим:
// Молоко - не число
// -77 - число
// 11 - число
// Мед - не число
// -88 - число

function checkTaskk(arrw) {
  let resultw = arrw.map((el) => {
    if (typeof el === "number") {
      return `${el} - число`;
    } else {
      return `${el} - не число`;
    }
  });

  return resultw;
}

console.log(checkTaskk(["Молоко", -77, 11, "Мед", -88]));

/////////////////////////////////////////////////////////////////////////////////////

let person = [
  {
    name: "John",
    price: 2000,
    work: "IT-BACKEND",
    salary: 20000,
  },
  {
    name: "John",
    price: 2000,
    work: "BANK",
    salary: 9000,
  },
  {
    name: "John",
    price: 2000,
    work: "IT-FRONTEND",
    salary: 15000,
  },
  {
    name: "John",
    price: 2000,
    work: "JOURNALIST",
    salary: 10000,
  },
];

for (let ob in person) {
  if (ob % 2 === 0) {
    console.log(person[ob]);
  }
}

///

resultOb = person.filter((el) => {
  if (el.work === "IT-FRONTEND" || el.work === "IT-BACKEND") {
    console.log(el);
  }
});

// Дан массив с объектами:
let user = [
  { name: "Jack", age: 15 },
  { name: "Helen", age: 34 },
  { name: "Tom", age: 20 },
  { name: "Bob", age: 54 },
  { name: "Jessica", age: 13 },
];
// задача: реализовать рассылку сообщений типа: 'Hello, [Здесь должно быть имя клиента],
// the grand sale has begun, prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет

let resulttt = user.map((el) => (el.age >= 18 ? `hello ${el.name}` : el));
console.log(resulttt);

// HOMEE WORRK

// let arr = [12, 12, 4, 7, 3, 8, 9, 8, 4];
// delete Dublicate items

let arrElements = [12, 12, 4, 7, 3, 8, 9, 8, 4];

let resultArrElements = arrElements.filter((elements, index, array) => {
  return array.indexOf(elements) === index;
});
console.log(resultArrElements);

// let arr = [1, 2, 3, 4, 0, 5, 6];
// сумма до первого нуля использовать reduce

let arrElements2 = [1, 2, 3, 4, 0, 5, 6];

// for(let arrE = 1; arrE < arrElements2.length; arrE++ ) {
//   console.log(arrElements2[arrE]);
//   break
// }

let resArrElements = arrElements2.reduce((acc, el, ind, arr) => {
  return arr.includes(3, 1) ? acc + el : 'syntax error'
})

console.log(resArrElements); 

// let arr = [1, 4, 2, 5, 8, 3, 6, 7, 8];
// сорт 1 - 8 не использовать sort()

let arrElements3 = [1, 4, 2, 5, 8, 3, 6, 7, 8];

