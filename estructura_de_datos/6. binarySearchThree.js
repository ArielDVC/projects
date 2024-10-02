class Node{
    constructor(value){
        this.value = value;
        this.left  = null;
        this.right = null;
    }
}
// LEFT "<" - RIGHT ">"
class BinarySearchThree{
    #root;
    constructor(){
        this.#root = null;
    }
    isEmpty(){                          // Verificar si el arbol está vacío
        return this.#root === null;
    }
    clear(){                            // Vaciar el arbol
        this.#root = null;
    }
    size(){                             // Obtener el tamaño del arbol
        return this.#getSize(this.#root);
    }
    #getSize(node) {
        if(node === null)
            return 0;
        const sizeLeft = this.#getSize(node.left),
            sizeRight  = this.#getSize(node.right);
        return sizeLeft + sizeRight + 1;
    }
    showOrderAsc(){                     // Método para recorrer el árbol en orden (in-order traversal) Ascendente
        const array = [];
        this.#orderAsc(this.#root,array);
        return array;
    }
    #orderAsc(node,array){
        if(node){
            this.#orderAsc(node.left,array);
            array.push(node.value);
            this.#orderAsc(node.right,array);
        }
    }
    showOrderDesc(){                    // Método para recorrer el árbol en orden (post-order traversal) Descendente
        const array = [];
        this.#orderDesc(this.#root,array);
        return array;
    }
    #orderDesc(node,array){
        if(node){
            this.#orderDesc(node.right,array);
            array.push(node.value);
            this.#orderDesc(node.left,array);
        }
    }
    showPreOrder(){                     // Método para recorrer el árbol en orden (Pre-order traversal) Prioridad Izquierda
        const array = [];
        this.#preOrder(this.#root,array);
        return array;
    }
    #preOrder(node,array){
        if(node){
            array.push(node.value);
            this.#preOrder(node.left,array);
            this.#preOrder(node.right,array);
        }
    }
    showPostOrder(){                    // Método para recorrer el árbol en orden (Post-order traversal) Prioridad Derecha
        const array = [];
        this.#postOrder(this.#root,array);
        return array;
    }
    #postOrder(node,array){
        if(node){
            array.push(node.value);
            this.#postOrder(node.right,array);
            this.#postOrder(node.left,array);
        }
    }
    insert(value){                      // Insertar Nodo
        const node = new Node(value);
        if(!this.#root){
            this.#root = node;
            return;
        }
        this.#insertNode(this.#root,node);
    }
    #insertNode(node,newNode){
        if(newNode.value < node.value){
            if(!node.left)
                node.left = newNode;
            else
                this.#insertNode(node.left,newNode);
        }else{
            if(!node.right)
                node.right = newNode;
            else
                this.#insertNode(node.right,newNode);
        }
    }
    search(value){                      // Buscar Nodo por valor
        return this.#searchNode(this.#root,value);
    }
    #searchNode(node,value){
        if(!node)
            return null;
        if(node.value === value)
            return node;
        return node.value > value ? this.#searchNode(node.left,value) : this.#searchNode(node.right,value);
    }
    delete(value){                      // Eliminar Nodo por valor
        this.#root = this.#deleteNode(this.#root,value);
    }
    #deleteNode(root, value) {
        if(root === null)           // No se encontró el nodo a eliminar
            return root;
        if(value < root.value)      // Si el valor es menor que el valor del nodo actual, buscar en el subárbol izquierdo
            root.left  = this.#deleteNode(root.left, value);
        else if(value > root.value) // Si el valor es mayor que el valor del nodo actual, buscar en el subárbol derecho
            root.right = this.#deleteNode(root.right,value);
        else{                       // Si el valor es igual al valor del nodo actual, este es el nodo a eliminar
            // Casos para eliminar el nodo
            if(root.left === null)
                return root.right;
            else if(root.right === null)
                return root.left;
            // Si el nodo tiene dos hijos, encontrar el sucesor inorden
            root.value = this.#findMinValue(root.right);
            root.right = this.#deleteNode(root.right,root.value);
        }
        return root;
    }
    #findMinValue(node){
        let minValue = node.value;
        while(node.left !== null){
            minValue = node.left.value;
            node     = node.left;
        }
        return minValue;
    }
}
const binarySearchThree = new BinarySearchThree();
binarySearchThree.insert(5);
binarySearchThree.insert(9);
binarySearchThree.insert(1);
binarySearchThree.insert(10);
binarySearchThree.insert(11);
binarySearchThree.insert(8);
binarySearchThree.insert(4);
binarySearchThree.insert(3);
console.log(binarySearchThree.search(9));
console.log(binarySearchThree.showOrderAsc());
console.log(binarySearchThree.showOrderDesc());
console.log(binarySearchThree.showPreOrder());
console.log(binarySearchThree.showPostOrder());
binarySearchThree.delete(9);
console.log(binarySearchThree.showOrderAsc());