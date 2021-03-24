const findMatching = (drivers, name) => {
    return drivers.filter(driver =>
        driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (drivers, name) => {
    return drivers.filter(driver => 
        driver.toLowerCase().indexOf(name.toLowerCase()) === 0)
}

const matchName = (drivers, name) => {
    return drivers.filter(driver =>
        driver.name === name)
}