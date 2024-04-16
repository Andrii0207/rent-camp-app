export function updateVehicleData(data) {

    return data.toString().slice(0, data.toString().length - 1) +
        ' ' +
        data.toString().slice(data.toString().length - 1)
}