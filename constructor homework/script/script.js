$(document).ready(function () {




    

    function person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullName = function () {
            (this.firstname + " " + this.lastname);
        }



    }

    var person1 = new person("mario", "boskovski");
    var person2 = new person("mario1", "boskovski");
    var person3 = new person("mario2", "boskovski");
    var person4 = new person("mario3", "boskovski");
    var person5 = new person("mario4", "boskovski");
    var person6 = new person("mario5", "boskovski");

    function adressBook() {
        var persons = [];

        this.addPerson = person => {
            persons.push(person1);
            persons.push(person2);
            persons.push(person3);
            persons.push(person4);
            persons.push(person5);
            persons.push(person6);
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

        this.getPeople = function getAllPeople() {
           console.log(adressBook.getPeople);
        }
    }


    let person = new adressBook();
    person.removePerson(person1);
    person.addPerson(person2);
    person.addPerson(person3);
    person.addPerson(person4);
    person.addPerson(person5);
    person.addPerson(person6);


    person.getPeople();





});