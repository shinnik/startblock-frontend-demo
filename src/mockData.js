import * as response from './backendMockData';



// export const data = [
//     {
//         amount: 612291,
//         direction: false,
//         type: 'Солнечная панель',
//         money: 91
//     },
//     {
//         amount: 612291,
//         money: 91,
//         direction: false,
//         type: 'Сеть'
//     },
//     {
//         amount: 612291,
//         money: 91,
//         direction: false,
//     },
//     {
//         amount: 612291,
//         direction: false,
//     }
// ];

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

const tmp = response.response.neighbors.reduce((acc, curr) => acc + (curr.output ? curr.performance : -curr.performance), 0);
data[2] = {
    amount: tmp,
    money: response.response.neighbors.reduce((acc, curr) => acc + (curr.output ? curr.cost : -curr.cost), 0),
    direction: tmp <= 0  //?????????
};

data[3] = {
    amount: response.response.load.reduce((acc, curr) => acc + curr.performance, 0),
    direction: false
};


//
// export const profile = {
//     name: 'Delta',
//     type: 'Энергетическая ячейка',
//     money: 1125,
//     blocked: 504
// };

export const profile = {
    name: response.response.profile.name,
    type: 'Энергетическая ячейка',
    money: response.response.profile.money,
    blocked: response.response.neighbors.reduce((acc, curr) => acc + curr.blocked_money, 0)
};

// export const multidata2 = [
//     {
//         name: 'Туалет',
//         amount: 52,
//         output: true,
//         active: false
//     },
//     {
//         name: 'Комната',
//         amount: 2,
//         output: true,
//         active: true
//     },
//     {
//         name: 'Кухня',
//         amount: 512,
//         output: true,
//         active: false
//     },
//     {
//         name: 'Туалет',
//         amount: 52,
//         output: true,
//         active: true
//     },
//     {
//         name: 'Комната',
//         amount: 2,
//         output: true,
//         active: false
//     },
//     {
//         name: 'Кухня',
//         amount: 512,
//         output: true,
//         active: false
//     },
// ];

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
// export const multidata = [
//     {
//         name: 'Alpha',
//         amount: 52,
//         money: 5,
//         blocked: 8,
//         state: 'locked',
//         output: false,
//         active: false
//     },
//     {
//         name: 'Beta',
//         amount: 2,
//         money: 1,
//         blocked: 401,
//         state: 'unlocking',
//         output: true,
//         active: false
//     },
//     {
//         name: 'Gamma',
//         amount: 512,
//         money: 59,
//         blocked: 95,
//         state: 'unlocked',
//         output: false,
//         active: true
//     },
//     {
//         name: 'Alpha',
//         amount: 52,
//         money: 5,
//         blocked: 8,
//         state: 'locked',
//         output: true,
//         active: false
//     },
//     {
//         name: 'Beta',
//         amount: 2,
//         money: 1,
//         blocked: 401,
//         state: 'unlocking',
//         output: true,
//         active: false
//     },
//     {
//         name: 'Gamma',
//         amount: 512,
//         money: 59,
//         blocked: 95,
//         state: 'unlocked',
//         output: true,
//         active: true
//     },
// ];

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


