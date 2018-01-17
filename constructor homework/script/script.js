$(document).ready(function () {




    

    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullName = function () {
            console.log(this.firstname + " " + this.lastname);
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
            persons.forEach(add => {
                add.fullName();
            })
        }

        this.removePerson = person => {

            persons.splice(i, 1);
            persons.forEach(remove => {
                remove.fullName();
            })

        }

        this.getPeople = function() {
           persons.forEach(add => {
                add.fullName();
            })
        }
    }


    let person = new AdressBook();
    person.addPerson(person2);
    person.addPerson(person3);
    person.addPerson(person4);
    person.addPerson(person5);
    person.addPerson(person6);
    person.removePerson(person1);
  
    person.getPeople();







});
