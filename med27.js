let person = {
firstName: "Drikelda",
lastName: "Ferat",
age:"17",

fullName: function() {return this.firstName + " " + this.lastName;}
};

console.log(person.fullName());