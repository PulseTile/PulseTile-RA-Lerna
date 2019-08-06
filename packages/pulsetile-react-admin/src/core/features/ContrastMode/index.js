import React, { Component } from "react";
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ContrastIcon from '@material-ui/icons/Tonality';
import Tooltip from '@material-ui/core/Tooltip';

import { contrastModeAction } from "../../actions/contrastModeAction";

const styles = theme => ({
    rightBlockItem: {
        display: "inline-flex",
            position: "relative",
            minHeight: 54,
            minWidth: 54,
            justifyContent: "center",
            alignItems: "center",
            borderLeft: `1px solid ${theme.palette.borderColor}`,
            '&:hover': {
            backgroundColor: theme.palette.mainColor,
        },
        '&:active': {
            backgroundColor: theme.palette.mainColor,
        },
        '&:hover button': {
            color: "white",
        },
        '&:active button': {
            color: "white",
        },
        '&:hover a': {
            color: "white",
        },
        '&:active a': {
            color: "white",
        },
    },
    rightBlockButton: {
        color: theme.palette.mainColor,
            '&:hover': {
            color: "white",
        },
    },
});

/**
 * Thic component returns Contrast Mode button
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
class ContrastMode extends Component {

    state = {
        isContrastMode: false,
    };

    toggleContrastMode = () => {
        this.setState(
            state => ({ isContrastMode: !this.state.isContrastMode }),
            () => this.props.contrastModeAction(this.state.isContrastMode)
        );
    };

    render() {
        const { classes, contrastMode } = this.props;
        return (
            <div className={classes.rightBlockItem}>
                <Tooltip title="Contrast mode">
                    <IconButton
                        className={classes.rightBlockButton}
                        aria-haspopup="true"
                        color="inherit"
                        onClick={this.toggleContrastMode}
                        aria-label="Contrast mode"
                    >
                        <ContrastIcon />
                    </IconButton>
                </Tooltip>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        contrastMode: state.custom.contrastMode.data,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        contrastModeAction(mode) {
            dispatch(contrastModeAction.request(mode));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ContrastMode));
