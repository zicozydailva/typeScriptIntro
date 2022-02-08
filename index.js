var id = 5;
var company = "Media";
var isMember = true;
var x = "Hello";
// arrOfNum
var ids = [1, 2, 3, 4, 5];
// arr of ...
var arr = [1, true, "hey"];
// tuple ..takes respective val accordingly
var person = [1, "welcome", true];
// tuple arr
var employee;
employee = [
    [1, "Jane"],
    [2, "James"],
    [3, "John"],
];
// unions ... a var to hold more than one type
var proId;
proId = 22;
// enum .. by def, its index based .. i.e up: 0, down: 1
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
// Objects
var user = {
    id: 1,
    name: "Joe"
};
var newUser = {
    id: 1,
    name: "John"
};
// typ assertion ..treat an entity as a diff type
var cId = 1;
var customerId = id;
// or
var customId = cId;
// functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
var newUser1 = {
    id: 1,
    name: "John",
    age: 23
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// classes ..."private" makes it only accessible from only within the class. "protected" makes it accessible from within or an extended class. default is "public"
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var brown = new Person(1, "Brad Brown");
var mike = new Person(2, "Mike Jordan");
// generics
function getArray(item) {
    return new Array().concat(item);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["brad", "john", "jill"]);
