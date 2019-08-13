import { energy, cost, power } from '../../constants/names';
import {config} from "../../../loc/current/config";

export const nameInput = {
    id: 'name',
    label: config.settingsPage.form1.name,
    margin: 'normal',
    variant: 'outlined',
    value: '',
    units: ''
};

export const IpInput = {
    id: 'ip',
    label: config.settingsPage.form2.name,
    margin: 'normal',
    variant: 'outlined',
    value: '',
    units: ''
};

export const powerInput = {
    id: 'power',
    label: config.settingsPage.radioButtons.inputs.power.label,
    margin: 'normal',
    variant: 'outlined',
    value: '',
    units: power
};

export const costInput = {
    id: 'cost',
    label: config.settingsPage.radioButtons.inputs.cost.label,
    margin: 'normal',
    variant: 'outlined',
    value: '',
    units: cost
};

export const capacityInput = {
    id: 'cap',
    label: config.settingsPage.radioButtons.inputs.capacity.label,
    margin: 'normal',
    variant: 'outlined',
    value: '',
    units: energy
}
