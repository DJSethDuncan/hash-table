class HashTable {

    constructor () {

        this.hashArray = []
        this.alphabetHash = {
            a:0,
            b:1,
            c:2,
            d:3,
            e:4,
            f:5,
            g:6,
            h:7,
            i:8,
            j:9,
            k:10,
            l:11,
            m:12,
            n:13,
            o:14,
            p:15,
            q:16,
            r:17,
            s:18,
            t:19,
            u:20,
            v:21,
            w:22,
            x:23,
            y:24,
            z:25
        }
    }

    add = (person) => {
        // @TODO - this overwrites -- handle chaining
        this.hashArray[this.hashFunction(person.name)] = {
            [person.name]: {
                age: person.age,
                hobbies: person.hobbies
            }
        }
    }

    delete = (name) => {
        delete this.hashArray[this.hashFunction(name)]
    }

    get = (name) => {

    }

    dumpTable = () => {
        console.log(this.hashArray)
    }

    hashFunction = (string) => {
        const leftChar = string.charAt(0)
        // @TODO - error if leftChar is not a letter
        return this.alphabetHash[leftChar.toLowerCase()]
    }

}

class Person {
    constructor (name, age, hobbies) {
        this.name = name
        this.age = age
        this.hobbies = hobbies
    }
}

let hashTable = new HashTable()

let seth = new Person('Seth', 36, ['code','music'])

console.log(hashTable.add(seth))
console.log(hashTable.dumpTable())
console.log(hashTable.delete('seth'))
console.log(hashTable.dumpTable())
