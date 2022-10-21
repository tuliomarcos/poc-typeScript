## types guards
```ts
	function fn(a: number | string) {
		if (typeof a === number) a.toFixed()
		a.toLowerCase()
	}

```

- **typeof** serve pra testar tipos primitivos: string, number, boolean e funcion
- **Array.isArray(arrAqui)** pra verificar se é array

> typeScript não tem como saber os tipos de resultado de uma request, tem que fazer manualmente pq a request é runTime e o ts é compileTime

### union Types
```ts
let lero: number | string = 10
const fn: string (a: number, b: string) => number + string // ta falando que o retorno da fn sempre será string
```

### tipa Arrays
```ts
const arr: number[] = [1, 2, 3]
const arr2: Array<number> = [1, 2, 3] //generics type <>

const arr: number[] | string[] = [1, 2, '3'] //da erro, não pode array com index de dois tipos diferentes dessa forma
const arr2: Array<number | string> = [1, 2, '3', '5'] //com generics eu POSSO misturar os tipos dos index do array

const arr: [number, string] = [10, '10'] //vai ter obrigatóriamente só dois index no array
const arr: [number | string, string] = ['10', '10']

```

### tipa objetos Types e Interface
```ts
// exemplo com array de objetos
const opcoesDeFiltros: Filtros = [
	{
		id: 0,
		titulo: 9505,
		lista: [
			{ id: '00', label: 6954 },
			{ id: '01', label: 7820 },
		],
		lero: [12, 4141, 515151]
	},
	{
		id: 1,
		titulo: 9533,
		lista: [
			{ id: '10', label: 7039 },
			{ id: '11', label: 7051 },
		],
	},
]

type Filtros = ({
	id: number,
	titulo: number,
	lista: {
			id: string,
			label: number,
	}[],
	lero: number[],
} | {
	id: number,
	titulo: number,
	lista: {
			id: string,
			label: number,
	}[],
	lero?: undefined, //aqui ta falando que pode não ter essa propriedade em algum objeto
})[]

type Person = {
	name: string,
	age: number,
	hobbies: string[]
}

type Person2 = Person & { //extendendo um tipo
	surname: string
}

interface Person { //interface é mutavel, é bom usar em lib quando quer aumentar o tipo de algo
	name: string,
	age: number,
	hobbies: string[]
}

interface Person { //interface mergea quando usado novamente
	surname: string
}

const person: Persson2 = {
	name: 'Tulio',
	age: 26,
	hobbies: ['dance', 'MuayThai'],
	// vai dar erro falando que ta fantando o surname
}
```

### formas de tipar função com type e interface
```ts
type Sum = (a: number, b: number) => number

interface Sum { //sim, tem que abrir o objeto mesmo não tendo obj kkk
	(a: number, b: number): number
}

const sum: Sum = (a, b) => a + b
function sum: Sum (a, b) {
	return a + b
}
```