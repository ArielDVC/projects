class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}
class LinkedList{
    #pointer;
    constructor(){
        this.#pointer = null;
    }
    show(){                            // Obtener los valores de la lista
        const array = [];
        let current = this.#pointer;
        while(current !== null){
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
    isEmpty(){                         // Verificar si la lista está vacía
        return this.#pointer === null;
    }
    size(){                            // Obtener el tamaño de la lista
        let size = 0;
        let current = this.#pointer;
        while(current !== null){
            size++;
            current = current.next;
        }
        return size;
    }
    clear(){                           // Vaciar la lista
        this.#pointer = null;
    }
    addFirst(value){                   // Agregar elemento al principio
        const node = new Node(value);
        node.next     = this.#pointer;
        this.#pointer = node;
    }
    addLast(value){                    // Agregar elemento al final
        if(!this.#pointer)
            this.addFirst(value);
        else{
            const node  = new Node(value);
            let current = this.#pointer;
            while(current.next !== null)
                current = current.next;
            current.next = node;
        }
    }
    addByPosition(value,position){     // Agregar por posicion
        if(!this.#pointer || position == 1)
            this.addFirst(value);
        else if(position > this.size() + 1)
            this.addEnd(value);
        else{
            position--;
            const node  = new Node(value);
            let current = this.#pointer;
            for(let i=1; i<position; i++)
                current = current.next;
            node.next    = current.next;
            current.next = node;
        }
    }
    find(sentence=false){              // Buscar un elemento
        if(!sentence)
            return null;
        const isObject = this.#isObject(sentence);
        let current = this.#pointer;
        while(current !== null){
            if(isObject){ // Objeto
                if(this.#containsKeysAndValues(sentence,current.value))
                    return current.value;
            }else if(current.value == sentence)
                return current.value;
            current = current.next;
        }
        return null;
    }
    addQuantitiesById(sentence=false){ // Sumar columnas por id // {id_column:'id_producto',id_value:1,search_column:'cantidad'}
        let current = this.#pointer;
        let sum     = 0;
        while(current !== null){
            if(current.value[sentence.id_column] === sentence.id_value)
                sum += current.value[sentence.search_column];
            current = current.next;
        }
        return sum;
    }
    update(oldValue,sentence){         // Modificar un elemento
        const isObject = this.#isObject(sentence);
        let current = this.#pointer;
        while(current !== null){
            if(isObject){ // Objeto
                if(this.#isEqualObject(oldValue, current.value)){
                    Object.keys(sentence).forEach(key => current.value[key] = sentence[key]);
                    return current.value;
                }
            }else if(current.value == oldValue){
                current.value = sentence;
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
    deleteFirst(){                     // Eliminar elemento del principio
        let valueDelete = null;
        if(this.#pointer){
            valueDelete   = this.#pointer.value;
            this.#pointer = this.#pointer.next;
        }
        return valueDelete;
    }
    deleteLast(){                      // Eliminar elemento del final
        let valueDelete = null;
        if(this.#pointer){
            let current = this.#pointer;
            if(current.next === null)
                valueDelete = this.deleteFirst();
            else{
                while(current.next.next !== null)
                    current = current.next;
                valueDelete  = current.next.value;
                current.next = null;
            }
        }
        return valueDelete;
    }
    deleteByPosition(position){        // Eliminar por posicion
        if(position == 1)
            return this.deleteFirst();
        else if(position >= this.size())
            return this.deleteLast();
        else if(this.#pointer){
            let current     = this.#pointer,
                valueDelete = null;
            position--;
            for(let i=1; i<position; i++)
                current = current.next;
            valueDelete  = current.next.value;
            current.next = current.next.next;
            return valueDelete;
        }
        return null;
    }
    deleteByValue(sentence=false){     // Eliminar por valor
        if(!sentence)
            return null;
        const isObject = this.#isObject(sentence);
        let valueDelete = null;
        if((this.#pointer.value == sentence && !isObject) || (this.#containsKeysAndValues(sentence,this.#pointer.value) && isObject)){
            valueDelete   = this.#pointer.value;
            this.#pointer = this.#pointer.next;
        }else{
            let current = this.#pointer;
            while(current.next !== null){
                if((current.next.value == sentence && !isObject) || (this.#containsKeysAndValues(sentence,current.next.value) && isObject)){
                    valueDelete  = current.next.value;
                    current.next = current.next.next;
                    break;
                }
                current = current.next;
            }
        }
        return valueDelete;
    }
    #containsKeysAndValues(sentence,current){
        return Object.keys(sentence).every(key => current.hasOwnProperty(key) && current[key] === sentence[key]);
    }
    #isObject(variable){
        return typeof variable === 'object' && variable !== null;
    }
    #isEqualObject(object1, object2){
        if(object1 === object2)
            return true;
        if(object1 == null || object2 == null)
            return false;
        if(typeof object1 !== 'object' || typeof object2 !== 'object')
            return false;
        const keys1 = Object.keys(object1),
            keys2   = Object.keys(object2);
        if(keys1.length !== keys2.length)
            return false;
        for(let key of keys1){
            if(!keys2.includes(key) || !this.#isEqualObject(object1[key], object2[key]))
                return false;
        }
        return true;
    }
}
// const linkedList = new LinkedList();
// console.log(linkedList.isEmpty());
// linkedList.addLast('B');
// linkedList.addFirst('A');
// linkedList.addLast('D');
// linkedList.addLast('E');
// linkedList.addLast('F');
// linkedList.addLast('G');
// console.log(linkedList.show());
// console.log(linkedList.isEmpty());
// console.log(linkedList.find('D'));
// console.log(linkedList.find('Z'));
// console.log(linkedList.update('A', 'Z'));
// linkedList.addByPosition('C',3);
// console.log(linkedList.show());
// console.log(linkedList.size());
// console.log('Eliminado',linkedList.deleteFirst());
// console.log(linkedList.show());
// console.log('Eliminado',linkedList.deleteLast());
// console.log(linkedList.show());
// console.log('Eliminado',linkedList.deleteByPosition(4));
// console.log(linkedList.show());
// console.log('Eliminado',linkedList.deleteByValue('D'));
// console.log(linkedList.show());
// console.log(linkedList.find('A'));
// linkedList.update('E','Z');
// console.log(linkedList.show());
// linkedList.clear();
// console.log(linkedList.show());
// console.log(linkedList.size());

// const linkedList = new LinkedList();
// console.log(linkedList.isEmpty());
// linkedList.addLast({id:'B',value:'Letra B'});
// linkedList.addFirst({id:'A',value:'Letra A'});
// linkedList.addLast({id:'D',value:'Letra D'});
// linkedList.addLast({id:'E',value:'Letra E'});
// linkedList.addLast({id:'F',value:'Letra F'});
// linkedList.addLast({id:'G',value:'Letra G'});
// console.log(linkedList.show());
// console.log(linkedList.isEmpty());
// console.log(linkedList.find('D','id'));
// console.log(linkedList.find('Z','id'));
// console.log(linkedList.show());
// linkedList.addByPosition({id:'C',value:'Letra C'},3);
// console.log(linkedList.show());
// console.log(linkedList.size());
// console.log('Eliminado',linkedList.deleteFirst());
// console.log(linkedList.show());
// console.log('Eliminado',linkedList.deleteLast());
// console.log(linkedList.show());
// console.log('Eliminado',linkedList.deleteByPosition(4));
// console.log(linkedList.show());
// console.log(linkedList.find({id:'B'}));
// console.log('Editar',linkedList.update({id:'C',value:'Letra C'},{value:'AAAA'}));
// console.log(linkedList.show());
// console.log('Eliminado',linkedList.deleteByValue({id: 'D', value: 'Letra D'}));
// console.log(linkedList.show());
// linkedList.clear();
// console.log(linkedList.show());
// console.log(linkedList.size());