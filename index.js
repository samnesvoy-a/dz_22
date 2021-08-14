let student = {
    firstName: 'lorem',
    lastName: 'ipsum',
    averageScore: 3.8,
    getFullName: function () {

        return `${this.firstName} ${this.lastName}`
    },

    isGrantHolder: function () {
        return this.averageScore >= 4
    }
}

console.log(student.isGrantHolder());

function Aspirant (dissertationTopic, isDissertationComplete) {

    this.__proto__ = student;

    this.dissertationTopic = dissertationTopic;

    this.isDissertationComplete = isDissertationComplete;

    this.isGrantHolder = function () {

        return this.averageScore >= 4.5 && this.isDissertationComplete == true
    }

}

let aspirant = new Aspirant('Cake', false);
console.log(aspirant.isGrantHolder());



function aspirantFunc (dissertationTopic, isDissertationComplete) {

    Object.setPrototypeOf(this, student);

    this.dissertationTopic = dissertationTopic;

    this.isDissertationComplete = isDissertationComplete;

    this.isGrantHolder = function () {
        return this.averageScore >= 4.5 && this.isDissertationComplete === true
    }

}

let aspirant_2 = new aspirantFunc('chemistry in nature', true);

console.log(aspirant_2.isGrantHolder());

for(let value in aspirant) {
    console.log(value);
}








class Plane {

    constructor (name) {
        this.name = name;
        this.isFlying = false;
    }

    takeOff () {
        this.isFlying = true;
        return this.isFlying;
    }

    land () {
        this.isFlying = false;
        return this.isFlying
    }

}

let airport = {
    planes: [],
    getFlyingPlanes() {
        return  this.planes.filter((obj) => obj.isFlying === true)
    }
}

let plane1 = new Plane("First");
let plane2 = new Plane("Killer");
plane2.takeOff();
airport.planes.push(plane1, plane2);
console.log(airport.getFlyingPlanes());