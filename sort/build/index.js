"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var charactersCollection = new CharactersCollection_1.CharactersCollection('hello');
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedlist = new LinkedList_1.LinkedList();
linkedlist.add(500);
linkedlist.add(10);
linkedlist.add(-3);
linkedlist.add(3);
linkedlist.sort();
linkedlist.print();
