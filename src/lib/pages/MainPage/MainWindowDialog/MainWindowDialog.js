import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import styles from "../MainPage.module.scss";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { currency } from "../../../constants/names";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {makeStyles, Paper, Table, TableBody, TableCell, TableHead, TableRow, withStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Close } from "@material-ui/icons";
import MuiDialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent/DialogContent";
import LockState from "./LockState";



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

const tableRowStyles = theme => ({
    unusual: {
        backgroundColor: '#fdfdfd'
    }
});

const useStyles = makeStyles(tableRowStyles);

const MainWindowDialog = ({open, onClose, profile, multidata}) => {
    const mystyles = useStyles();

    return  <Dialog
        open={open}
        onClose={onClose}
    >
        <DialogTitle onClose={onClose}>Вывод токенов</DialogTitle>
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
                            multidata.map((value, index) => <TableRow className={value.state !== 'locked' ? mystyles.unusual : ''}  key={index}>
                                <TableCell align='left'><Typography color={value.state !== 'locked' ? 'textSecondary' : 'textPrimary'} variant='body1'>{value.name} </Typography> </TableCell>
                                <TableCell align='right'><Typography color={value.state !== 'locked' ? 'textSecondary' : 'textPrimary'} variant='body1'>{value.blocked} </Typography> </TableCell>
                                <TableCell align='center'> <LockState state={value.state} />
                                </TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </Paper>
        </Box></DialogContent>

    </Dialog>
}

export default MainWindowDialog;
