import {config} from "../loc/current/config";

export const parseResponse = (response) => {
    const data = [{}, {}, {}, {}];
    data[0] = {
        amount: response.generator.performance,
        direction: false,
        type: response.generator.type,
        money: response.generator.cost
    };

    data[1] = {
        amount: response.net.performance,
        money: response.net.cost,
        direction: false,
        type: 'Сеть'
    };


    const profile = {
        name: response.profile.name,
        type: config.mainPage.delta.energyCell.label,
        money: response.profile.money,
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
    data[2] = {
        amount: Math.abs(tmp),
        money: multidata.reduce((acc, curr) => acc + curr.active*curr.money*(-1)**!curr.output, 0),
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
