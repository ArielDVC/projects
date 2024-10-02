class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
        this.prev  = null;
    }
}
class DoublyLinkedList{
    #head;
    #tail;
    constructor(){
        this.#head = null;
        this.#tail = null;
    }
    showForward(){                      // Mostrar la lista de principio a fin
        const array = [];
        let current = this.#head;
        while(current){
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
    showBackward(){                     // Mostrar la lista de fin a principio
        const array = [];
        let current = this.#tail;
        while(current){
            array.push(current.value);
            current = current.prev;
        }
        return array;
    }
    isEmpty(){                          // Verificar si la lista está vacía
        return this.#head === null;
    }
    size(){                             // Obtener el tamaño de la lista
        let size = 0;
        let current = this.#head;
        while(current !== null){
            size++;
            current = current.next;
        }
        return size;
    }
    clear(){                            // Vaciar la lista
        this.#head = null;
        this.#tail = null;
    }
    prepend(value){                     // Agregar un nodo al inicio de la lista - En estos caso se usa HEAD
        const node = new Node(value);
        if(!this.#head){
            this.#head = node;
            this.#tail = node;
        }else{
            node.next       = this.#head;
            this.#head.prev = node;
            this.#head      = node;
        }
    }
    append(value){                      // Agregar un nodo al final de la lista - En estos caso se usa TAIL
        const node = new Node(value);
        if(!this.#head){
            this.#head = node;
            this.#tail = node;
        }else{
            node.prev       = this.#tail;
            this.#tail.next = node;
            this.#tail      = node;
        }
    }
    addByPosition(value,position){      // Agregar por posicion
        if(!this.#head || position == 1)
            this.prepend(value);
        else if(position > this.size())
            this.append(value);
        else{
            position--;
            const node  = new Node(value);
            let current = this.#head;
            for(let i=1; i<position; i++)
                current  = current.next;
            node.next         = current.next;
            node.prev         = current;
            current.next.prev = node;
            current.next      = node;
        }
    }
    deleteFirst(){                      // Eliminar elemento del principio - En estos caso se usa HEAD
        let valueDelete = null;
        if(this.#head){
            valueDelete = this.#head.value;
            if(this.#head.next == null)
                this.clear();
            else{
                this.#head      = this.#head.next;
                this.#head.prev = null;
            }
        }
        return valueDelete;
    }
    deleteLast(){                       // Eliminar elemento del final - En estos caso se usa TAIL
        let valueDelete = null;
        if(this.#tail){
            valueDelete = this.#tail.value;
            if(this.#tail.prev == null)
                this.clear();
            else{
                this.#tail      = this.#tail.prev;
                this.#tail.next = null;
            }
        }
        return valueDelete;
    }
    deleteByPosition(position){         // Eliminar por posicion
        if(this.#head){
            if(position == 1)
                return this.deleteFirst();
            else if(position >= this.size())
                return this.deleteLast();
            else{
                position--;
                let current     = this.#head,
                    valueDelete = null;
                for(let i=1; i<position; i++)
                    current  = current.next;
                valueDelete            = current.next.value;
                current.next.next.prev = current;
                current.next           = current.next.next;
                return valueDelete;
            }
        }
        return null;
    }
    deleteByValue(value,alias = false){ // Eliminar por valor
        let valueDelete = null;
        if((this.#head.value == value && !alias) || (this.#head.value[alias] == value && alias)){
            valueDelete = this.deleteFirst();
        }else if((this.#tail.value == value && !alias) || (this.#tail.value[alias] == value && alias)){
            valueDelete = this.deleteLast();
        }else if(this.#head){
            let current = this.#head;
            while(current.next.next !== null){
                if((current.next.value == value && !alias) || (current.next.value[alias] == value && alias)){
                    valueDelete            = current.next.value;
                    current.next.next.prev = current;
                    current.next           = current.next.next;
                    break;
                }
                current = current.next;
            }
        }
        return valueDelete;
    }
}
// const doublyLinkedList = new DoublyLinkedList;
// doublyLinkedList.append('B');
// doublyLinkedList.append('C');
// doublyLinkedList.append('D');
// doublyLinkedList.append('E');
// doublyLinkedList.append('F');
// doublyLinkedList.prepend('A');
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());
// console.log(doublyLinkedList.deleteFirst());
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());
// console.log(doublyLinkedList.deleteLast());
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());
// doublyLinkedList.addByPosition('ABC',3);
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());
// console.log(doublyLinkedList.deleteByPosition(3));
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());
// console.log(doublyLinkedList.deleteByValue('E'));
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());

// const doublyLinkedList = new DoublyLinkedList;
// doublyLinkedList.append({id:'B',value:'Letra B'});
// doublyLinkedList.append({id:'C',value:'Letra C'});
// doublyLinkedList.append({id:'D',value:'Letra D'});
// doublyLinkedList.append({id:'E',value:'Letra E'});
// doublyLinkedList.append({id:'F',value:'Letra F'});
// doublyLinkedList.prepend({id:'A',value:'Letra A'});
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());
// console.log(doublyLinkedList.deleteFirst());
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());
// console.log(doublyLinkedList.deleteLast());
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());
// doublyLinkedList.addByPosition({id:'ABC',value:'Letra ABC'},3);
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());
// console.log(doublyLinkedList.deleteByPosition(3));
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());
// console.log(doublyLinkedList.deleteByValue('D','id'));
// console.log(doublyLinkedList.showForward());
// console.log(doublyLinkedList.showBackward());