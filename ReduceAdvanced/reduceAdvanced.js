import fs from './../node_modules/file-system/file-system.js'

var output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split(/[\r,\n]+/) // remove \r and \n from each line
    .map(line => line.split('  '))
    .reduce((customers, line) => {
        console.log(line);
        let key = line[0];
        customers[key] = customers[key] || [];
        customers[key].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
}, {})

console.log(`Output => ${JSON.stringify(output, null, 2)}`);