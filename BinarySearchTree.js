function BinarySearchTree() {   
    var Node = function(key){
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null

    this.insert = function(key){
        //Insere uma chave
        var newNode = new Node(key)

        if(root === null){
            root = newNode
        }else{
            insertNode(root, newNode)
        }
    }
//Função Auxiliar Inserção
    var insertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            }else{
                insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                insertNode(node.right, newNode)
            }
        }  
    }

    this.search = function(key){
        //Busca uma chaave
        return searchNode(root, key)
    }

    var searchNode = function(node, key){
        if(node === null){
            return false
        }
        if(key < node.key){
            return searchNode(node.left, key)
        }else if(key > node.key){
            return searchNode(node.right, key)
        }else{
            return true
        }
    }

    this.remove = function(key){
        //Remove a chave

    }

    this.min = function(){
        //retorna a menor chave
        return minNode(root)

    }

    var minNode = function(node){
        if(node){
            while(node && node.left !== null){
                node = node.left
            }
            return node.key
        }
        return null
    }

    this.max = function(){
        //retorna o maior valor
        return maxNode(root)
    }
    
    var maxNode = function(node){
        if(node){
            while(node && node.right !== null){
                node = node.right
            }
            return node.key
        }
        return null
    }
    
    this.inOrderTraverse = function(callback){
        //Visita todos os nós da arvore usando um percurso em ordem
        inOrderTraverseNode(root, callback)
    }

    var inOrderTraverseNode = function(node, callback){

        if (node !== null){
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right,callback)
        }
    }

    this.preOrderTraverse = function(){
        //Visita todos os nós da arvore usando o percurso pre ordem
    }

    this.preOrderTraverse = function(){
        //Visita todos os nós da arvore usando um percurso em ordem
    }

    
}
function printNode(value){
    console.log(value)
}


var tree = new BinarySearchTree()
tree.insert(11);
tree.insert(2);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(100);
console.log('Imprime em ordem:')
tree.inOrderTraverse(printNode);
console.log('Imprime o maior:')
console.log(tree.max());
console.log('Imprime o menor:')
console.log(tree.min());

console.log(tree.search(100));
//console.log(tree.search(2));
