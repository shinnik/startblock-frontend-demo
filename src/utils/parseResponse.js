import {config} from "../loc/current/config";

export const parseResponse = (response) => {
    const data = [{}, {}, {}, {}];
    data[0] = {
        amount: response.generator.performance,
        direction: false,
        type: response.generator.name,
        money: response.generator.cost
    };

    data[1] = {
        amount: response.net.performance,
        money: response.net.cost,
        direction: false,
        type: config.mainPage.headings.load.label
    };


    const profile = {
        name: response.profile.name,
        type: config.mainPage.delta.energyCell.label,
        money: response.profile.money,
        ethAddress: response.profile.ethAddress,
        blocked: response.neighbours.reduce((acc, curr) => acc + curr.blocked_money, 0)
    };


    const multidata2 = response.load.map(
        (value) => {
            return {
                name: value.name,
                amount: value.performance,
                order: value.order,
                active: value.active,
                output: true
            }
        }
    );

    const multidata = response.neighbours.map(value => {
        return {
            id: value.id,
            name: value.name,
            amount: value.performance,
            money: value.cost,
            blocked: value.blocked_money,
            state: value.state,
            output: value.output,
            active: value.active
        }
    });

    const tmp = response.neighbours.reduce((acc, curr) => acc + (-1)**!curr.output*curr.performance*curr.active, 0);
    const amountOfActiveNeighbours = multidata.reduce((previousValue, currentValue) => previousValue + currentValue.active, 0);
    data[2] = {
        amount: Math.abs(tmp),
        money: amountOfActiveNeighbours ? multidata.reduce((acc, curr) => acc + curr.active*curr.money*(-1)**!curr.output, 0)/amountOfActiveNeighbours : 0,
        direction: tmp <= 0
    };

    data[3] = {
        amount: response.load.reduce((acc, curr) => acc + curr.performance, 0),
        direction: false
    };

    return {
        data,
        profile,
        multidata,
        multidata2,
    }
};
