export const response = {
    generator: {
        name: "Солнечная панель",
        performance: 612291,
        cost: 91
    },
    net: {
        performance: 612291,
        cost: 91
    },
    neighbors: [
        {
            name: "Alpha",
            performance: 52,
            cost: 5,
            output: false,
            blocked_money: 8,
            state: 'locked'
        },
        {
            name: "Beta",
            performance: 2,
            cost: 1,
            output: false,
            blocked_money: 401,
            state: 'locked'
        },
        {
            name: "Gamma",
            performance: 512,
            cost: 59,
            output: false,
            blocked_money: 95,
            state: 'locked'
        },
        // {
        //     name: "Omega",
        //     performance: 300,
        //     cost: 59,
        //     output: false,
        //     blocked_money: 95,
        //     state: 'locked'
        // },
        // {
        //     name: "Psi",
        //     performance: 0,
        //     cost: 0,
        //     output: true,
        //     blocked_money: 95,
        //     state: 'locked'
        // },
        // {
        //     name: "Lambda",
        //     performance: 3,
        //     cost: 2,
        //     output: true,
        //     blocked_money: 95,
        //     state: 'locked'
        // },
    ],
    load: [
        {
            name: "Туалет",
            performance: 52,
            order: 3
        },
        {
            name: "Комната",
            performance: 2,
            order: 1
        },
        {
            name: "Кухня",
            performance: 0,
            order: 2
        },
        // {
        //     name: "Дача",
        //     performance: 0,
        //     order: 4
        // }
    ],
    profile: {
        name: "Delta",
        money: 2490
    }
};
