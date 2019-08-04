export const generatorNames = {
    benz: 'Бензогенератор',
    sun: 'Солнечная панель',
    acc: 'Аккумулятор',
};

export const config = {
    header: {
        tab1: {
            label: 'Текущие данные'
        },
        tab2: {
            label: 'За месяц'
        },
        settings: {
            label: 'Настройки'
        }
    },
    mainPage: {
        delta: {
            buttons: {
                button1: {
                    label: 'Пополнить'
                },
                button2: {
                    label: 'Снять'
                }
            },
            energyCell: {
                label: 'Энергетическая ячейка'
            }
        },
        headings: {
            neighbours: {
                label: 'Соседние ячейки'
            },
            load: {
                label: 'Нагрузка'
            },
            net: {
                label: 'Сеть'
            }
        },
        generators: {
            benz: {
                label: generatorNames.benz
            },
            sun: {
                label: generatorNames.sun
            },
            acc: {
                label: generatorNames.acc
            }
        },
        dialog: {
            heading: {
                label: 'Вывод токенов'
            },
            content: {
                form: {
                    placeholder: {
                        label: 'Сумма'
                    },
                    button: {
                        label: 'Вывести'
                    },
                },
                balance: {
                    label: 'Баланс: '
                },
                readyToWithdraw: {
                    label: 'Готово к снятию: '
                },
                text: {
                    label: 'используются для подключения к другим пользователям. Разблокировать их можно в таблице ниже:'
                },
                table: {
                    user: {
                        label: 'Пользователь'
                    },
                    unlock: {
                        label: 'Разблокировать'
                    },
                    unlocked: {
                        label: 'Готово'
                    }
                }
            }
        }
    },
    settingsPage: {
        heading: {
            label: 'Настройка энергетической ячейки'
        },
        form1: {
            name: 'Название'
        },
        form2: {
            name: 'IP адрес'
        },
        radioButtons: {
            heading: {
                label: 'Подключенные генераторы и накопители'
            },
            inputs: {
                power: {
                    label: 'Мощность'
                },
                cost: {
                    label: 'Минимальная цена'
                },
                capacity: {
                    label: 'Ёмкость'
                }
            },
            radios: {
                nothing: {
                    label: 'Ничего нет'
                },
                benz: {
                    label: generatorNames.benz,
                    heading: 'Параметры бензогенератора',
                },
                sun: {
                    label: generatorNames.sun,
                    heading: 'Параметры солнечной панели',
                },
                acc: {
                    label: generatorNames.acc,
                    heading: 'Параметры аккумуляторной батареи',
                }
            },
        },
        services: {
            heading: {
                label: 'Сервисы'
            },
            service1: {
                heading: 'Управляемая нагрузка',
                textActive: 'Чтобы сэкономить, умные розетки будут выключаться при\n' +
                    'подорожании энергии. Перетащите наверх списка те, что\n должны отключаться реже:',
                textInactive: 'Чтобы сэкономить, умные розетки будут выключаться при подорожании энергии.',
                formName: 'Название розетки',
                arrowTop: {
                    label: 'Нельзя отключать'
                },
                arrowBottom: {
                    label: 'Можно отключать'
                }
            },
            service2: {
                heading: 'P2P торговля энергией',
                textActive: 'TODO\nНаписать пояснение',
                textInactive: 'TODO\nНаписать пояснение',
                radios: [
                    {
                        label: 'Максимальный доход',
                        caption: 'TODO описание'
                    },
                    {
                        label: 'Минимальный риск отклонения',
                        caption: 'Держать аккумулятор заряженным'
                    }
                ]
            },
            service3: {
                heading: 'Баланс спроса и предложения',
                textActive: 'TODO\nНаписать пояснение',
                textInactive: 'TODO\nНаписать пояснение'
            }
        },
        saveButton: {
            defaultLabel: 'Сохранить',
            handlingLabel: 'Сохранение'
        }
    },
    units: {

    }
};
