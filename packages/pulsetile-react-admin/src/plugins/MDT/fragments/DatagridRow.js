import React from "react";
import moment from "moment";

import TableCell from '@material-ui/core/TableCell';

import CustomDatagridRow from "../../../common/ResourseTemplates/ListTemplate/fragments/CustomDatagridRow";
import { DATE_FORMAT } from "../../../common/ResourseTemplates/ListTemplate/fragments/constants";

const MdtDatagridRow = props => {
    const { record } = props;
    if (!record) {
        return null;
    }
    return (
        <CustomDatagridRow {...props} >
            <TableCell key={`${record.id}-dateOfRequest`}>
                {moment(record.dateOfRequest).format(DATE_FORMAT)}
            </TableCell>
            <TableCell key={`${record.id}-serviceTeam`}>
                {record.serviceTeam}
            </TableCell>
            <TableCell key={`${record.id}-dateOfMeeting`}>
                {moment(record.dateOfMeeting).format(DATE_FORMAT)}
            </TableCell>
            <TableCell key={`${record.id}-source`}>
                {record.source}
            </TableCell>
        </CustomDatagridRow>
    );
};

export default MdtDatagridRow;
