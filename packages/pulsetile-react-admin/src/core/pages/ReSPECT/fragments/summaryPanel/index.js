import React, { Component } from "react";
import get from "lodash/get";
import { connect } from 'react-redux';

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Grid from '@material-ui/core/Grid';
import { faNotesMedical  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { versionsServerAction } from "../../../../actions/ReSPECT/versionsServerAction";
import { modalOpenAction } from "../../../../actions/ReSPECT/modalOpenAction";
import ListBlock from "./ListBlock";
import { SHOW_ALL } from "../../../PatientSummary/config";

const styles = theme => ({
    card: {
        borderRadius: 0,
    },
    media: {
        backgroundColor: theme.palette.mainColor,
    },
    container: {
        background: theme.patientSummaryPanel.container.background,
        backgroundSize: "cover",
    },
    topBlock: {
        display: "flex",
        flexDirection: "column",
        height: 100,
        backgroundColor: theme.palette.mainColor,
        background: theme.patientSummaryPanel.topBlock.background,
        backgroundSize: "cover",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
    },
    topBlockInverted: {
        display: "flex",
        flexDirection: "column",
        height: 100,
        backgroundColor: theme.palette.tableHeadColor,
        background: theme.patientSummaryPanel.topBlock.background,
        backgroundSize: "cover",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.fontColor,
    },
    iconInverted: {
        color: theme.palette.mainColor,
        marginBottom: 10,
    },
    icon: {
        marginBottom: 10,
    },
    titleInverted: {
        color: theme.palette.fontColor,
        marginBottom: 0,
    },
    title: {
        marginBottom: 0,
    },
    list: {
        padding: 0,
        "& a": {
            textDecoration: "none",
        }
    },
    feedsItem: {
        fontSize: "1rem",
    },
    respectLogo: {
        width: "auto",
    },
    listItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 48,
        paddingLeft: 15,
        fontSize: "1rem",
        borderLeft: `1px solid ${theme.palette.borderColor}`,
        borderRight: `1px solid ${theme.palette.borderColor}`,
        borderBottom: `1px solid ${theme.palette.borderColor}`,
        '& svg': {
            color: theme.palette.fontColor,
        }
    },
    emptyRows: {
        height: 150,
        borderLeft: `1px solid ${theme.palette.borderColor}`,
        borderRight: `1px solid ${theme.palette.borderColor}`,
        borderBottom: `1px solid ${theme.palette.borderColor}`,
    },
});

/**
 * This component returns ReSPECT plugin card for summary
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param props
 * @constructor
 */
class RespectSummaryPanel extends Component {

    componentDidMount() {
        this.props.getVersionsFromServer();
    }

    render() {
        const { classes, loading, history, showMode, versionsServerInfo, toggleRespectModal, showHeadings, contextProps } = this.props;
        const isOldDesign = get(contextProps, 'themeCommonElements.isOldDesign', false);
        const menuHasChevrons = get(contextProps, 'themeCommonElements.menuHasChevrons', false);
        const isTableHeaderInverted = get(contextProps, 'themeCommonElements.invertedTableHeaders', false);
        if (Object.values(showHeadings).indexOf('respect') === -1) {
            return null;
        }
        return (
            <Grid item xs={12} sm={6} md={6} lg={3}>
                <Card className={classes.card}>
                    <div className={isTableHeaderInverted ? classes.topBlockInverted : classes.topBlock} onClick={() => history.push('/respect')}>
                        { !isOldDesign && <FontAwesomeIcon icon={faNotesMedical} size="2x" className={isTableHeaderInverted ? classes.iconInverted : classes.icon} /> }
                        <h1 className={classes.mainHeading}>
                            <Typography gutterBottom className={isTableHeaderInverted ? classes.titleInverted : classes.title} >
                                ReSPECT
                            </Typography>
                            { menuHasChevrons && <ChevronRight /> }
                        </h1>
                    </div>
                    { (showMode === SHOW_ALL || !showMode) &&
                        <ListBlock
                            loading={loading}
                            classes={classes}
                            items={versionsServerInfo}
                            history={history}
                            toggleRespectModal={toggleRespectModal}
                            contextProps={contextProps}
                        />
                    }
                </Card>
            </Grid>
        );
    }
};

const mapStateToProps = state => {
    return {
        versionsServerInfo: state.custom.versionsServerInfo.data,
        showHeadings: state.custom.showHeadings.data,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getVersionsFromServer() {
            dispatch(versionsServerAction.request());
        },
        toggleRespectModal() {
            dispatch(modalOpenAction.request());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RespectSummaryPanel));