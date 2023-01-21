// definining types

type Employee = {
  readonly id: number;
  employeeName: string;
  age: number;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  employeeName: "Kofi",
  age: 34,
  retire: (date: Date) => {
    console.log(date);
  },
};

//Union Types
function kgToLbs(wieght: number | string): number {
  //use narowing to achieve the union of types
  if (typeof wieght === "number") return wieght * 2.2;
  else return parseInt(wieght) * 2.2;
}

kgToLbs(10);
kgToLbs("20kg");

//Intersection Types
type Draggable = {
  drag: () => void;
};

type Scrollable = {
  scrollable: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

//decalring an object Textbox wgich will implement all the methofds
let textBox: UIWidget = {
  drag() {
    this.drag();
  },

  resize() {
    this.resize();
  },
};

// Literal Types
//Annotate the type of variable by doing so;
type Quantity = 50 | 100;
let quantity: Quantity = 100;

//Nullable values
 