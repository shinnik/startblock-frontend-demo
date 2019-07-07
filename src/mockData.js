export const data = [
    {
        amount: 612291,
        direction: false,
        type: 'Солнечная панель',
        money: 91
    },
    {
        amount: 612291,
        money: 91,
        direction: false,
        type: 'Сеть'
    },
    {
        amount: 612291,
        money: 91,
        direction: false,
    },
    {
        amount: 612291,
        direction: false,
    }
];

export const profile = {
    name: 'Delta',
    type: 'Энергетическая ячейка',
    money: 1125,
    blocked: 504
};

export const multidata2 = [
    {
        name: 'Туалет',
        amount: 52,
        output: true,
        active: false
    },
    {
        name: 'Комната',
        amount: 2,
        output: true,
        active: true
    },
    {
        name: 'Кухня',
        amount: 512,
        output: true,
        active: false
    },
    {
        name: 'Туалет',
        amount: 52,
        output: true,
        active: true
    },
    {
        name: 'Комната',
        amount: 2,
        output: true,
        active: false
    },
    {
        name: 'Кухня',
        amount: 512,
        output: true,
        active: false
    },
];

//state = {locked, unlocking, unlocked}
export const multidata = [
    {
        name: 'Alpha',
        amount: 52,
        money: 5,
        blocked: 8,
        state: 'locked',
        output: false,
        active: false
    },
    {
        name: 'Beta',
        amount: 2,
        money: 1,
        blocked: 401,
        state: 'unlocking',
        output: true,
        active: false
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59,
        blocked: 95,
        state: 'unlocked',
        output: false,
        active: true
    },
    {
        name: 'Alpha',
        amount: 52,
        money: 5,
        blocked: 8,
        state: 'locked',
        output: true,
        active: false
    },
    {
        name: 'Beta',
        amount: 2,
        money: 1,
        blocked: 401,
        state: 'unlocking',
        output: true,
        active: false
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59,
        blocked: 95,
        state: 'unlocked',
        output: true,
        active: true
    },
];
