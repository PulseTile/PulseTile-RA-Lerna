import React from "react";
import moment from "moment";

import TableCell from '@material-ui/core/TableCell';

import CustomDatagridRow from "../../../common/ResourseTemplates/ListTemplate/fragments/CustomDatagridRow";
import { DATE_FORMAT } from "../../../common/ResourseTemplates/ListTemplate/fragments/constants";

const EventsDatagridRow = props => {
    const { record } = props;
    if (!record) {
        return null;
    }
    return (
        <CustomDatagridRow {...props} >
            <TableCell key={`${record.name}-name`}>
                {record.name}
            </TableCell>
            <TableCell key={`${record.id}-type`}>
                {record.type}
            </TableCell>
            <TableCell key={`${record.id}-dateCreated`}>
                {moment(record.dateCreated).format(DATE_FORMAT)}
            </TableCell>
        </CustomDatagridRow>
    );
};

export default EventsDatagridRow;
