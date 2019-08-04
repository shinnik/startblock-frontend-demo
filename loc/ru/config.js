const generatorNames = {
    gasGenerator: 'Бензогенератор',
    solarPanel: 'Солнечная панель',
    accumulator: 'Аккумулятор'
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
            }
        },
        generators: {
            gasGenerator: {
                label: generatorNames.gasGenerator
            },
            solarPanel: {
                label: generatorNames.solarPanel
            },
            accumulator: {
                label: generatorNames.accumulator
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
            radios: {
                nothing: {
                    label: 'Ничего нет'
                },
                gasGenerator: {
                    label: generatorNames.gasGenerator
                },
                solarPanel: {
                    label: generatorNames.solarPanel
                },
                accumulator: {
                    label: generatorNames.accumulator
                }
            },
            services: {
                heading: 'Сервисы',
                service1: {
                    heading: 'Управляемая нагрузка',
                    text: 'Чтобы сэкономить, умные розетки будут выключаться при подорожании энергии. Перетащите наверх списка те, что должны отключаться реже:',
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
                    text: 'TODO Написать пояснение',
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
                    text: 'TODO Написать пояснение'
                }
            }
        },
        saveButton: {
            defaultLabel: 'Сохранить',
            handlingLabel: 'Сохранение'
        }
    }
};
