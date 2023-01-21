// definining types
var employee = {
    id: 1,
    employeeName: "Kofi",
    age: 34,
    retire: function (date) {
        console.log(date);
    }
};
//Union Types
function kgToLbs(wieght) {
    //use narowing to achieve the union of types
    if (typeof wieght === "number")
        return wieght * 2.2;
    else
        return parseInt(wieght) * 2.2;
}
kgToLbs(10);
kgToLbs("20kg");
//decalring an object Textbox wgich will implement all the methofds
var textBox = {
    drag: function () {
        this.drag();
    },
    resize: function () {
        this.resize();
    }
};
var quantity = 100;
//Nullable values
