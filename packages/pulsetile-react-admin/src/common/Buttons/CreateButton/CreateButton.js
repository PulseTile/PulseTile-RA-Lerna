import React from "react";
import get from "lodash/get";

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    createButton: {
        display: "block",
        width: 135,
        height: 40,
        margin: 8,
        padding: 0,
        backgroundColor: theme.palette.paperColor,
        color: theme.palette.buttonsColor,
        border: `1px solid ${theme.palette.buttonsColor}`,
        borderRadius: theme.isRectangleButtons ? 0 : 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            backgroundColor: theme.palette.buttonsColor,
            color: "white",
        }
    },
    invertedCreateButton: {
        display: "block",
        width: 135,
        height: 40,
        margin: 8,
        padding: 0,
        backgroundColor: theme.palette.buttonsColor,
        color: theme.palette.paperColor,
        borderRadius: theme.isRectangleButtons ? 0 : 25,
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
            backgroundColor: theme.palette.paperColor,
            color: theme.palette.buttonsColor,
            border: `1px solid ${theme.palette.buttonsColor}`,
        }
    },
    buttonInsideBlock: {
        display: 'flex',
    },
    label: {
        marginTop: 4,
        marginRight: 5,
    },
});

/**
 * This component returns Edit button
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  classes
 * @param {shape}  history
 * @param {string} redirectPath
 * @param {shape}  contextProps
 */
const CreateButton = ({ classes, history, redirectPath, contextProps }) => {
    const isInvertedButton = get(contextProps, 'themeCommonElements.isCreateButtonInverted', false);
    return (
        <Tooltip title="Create">
            <IconButton aria-label="Create" className={isInvertedButton ? classes.invertedCreateButton : classes.createButton} onClick={() => history.push(redirectPath)}>
            {
                isInvertedButton ?
                    <div className={classes.buttonInsideBlock}>
                        <div className={classes.label}>Add new</div> <AddIcon />
                    </div>
                :
                    <div className={classes.buttonInsideBlock}>
                        <AddIcon /> <div className={classes.label}>Create</div>
                    </div>
            }
            </IconButton>
        </Tooltip>
    );
};

export default withStyles(styles)(CreateButton);
