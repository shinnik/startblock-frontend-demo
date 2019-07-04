import { energy, cost, power } from '../../constants/names';

export const nameInput = {
    id: 'name',
    label: 'Название',
    margin: 'normal',
    variant: 'outlined',
    value: '',
    units: ''
};

export const IpInput = {
    id: 'ip',
    label: 'IP адрес',
    margin: 'normal',
    variant: 'outlined',
    value: '',
    units: ''
};

export const powerInput = {
    id: 'power',
    label: 'Мощность',
    margin: 'normal',
    variant: 'outlined',
    value: '',
    units: power
};

export const costInput = {
    id: 'cost',
    label: 'Минимальная цена',
    margin: 'normal',
    variant: 'outlined',
    value: '',
    units: cost
};

export const capacityInput = {
    id: 'cap',
    label: 'Ёмкость',
    margin: 'normal',
    variant: 'outlined',
    value: '',
    units: energy
}
