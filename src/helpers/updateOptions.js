export function updOptions(data) {
    const newData = []
    data.map(({ adults, children, details, engine, transmission }) => {
        const updatedData = { adults, children, engine, transmission, ...details }
        return newData.push(updatedData)
    })
    console.log("newData >>>", newData)
    return newData
}
