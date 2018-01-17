$(document).ready(function () {

    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullName = function () {
            // console.log(this.firstname + " " + this.lastname);
            return this.firstname + " " + this.lastname;
        }

    }

    var person1 = new Person("mario", "boskovski");
    var person2 = new Person("mario1", "boskovski");
    var person3 = new Person("mario2", "boskovski");
    var person4 = new Person("mario3", "boskovski");
    var person5 = new Person("mario4", "boskovski");
    var person6 = new Person("mario5", "boskovski");

    function AdressBook() {
        var persons = [];

        this.addPerson = person => {
            persons.push(person);
            // persons.forEach(add => {
            //     add.fullName();
            // })
        }

        this.removePerson = person => {
            let i = persons.indexOf(); // this was missing
            let removed = persons.splice(i, 1);
            console.log(`The person ${person.fullName()} has been successfully Removed!`);
            // persons.forEach(remove => {
            //     remove.fullName();
            // })

        }

        this.getPeople = function() {
            console.log(`These are the people in our database:`);
            persons.forEach(add => {
                console.log(add.fullName());
            })
        }
    }

    let people = new AdressBook();
    people.addPerson(person2);
    people.addPerson(person3);
    people.addPerson(person4);
    people.addPerson(person5);
    people.addPerson(person6);
    people.removePerson(person1);
  
    people.getPeople();
});
