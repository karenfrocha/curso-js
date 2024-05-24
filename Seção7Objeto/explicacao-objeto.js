const obj = {
    prop1: 'Propriedade1',
    prop2: 'propriedade2',

    props() {
        console.log(this.prop1 + ' ' + this.prop2)
    }
}

const string1 = 'oi'

console.log(string1.toUpperCase())

const array = [0,1,2,3,4]
array.shift()
console.log(array)

obj.props()