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
        let location = this.hashFunction(person.name)
        let personHashObject = {
            [person.name]: {
                age: person.age,
                hobbies: person.hobbies
            }
        }

        if (typeof this.hashArray[location] === 'undefined') {
            this.hashArray[location] = [{
                [person.name]: {
                    age: person.age,
                    hobbies: person.hobbies
                }
            }]
        } else {
            this.hashArray[location].push(personHashObject)
        }
    }

    delete = (name) => {
        delete this.hashArray[this.hashFunction(name)]
    }

    get = (name) => {
        const location = this.hashFunction(name)
        let response = 'nothing found'

        if (typeof this.hashArray[location] !== 'undefined') {
            for (let i = 0; i < this.hashArray[location].length; i++) {
                const result = this.hashArray[this.hashFunction(name)][i]
                if (Object.keys(result)[0].toLowerCase() === name.toLowerCase()) {
                    return result
                }
            }

        }
        return response
    }

    dumpTable = () => {
        console.log(this.hashArray)
    }

    hashFunction = (string) => {
        const leftChar = string.charAt(0)
        if (leftChar.match(/a-z/)) {
            return this.alphabetHash[leftChar.toLowerCase()]
        }
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
let ben = new Person('Ben', 32, ['hiking', 'fishing', 'squaredancing'])
let bob = new Person('Bob', 25, ['gaming', 'hacking'])

hashTable.add(seth)
hashTable.add(ben)
hashTable.add(bob)

// hashTable.dumpTable()

console.log(hashTable.get('ben'))
