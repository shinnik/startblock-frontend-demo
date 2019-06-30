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
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import MuiDialogContent from "@material-ui/core/DialogContent/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions/DialogActions";

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
    money: 1125
};

const shift = {
    position: 'relative',
    left: '-5px'
};

const arr = [true, true, false];
const multidata = [
    {
        name: 'Alpha',
        amount: 52,
        money: 5
    },
    {
        name: 'Beta',
        amount: 2,
        money: 1
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59
    },
];

const arr2 = [true, true, false];
const multidata2 = [
    {
        name: 'Alpha',
        amount: 52,
        money: 5
    },
    {
        name: 'Beta',
        amount: 2,
        money: 1
    },
    {
        name: 'Gamma',
        amount: 512,
        money: 59
    },
];



const styles2 = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles2)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
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

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


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
            <DialogTitle>Вывод токенов</DialogTitle>
            <TextField
                id="outlined-name"
                label="Name"
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
            />
        </Dialog>

        <Container className={styles.Grid1} >
            <Box className={styles.Item1}>
                <Typography style={shift} variant='h5'><b>{data[0].type && data[0].type}</b></Typography>
                <ArrowAndInfo {...data[0]} />
            </Box>
            <Box className={styles.Item2}>
                <Typography style={shift} variant='h5'><b>{data[1].type && data[1].type}</b></Typography>
                <ArrowAndInfo {...data[1]} />
            </Box>
        </Container>

        <Box className={styles.Item5}>
            <Delta {...profile} pullOffFunc={this.handleClickOpen}/>
        </Box>

        <Container className={styles.Grid2} >
            <Box className={styles.Item3}>
                <ArrowAndInfo {...data[2]} />
                <Typography style={shift} variant='h5'><b>Соседние ячейки</b></Typography>
                <MultiArrow data={multidata} arr={arr} />
            </Box>
            <Box className={styles.Item4}>
                <ArrowAndInfo {...data[3]} />
                <Typography style={shift} variant='h5'><b>Нагрузка</b></Typography>
                <MultiArrow data={multidata2} arr={arr2} />
            </Box>
        </Container>
    </div>;
    }
}

export default MainPage;
