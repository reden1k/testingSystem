const singleAnswerQuestions = [
    { 
        question: "Что такое JavaScript?",
        answer: "Язык программирования",
        wrong1: "Браузер",
        wrong2: "HTML",
        wrong3: "CSS"
    },

    {
        question: "Что делает оператор && в JavaScript?",
        answer: " Возвращает true, если оба операнда истинны ",
        wrong1: "Создает битовое ИЛИ обоих операндов ",
        wrong2: "Создает логическое ИЛИ обоих операндов ",
        wrong3: "Возвращает true, если хотя бы один из операндов истинен"
    },

    { 
        question: "Какой оператор используется для строгого сравнения в JavaScript?",
        answer: "===",
        wrong1: "!=",
        wrong2: "==",
        wrong3: "="
    },

    { 
        question: "Как объявить переменную в JavaScript?",
        answer: "let myVar = 5;",
        wrong1: "declare myVar = 5;",
        wrong2: "int myVar = 5;",
        wrong3: "$myVar = 5;"
    },

    { 
        question: "Что делает оператор === в JavaScript?",
        answer: "Сравнивает два значения на равенство с приведением типов.",
        wrong1: "Присваивает одно значение другому.",
        wrong2: "Сравнивает два значения на неравенство.",
        wrong3: "Сравнивает два значения на равенство без приведения типов."
    },

    { 
        question: "Какая функция используется для преобразования строки в число?",
        answer: "Number()",
        wrong1: "toInt()",
        wrong2: "parseStr()",
        wrong3: "convert()"
    },

    { 
        question: "Какие значения в JavaScript считаются ‘falsy’?",
        answer: "0, ‘’, null, undefined, NaN, и false",
        wrong1: "Только 0 и ‘’",
        wrong2: "Только null и undefined",
        wrong3: "Все значения считаются истинными"
    },

    { 
        question: "Как в JavaScript можно скопировать массив ?",
        answer: "Используя оператор распределения ...: let newArray = [...oldArray];.",
        wrong1: "С использованием метода Array.copy().",
        wrong2: "Присвоив один массив другому: let newArray = oldArray;.",
        wrong3: "С помощью метода Array.clone()."
    },

    { 
        question: "Какой метод позволяет добавить новый элемент в конец массива?",
        answer: "push()",
        wrong1: "pop()",
        wrong2: "shift()",
        wrong3: "unshift()"
    },

    { 
        question: "Какой метод позволяет добавить новый элемент в начало массива?",
        answer: "shift()",
        wrong1: "push()",
        wrong2: "pop()",
        wrong3: "unshift()"
    },

    { 
        question: "Какой метод позволяет удалить последний элемент массива?",
        answer: "pop()",
        wrong1: "shift()",
        wrong2: "push()",
        wrong3: "unshift()"
    },

    { 
        question: "Какой метод используется для объединения двух или более массивов в JavaScript?",
        answer: "concat()",
        wrong1: "join()",
        wrong2: "merge()",
        wrong3: "combine()"
    },

    { 
        question: "Как можно удалить последний элемент из массива в JavaScript?",
        answer: "pop()",
        wrong1: "removeLast()",
        wrong2: "deleteEnd()",
        wrong3: "spliceEnd()"
    },

    { 
        question: "Как можно найти индекс определенного элемента в массиве в JavaScript?",
        answer: "indexOf()",
        wrong1: "searchIndex()",
        wrong2: "findIndex()",
        wrong3: "getIndex()"
    },

    { 
        question: "Как можно определить, является ли один массив подмножеством другого массива в JavaScript?",
        answer: "Путем сравнения длин массивов",
        wrong1: "Используя метод subsetOf()",
        wrong2: "С помощью метода includesAll()",
        wrong3: "Через цикл и проверку каждого элемента"
    },
  ];

  const multipleAnswersQuestions = [
	//1
	{
		question: 'Какие из следующих значений являются ложными в JavaScript?',
		answer1: 'false',
		answer2: '0',
		answer3: `""`,
		wrong1: 'null',
	},

	//2
	{
		question: 'Какие из следующих методов массива изменяют исходный массив?',
		answer1: '.splice()',
		answer2: '.push()',
		answer3: `""`,
		wrong1: '.sort()',
	},

	//3
	{
		question: 'Какие типы данных в JavaScript являются примитивами?',
		answer1: 'Строки',
		answer2: 'Символы',
		wrong1: 'Объекты',
		wrong2: 'Функции',
	},

	//4
	{
		question:
			'Какие операторы используются для сравнения значений на равенство с приведением типов?',
		answer1: '==',
		answer2: '!=',
		wrong1: '===',
		wrong2: '!==',
	},

	//5
	{
		question:
			'Какие методы для работы со строками в JavaScript возвращают новую строку?',
		answer1: '.concat()',
		answer2: '.toUpperCase()',
		wrong1: '.push()',
		wrong2: '.pop()',
	},

	//6
	{
		question:
			'Какие из следующих методов массивов добавляют или удаляют элементы?',
		answer1: '.splice()',
		answer2: '.push()',
		wrong1: '.slice()',
		wrong2: '.map()',
	},

	//7
	{
		question:
			'Какие операторы JavaScript используются для работы с логическими значениями?',
		answer1: '&&',
		answer2: '||',
		wrong1: '+=',
		wrong2: '-=',
	},

	//8
	{
		question:
			'Какие из следующих утверждений верны относительно стрелочных функций в JavaScript?',
		answer1: 'Не имеют собственного контекста выполнения `this`',
		answer2: 'Не могут использовать ключевое слово `new`',
		wrong1: 'Всегда анонимны',
		wrong2: 'Могут использоваться как конструкторы',
	},

	//9
	{
		question:
			'Какие методы используются для преобразования объектов в строки в JavaScript?',
		answer1: 'JSON.stringify()',
		answer2: 'toString()',
		wrong1: 'toLocaleString()',
		wrong2: 'JSON.parse()',
	},

	//10
	{
		question:
			'Какие из следующих операторов JavaScript используются для управления потоком выполнения программы?',
		answer1: 'if',
		answer2: 'switch',
		wrong1: 'typeof',
		wrong2: 'instanceof',
	},

	//11
	{
		question:
			'Какие из следующих выражений создают новый массив?',
		answer1: '[]',
		answer2: 'new Array()',
		wrong1: '{}',
		wrong2: 'new Object()',
	},

	//12
	{
		question:
			'Какие из следующих утверждений верны для const в JavaScript?',
		answer1: 'Нельзя изменять значение',
		answer2: 'Блочная область видимости',
		wrong1: 'Можно изменять значение',
		wrong2: 'Можно объявить без инициализации',
	},

	//13
	{
		question:
			'Какие из этих событий мыши существуют в JavaScript?',
		answer1: 'onclick',
		answer2: 'onmouseover',
		wrong1: 'onkeyup',
		wrong2: 'onkeydown',
	},

	//14
	{
		question:
			'Какие из этих методов могут изменить исходный массив?',
		answer1: '.reverse()',
		answer2: '.sort()',
		wrong1: '.filter()',
		wrong2: '.map()',
	},

	//15
	{
		question:
			'Какие из следующих пунктов являются действительными способами объявления функций в JavaScript?',
		answer1: 'Функциональное выражение',
		answer2: 'Объявление функции',
		wrong1: 'Стрелочная функция',
		wrong2: 'Объявление переменной',
	},
];

  
