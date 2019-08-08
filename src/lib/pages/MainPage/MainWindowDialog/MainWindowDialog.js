import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import styles from "../MainPage.module.scss";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { currency } from "../../../../loc/current/names";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, withStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Close } from "@material-ui/icons";
import MuiDialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent/DialogContent";
import LockState from "./LockState";
import {config} from "../../../../loc/current/config";



const styles2 = theme => ({
    root: {
        margin: 0,
        paddingTop: '40px',
        paddingLeft: '32px'
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
            <Typography variant="h4"><b>{children}</b></Typography>
            {onClose ? (
                <IconButton color='primary' aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <Close />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

function MainWindowDialog ({open, onClose, profile, multidata, onUnlock, ...rest}) {
    const [sum, setSum] = useState();
    const moneyToRelease = profile.money-multidata.reduce((acc, curr) => acc + ((curr.state === 'locked') ? curr.blocked : 0), 0);

    return  <Dialog
        open={open}
        onClose={onClose}
        {...rest}
    >
        <DialogTitle onClose={onClose}>{config.mainPage.dialog.heading.label}</DialogTitle>
        <MuiDialogContent><Box className={styles.DialogContent}>

            <Box className={styles.FieldAndButton}>
                <TextField
                    id="outlined-name"
                    label={config.mainPage.dialog.content.form.placeholder.label}
                    // value={values.name}
                    // onChange={handleChange('name')}
                    variant="outlined"
                    style={{fontWeight: 'bold'}}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{currency}</InputAdornment>,
                    }}
                    value={sum}
                    onChange={(event => setSum(event.target.value))}
                />
                <Button variant='contained' color='primary' >{config.mainPage.dialog.content.form.button.label}</Button>
            </Box>
            <br/>
            <Box className={styles.MoneyInfo}>
                <Box className={styles.Balance}>
                    <Typography display={"inline"}>{config.mainPage.dialog.content.balance.label}&nbsp;</Typography>
                    <Typography style={{fontFamily: 'Roboto Mono'}} display={"inline"} variant='body1'>{`${profile.money}`}</Typography>
                    <Typography display={"inline"}>&nbsp;{`${currency}`}</Typography>
                </Box>
                <Box className={styles.ReadyToRelease}>
                    <Typography display={"inline"} variant='body1' style={{justifySelf: 'start'}}>{config.mainPage.dialog.content.readyToWithdraw.label}&nbsp;</Typography>
                    <Box onClick={(event => setSum(moneyToRelease))} className={styles.ReadyToRelease__button}>
                        <Typography style={{fontFamily: 'Roboto Mono'}} display={"inline"} variant='body1'>{`${moneyToRelease}`}</Typography>
                        <Typography display={"inline"} variant='body1' style={{justifySelf: 'start'}}>&nbsp;{`${currency}`}</Typography>
                    </Box>
                </Box>
            </Box>
            <br/>
            <Typography display={"inline"} variant={"body1"} style={{fontFamily: 'Roboto Mono'}}>
                {multidata.reduce((acc, curr) => acc + ((curr.state === 'locked') ? curr.blocked : 0), 0)}
            </Typography>
            <Typography display={"inline"} variant='body1'>&nbsp;{`${currency} ${config.mainPage.dialog.content.text.label}`}</Typography>
            <br/>
            <br/>
            <Paper className={styles.Table}>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'><b>{config.mainPage.dialog.content.table.user.label}</b></TableCell>
                            <TableCell align='center'><b>{currency}</b></TableCell>
                            <TableCell align='center'><b>{config.mainPage.dialog.content.table.unlock.label}</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            multidata.map((value, index) => <TableRow key={index}>
                                <TableCell align='left'><Typography color={value.state !== 'locked' ? 'textSecondary' : 'textPrimary'} variant='body1'>{value.name} </Typography> </TableCell>
                                <TableCell align='right'><Typography style={{fontFamily: 'Roboto Mono'}} color={value.state !== 'locked' ? 'textSecondary' : 'textPrimary'} variant='body1'>{value.blocked} </Typography> </TableCell>
                                <TableCell align='center'> <LockState id={value.id} istate={value.state} onUnlock={onUnlock} />
                                </TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </Paper>
        </Box></MuiDialogContent>

    </Dialog>
}


export default MainWindowDialog;
