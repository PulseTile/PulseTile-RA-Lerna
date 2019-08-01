import React from "react";
import get from "lodash/get";
import { translate } from 'react-admin';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { totalSynopsisData } from "../../pages/PatientSummary/config";

const styles = theme => ({
    tableHeaderBlock: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        background: theme.tableHeader.tableHeaderBlock.background,
        backgroundSize: "cover",
        color: theme.palette.paperColor,
        padding: 15,
    },
    mainHeader: {
        margin: 0,
    },
    title: {
        marginTop: 0,
        color: theme.palette.paperColor,
        fontSize: 24,
        fontWeight: 800,
    },
    titleInverted: {
        marginTop: 0,
        color: theme.palette.fontColor,
        fontSize: 24,
        fontWeight: 800,
    },
    description: {
        color: theme.palette.paperColor,
        fontSize: 15,
    },
    descriptionInverted: {
        color: theme.palette.fontColor,
        fontSize: 15,
    },
    icon: {
        color: theme.palette.mainColor,
        marginRight: 15,
    },
});

function getCurrentPlugin(resource) {
    let result = null;
    for (let i = 0, n = totalSynopsisData.length; i < n; i++) {
        let item = totalSynopsisData[i];
        if (item.list === resource) {
            result = item;
            break;
        }
    }
    return result;
}

/**
 * This component returns header for table
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape}  classes
 * @param {shape}  contextProps
 * @param {string} resource
 * @param {func}   translate
 */
const TableHeader = ({ classes, contextProps, resource, translate }) => {
    const plugin = getCurrentPlugin(resource);
    const title = get(plugin, 'title', null);
    const description = get(plugin, 'description', null);
    const icon = get(plugin, 'icon', null);
    const isTableHeaderInverted = get(contextProps, 'themeCommonElements.invertedTableHeaders', false);
    return (
        <div  id="tableHeader" className={classes.tableHeaderBlock} >
            { (isTableHeaderInverted && icon) && <FontAwesomeIcon icon={icon} size="3x" className={classes.icon} /> }
            <div>
                <h1 className={classes.mainHeader}>
                    <Typography id="tableHeader-title" className={isTableHeaderInverted ? classes.titleInverted : classes.title}>{title}</Typography>
                </h1>
                <Typography className={isTableHeaderInverted ? classes.descriptionInverted : classes.description}>{description}</Typography>
            </div>
        </div>
    );
};

export default withStyles(styles)(translate(TableHeader));