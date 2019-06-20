let person = document.getElementById("person");
let doc = document.getElementById("document");

console.log(person, doc);

let person_filter = document.getElementById("person-filter");
let doc_filter = document.getElementById("document-filter");

person_filter.checked = true;

console.log(person_filter, doc_filter);

person_filter.addEventListener("click", disableInputDoc);
doc_filter.addEventListener("click", disableInputPerson);

function disableInputDoc(event) {
    let arr = doc.querySelectorAll("input[type=checkbox]");
    for (element of arr) {
        element.checked = false;
        element.disabled = true;
    }
    arr = person.querySelectorAll("input[type=checkbox]");
    for (element of arr) {
        element.disabled = false;
    }
}

function disableInputPerson(event) {
    let arr = person.querySelectorAll("input[type=checkbox]");
    for (element of arr) {
        element.checked = false;
        element.disabled = true;
    }
    arr = doc.querySelectorAll("input[type=checkbox]");
    for (element of arr) {
        element.disabled = false;
    }
}