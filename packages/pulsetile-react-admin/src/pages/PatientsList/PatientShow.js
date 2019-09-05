import React from "react";
import get from "lodash/get";
import moment from "moment";

import { TextField, DateField } from "react-admin";

import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

import PatientShowTemplate from "./templates/PatientShowTemplate";

const styles = {
    labelBlock: {
        '& > div': {
            marginTop: "0px !important",
            marginBottom: "0px !important",
        },
    },
    label: {
        marginBottom: 5,
    }
};

function getPatientAge(birthDate) {
    const birthDateObj = new Date(birthDate);
    const currentDateObj = new Date();
    const birthDateMoment = moment([birthDateObj.getFullYear(), birthDateObj.getMonth(), birthDateObj.getDate()]);
    const currentDateMoment = moment([currentDateObj.getFullYear(), currentDateObj.getMonth(), currentDateObj.getDate()]);
    return currentDateMoment.diff(birthDateMoment, 'years');
}

/**
 * This component returns block with Patient details component
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
const PatientShow = props => {
    const { classes, contextProps, currentData, id } = props;

    const patientIdLabel = get(contextProps, 'themeCommonElements.patientIdLabel', 'NHS No.');
    const showPatientsAge = get(contextProps, 'themeCommonElements.showPatientsAge', false);
    const currentPatientData = get( currentData, id, null);
    const birthDate = get(currentPatientData, 'birthDate', null);
    const birthDateValue = moment(birthDate).format('DD-MM-YYYY');
    const hidePatientDistrict = get(contextProps, 'themeCommonElements.hidePatientDistrict', false);
    return (
        <PatientShowTemplate pageTitle="Patient" {...props}>
            <TextField className={classes.labelBlock} label="Name" source="firstName" />
            <TextField className={classes.labelBlock} label="Surname" source="lastName" />
            {
                currentPatientData ?
                    <div className={classes.labelBlock} >
                        <Typography className={classes.label} variant="caption">{showPatientsAge ? "Date of Birth (age)" : "Date of Birth"}</Typography>
                        <Typography>{showPatientsAge ? birthDateValue + ' (' + getPatientAge(birthDate) + ')' : birthDateValue}</Typography>
                    </div>
                    :
                    <DateField className={classes.labelBlock} label="Date of Birth" source="birthDate" />
            }
            <TextField className={classes.labelBlock} label="Gender" source="gender" />
            <TextField className={classes.labelBlock} label="Address" source="address" />

            { !hidePatientDistrict &&
                <TextField className={classes.labelBlock} label="District" source="district" />
            }

            <TextField className={classes.labelBlock} label="City" source="city" />
            <TextField className={classes.labelBlock} label="Country" source="country" />
            <TextField className={classes.labelBlock} label="Telephone Number" source="phone" />
            <TextField className={classes.labelBlock} label={patientIdLabel} source="nhsNumber" />
        </PatientShowTemplate>
    );
};

export default withStyles(styles)(PatientShow);