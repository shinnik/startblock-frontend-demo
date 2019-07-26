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
        type: 'Сеть'
    };


    const profile = {
        name: response.profile.name,
        type: 'Энергетическая ячейка',
        money: response.profile.money,
        blocked: response.neighbors.reduce((acc, curr) => acc + curr.blocked_money, 0)
    };


    const multidata2 = response.load.map(
        (value) => {
            return {
                name: value.name,
                amount: value.performance,
                order: value.order,
                active: value.performance !== 0,
                output: true
            }
        }
    );

    const multidata = response.neighbors.map(value => {
        return {
            name: value.name,
            amount: value.performance,
            money: value.cost,
            blocked: value.blocked_money,
            state: value.state,
            output: value.output,
            active: value.performance !== 0
        }
    });

    const tmp = response.neighbors.reduce((acc, curr) => acc + (-1)**!curr.output*curr.performance, 0);
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
