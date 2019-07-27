import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import styles from "./LoginPage.module.scss";
import { Icon } from "../../components/Icon/Icon";

const LoginPage = (props) => {
    const [value, setValue] = useState('');
    const onInput = (e) => {
        setValue(e.target.value);
    };
    const onClick = () => {
        // axios.post
        console.log(value);
    };
    return (
        <div className={styles['login-page__container']}>
            <header className={styles['login-page__header']}>
                <Icon className={styles['login-page__logo']}/>
            </header>
            <Typography component="h1" variant="h4">Войти в систему</Typography>
            <div className={styles['login-page__input']}>
                <TextField value={value}
                           type="password"
                           margin='normal'
                           variant='outlined'
                           label='Пароль'
                           onInput={onInput}
                />
            </div>
            <div>
                <Button style={{ letterSpacing: '1px' }} color="primary" variant="contained" onClick={onClick}>
                    Войти
                </Button>
            </div>
        </div>
    )
}

export default LoginPage;
