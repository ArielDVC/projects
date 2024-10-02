// PILA (STACK)
class Stack{
    #items = [];
    push(item){    // Agregar un elemento al tope de la pila
        this.#items.push(item);
    }
    pop(){         // Quitar y devolver el elemento del tope de la pila
        if(this.isEmpty())
            return null;
        return this.#items.pop();
    }
    peek(){        // Obtener el elemento del tope de la pila sin quitarlo
        if(this.isEmpty())
            return null;
        return this.#items[this.#items.length - 1];
    }
    size(){        // Obtener el tamaño de la pila
        return this.#items.length;
    }
    isEmpty(){     // Verificar si la pila está vacía
        return this.#items.length === 0;
    }
    empty(){       // Vaciar la pila
        this.#items = [];
    }
    get getItems(){ // Obtener todos los valores
        return [...this.#items];
    }
}
// const stack = new Stack();
// stack.push('Ariel');
// stack.push('Douglas');
// stack.push('Villca');
// stack.push('Calle');
// console.log(stack.getItems);
// console.log(stack.pop());
// console.log(stack.getItems);
// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.isEmpty());
// stack.empty();
// console.log(stack.isEmpty());
// console.log(stack.getItems);