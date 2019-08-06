import React from "react";

import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ChevronRight from "@material-ui/icons/ChevronRight";

const DummyItemsList = ({ classes, items, list, history }) => {
    return (
        <List className={classes.list}>
            {items.slice(0).map((item, key) => {
                return (
                        <li key={key} className={classes.listItem}>
                            <Typography noWrap={true}>
                                {item}
                            </Typography>
                            { item && <ChevronRight /> }
                        </li>
                    );
                })
            }
        </List>
    )
};

export default DummyItemsList;