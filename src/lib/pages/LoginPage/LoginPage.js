import React, { useState } from 'react';
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import styles from "./LoginPage.module.scss";
import logo from './logo-color.svg';

const EntryButton = withStyles(() => (
    {
        root: {
            height: '56px',
            boxShadow: '0px 4px 8px rgba(48, 79, 254, 0.24)',
            borderRadius: '3px'
        },
        label: {
            letterSpacing: '0.75px',
            lineHeight: '19px'
        }
    }
))(Button)

const LoginPage = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const onLoginInput = (e) => {
        setLogin(e.target.value);
    };
    const onPasswordInput = (e) => {
        setPassword(e.target.value);
    };
    const onClick = () => {
        // axios.post
        // console.log(value);
    };
    return (
        <div className={styles['login-page__page']}>
            <img src={logo}/>
            <div className={styles['login-page__container']}>
                <div className={styles['login-page__login']}>
                    <TextField value={login}
                            type="text"
                            autoComplete={false}
                            margin='normal'
                            variant='outlined'
                            label='Название ячейки'
                            onInput={onLoginInput}
                    />
                </div>
                <div className={styles['login-page__password']}>
                    <TextField value={password}
                            type="password"
                            margin='normal'
                            variant='outlined'
                            label='Пароль'
                            onInput={onPasswordInput}
                    />
                </div>
                <EntryButton 
                        color="primary" 
                        variant="contained" 
                        onClick={onClick}>
                    Войти
                </EntryButton>
            </div>
        </div>
    )
}

export default LoginPage;
