import * as response from './backendMockData';

export const data = [{}, {}, {}, {}];
data[0] = {
    amount: response.response.generator.performance,
    direction: false,
    type: response.response.generator.name,
    money: response.response.generator.cost
};

data[1] = {
    amount: response.response.net.performance,
    money: response.response.net.cost,
    direction: false,
    type: 'Сеть'
};


export const profile = {
    name: response.response.profile.name,
    type: 'Энергетическая ячейка',
    money: response.response.profile.money,
    blocked: response.response.neighbors.reduce((acc, curr) => acc + curr.blocked_money, 0)
};


export const multidata2 = response.response.load.map(
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

//state = {locked, unlocking, unlocked}


export const multidata = response.response.neighbors.map(value => {
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

console.log(multidata);


const tmp = response.response.neighbors.reduce((acc, curr) => acc + (-1)**!curr.output*curr.performance, 0);
data[2] = {
    amount: tmp,
    money: multidata.reduce((acc, curr) => acc + curr.active*curr.money*(-1)**!curr.output, 0),
    direction: tmp <= 0  //?????????
};

data[3] = {
    amount: response.response.load.reduce((acc, curr) => acc + curr.performance, 0),
    direction: false
};

