function Queue() {
    var elements = [];
 
    this.add = add;
    this.remove = remove;
    this.getFrontElement = getFrontElement;
    this.hasElements = hasElements;
    this.removeAll = removeAll;
    this.size = size;
    this.toString = toString;
 
    function add(element) {
        elements.push(element);
    }
 
    function remove() {
        return elements.shift();
    }
 
    function getFrontElement() {
        return elements[0];
    }
 
    function hasElements() {
        return elements.length > 0;
    }
 
    function removeAll() {
        elements = [];
    }
 
    function size() {
        return elements.length;
    }
 
    function toString() {
        console.log(elements.toString());
    }
}
var peopleQueue = new Queue();
console.log(peopleQueue.hasElements()); // Mostrará falso
 
peopleQueue.add('Carlos');
peopleQueue.add('Cristina');
peopleQueue.add('Mario');
 
peopleQueue.toString(); // Mostrará: Carlos,Cristina,Mario
console.log(peopleQueue.size()); // Mostrará 3
console.log(peopleQueue.hasElements()); // Mostrará true
peopleQueue.remove(); // Quitamos a Carlos
peopleQueue.remove(); // Quitamos a Cristina
peopleQueue.toString(); // Mostrará: Mario
