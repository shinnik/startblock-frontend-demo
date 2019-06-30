import React, {PureComponent} from 'react';
import styles from './MainPage.module.scss';
import ArrowAndInfo from "../../containers/ArrowAndInfo/ArrowAndInfo";
import Delta from "../../containers/Delta/Delta";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MultiArrow from "../../containers/MultiArrow/MultiArrow";
import Container from '@material-ui/core/Container';
import Dialog from "@material-ui/core/Dialog";
import {withStyles} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import MuiDialogContent from "@material-ui/core/DialogContent/DialogContent";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import {currency} from "../../constatnts/names";
import Button from "@material-ui/core/Button";
import {Paper, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';
import {LockOpen, Close} from '@material-ui/icons';


const data = [
    {
        amount: 612291,
        direction: false,
        type: 'Солнечная панель'
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
        direction: true,
    },
    {
        amount: 612291,
        direction: false,
    }
];

const profile = {
    name: 'Delta',
    type: 'Энергетическая ячейка',
    money: 1125,
    blocked: 504
};

const shift = {
    position: 'relative',
    left: '-5px'
};

const arr = [true, true, true];
const multidata2 = [
    {
        name: 'Туалет',
        amount: 52,
    },
    {
        name: 'Комната',
        amount: 2,
    },
    {
        name: 'Кухня',
        amount: 512,
    },
];

const arr2 = [true, true, false];
const multidata = [
    {
        name: 'Alpha',
        amount: 52,
        money: 5,
        blocked: 8
    },
    {
        name: 'Beta',
        amount: 2,
        money: 1,
        blocked: 401
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59,
        blocked: 95
    },
];

const styles2 = theme => ({
    root: {
        margin: 0,
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(4)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
});


const DialogTitle = withStyles(styles2)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h3"><b>{children}</b></Typography>
            {onClose ? (
                <IconButton color='primary' aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <Close />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

class MainPage extends PureComponent {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
    return <div className={styles.MainPage}>
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
        >
            <DialogTitle onClose={this.handleClose}>Вывод токенов</DialogTitle>
            <DialogContent><Box className={styles.DialogContent}>

                <Box className={styles.FieldAndButton}>
            <TextField
                id="outlined-name"
                label="Сумма"
                // value={values.name}
                // onChange={handleChange('name')}
                variant="outlined"
                style={{fontWeight: 'bold'}}
                InputProps={{
                    endAdornment: <InputAdornment position="end">{currency}</InputAdornment>,
                }}
             />
                <Button variant='contained' color='primary' >Вывести</Button>
                </Box>
                <br/>
                <Box className={styles.MoneyInfo}>
                    <Typography variant='body2'>{`Баланс: ${profile.money} ${currency}`}</Typography>
                    <Typography variant='body2' style={{justifySelf: 'end'}}>{`Готово к снятию:`}</Typography>
                    <Typography variant='body2' color='primary'>{`${profile.money-profile.blocked} ${currency}`}</Typography>
                </Box>
                <br/>
                <Typography variant='body2'>{`${profile.blocked} ${currency} используются для подключения к другим пользователям. Разблокировать их можно в таблице ниже:`}</Typography>
                <br/>
                <Paper className={styles.Table}>
                    <Table size='small'>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'><b>Пользователь</b></TableCell>
                                <TableCell align='center'><b>{currency}</b></TableCell>
                                <TableCell align='center'><b>Разблокировать</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                multidata.map((value, index) => <TableRow key={index}>
                                    <TableCell align='left'><Typography variant='body1'>{value.name} </Typography> </TableCell>
                                    <TableCell align='right'><Typography variant='body1'>{value.blocked} </Typography> </TableCell>
                                    <TableCell align='center'> <IconButton color='primary'> <LockOpen /> </IconButton> </TableCell>
                                </TableRow>)
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </Box></DialogContent>

        </Dialog>

        <Container className={styles.Grid1} >
            <Box className={styles.Item1}>
                <Typography style={shift} variant='h4'><b>{data[0].type && data[0].type}</b></Typography>
                <ArrowAndInfo {...data[0]} />
            </Box>
            <Box className={styles.Item2}>
                <Typography style={shift} variant='h4'><b>{data[1].type && data[1].type}</b></Typography>
                <ArrowAndInfo {...data[1]} />
            </Box>
        </Container>

        <Box className={styles.Item5}>
            <Delta {...profile} pullOffFunc={this.handleClickOpen}/>
        </Box>

        <Container className={styles.Grid2} >
            <Box className={styles.Item3}>
                <ArrowAndInfo {...data[2]} />
                <Typography style={shift} variant='h4'><b>Соседние ячейки</b></Typography>
                <MultiArrow data={multidata} arr={arr} />
            </Box>
            <Box className={styles.Item4}>
                <ArrowAndInfo {...data[3]} />
                <Typography style={shift} variant='h4'><b>Нагрузка</b></Typography>
                <MultiArrow data={multidata2} arr={arr2} />
            </Box>
        </Container>
    </div>;
    }
}

export default MainPage;
