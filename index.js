


const matchName = (drivers, string) => {
    return drivers.filter(d => d.name === string)
}

const findMatching = (drivers, string) => {
    return drivers.filter(d => d.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(d => {
        return d.toLowerCase().indexOf(string.toLowerCase()) === 0;
    })
}