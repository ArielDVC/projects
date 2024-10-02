class Queue {
    #items = [];
    enqueue(item){  // Agregar un elemento al final de la cola
        this.#items.push(item);
    }
    dequeue(){      // Quitar y devolver el elemento del frente de la cola
        if(this.isEmpty())
            return null;
        return this.#items.shift();
    }
    peek(){         // Obtener el elemento del frente de la cola sin quitarlo
        if(this.isEmpty())
            return null;
        return this.#items[0];
    }
    isEmpty(){      // Verificar si la cola está vacía
        return this.#items.length === 0;
    }
    size(){         // Obtener el tamaño de la cola
        return this.#items.length;
    }
    empty(){        // Vaciar la cola
        this.#items = [];
    }
    get getItems(){ // Obtener todos los valores
        return [...this.#items];
    }
}
// const queue = new Queue();
// queue.enqueue('Ariel');
// queue.enqueue('Douglas');
// queue.enqueue('Villca');
// queue.enqueue('Calle');
// console.log(queue.getItems);
// console.log(queue.dequeue());
// console.log(queue.getItems);
// console.log(queue.peek());
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.empty();
// console.log(queue.isEmpty());
// console.log(queue.getItems);