import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const charactersCollection = new CharactersCollection('hello');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedlist = new LinkedList();
linkedlist.add(500)
linkedlist.add(10)
linkedlist.add(-3)
linkedlist.add(3)

linkedlist.sort();
linkedlist.print();