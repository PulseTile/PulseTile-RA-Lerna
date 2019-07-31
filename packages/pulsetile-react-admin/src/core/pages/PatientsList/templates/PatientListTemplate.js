import React, { Component } from "react";
import get from "lodash/get";
import { connect } from 'react-redux';
import { Route } from "react-router";

import { withStyles } from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography/index';
import TableIcon from '@material-ui/icons/List';
import ChartIcon from '@material-ui/icons/ShowChart';
import TimelineIcon from '@material-ui/icons/Timeline';

import Paper from '@material-ui/core/Paper/index';
import IconButton from '@material-ui/core/IconButton/index';
import Tooltip from '@material-ui/core/Tooltip/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import { faFilter } from '@fortawesome/free-solid-svg-icons/index';

import { columnsTogglingAction } from "../../../actions/columnsTogglingAction";

import Breadcrumbs from "../../../common/Breadcrumbs";
import TableHeader from "../../../common/TableHeader/TableHeader";
import CustomIcon from "../../../common/CustomIcon";
import DetailsTemplate from "../../../common/ResourseTemplates/DetailsTemplate";

import { MODE_TIMELINE, MODE_TABLE, MODE_CHART } from "../../../common/ResourseTemplates/fragments/constants";
import TableContent from "../../../common/ResourseTemplates/fragments/TableContent";
import ChartContent from "../../../common/ResourseTemplates/fragments/ChartContent";
import TimelineContent from "../../../common/ResourseTemplates/fragments/TimelineContent";
import ListModePopover from "../../../common/ResourseTemplates/popovers/ListModePopover";
import ColumnsTogglingIcon from "../../../common/ResourseTemplates/icons/ColumnsTogglingIcon";

const listStyles = theme => ({
    container: {
        width: '100vw',
        height: '100%',
        background: theme.patientSummaryPanel.container.background,
        backgroundSize: "cover",
    },
    mainBlock: {
        width: '100%',
        margin: 0,
        padding: 10,
        border: `1px solid ${theme.palette.borderColor}`,
    },
    list: {
        paddingLeft: 0,
    },
    blockTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 49,
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 15,
        paddingRight: 10,
    },
    emptyBlock: {
        flexGrow: 1,
    },
    title: {
        color: theme.isOldDesign ? theme.palette.fontColor : theme.palette.paperColor,
        backgroundColor: theme.palette.mainColor,
        fontSize: 18,
        fontWeight: 700,
    },
    filterIcon: {
        color: theme.isOldDesign ? `${theme.palette.secondaryMainColor} !important` : `${theme.palette.paperColor} !important`,
        paddingLeft: 10,
        paddingRight: 10,
        border: theme.isOldDesign ? `1px solid ${theme.palette.secondaryMainColor}` : null,
        height: 35,
    },
    listModeIcon: {
        color: theme.isOldDesign ? `${theme.palette.secondaryMainColor} !important` : `${theme.palette.paperColor} !important`,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5,
        border: theme.isOldDesign ? `1px solid ${theme.palette.secondaryMainColor}` : null,
        height: 35,
    },
    filterInput: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        backgroundColor: `${theme.palette.mainColor} !important`,
        borderRadius: 0,
        boxShadow: "none",
        '& button': {
            color: "#fff",
        },
    },
    filterInputIcon: {
        color: theme.palette.fontColor,
        marginLeft: 5,
        marginBottom: 10,
    },
    inputBlock: {
        width: 'calc(100% - 60px)',
        borderRadius: theme.isOldDesign ? 0 : 18,
        height: 36,
        border: theme.isOldDesign ? `1px solid ${theme.palette.disabledColor}` : 0,
        backgroundColor: theme.isOldDesign ? theme.palette.paperColor : theme.palette.disabledColor,
        paddingLeft: 5,
        marginLeft: 10,
        marginBottom: 10,
    },
});

/**
 * This component returns template for List page
 * (it used in List blocks for the plugins Allergies, Contacts, Medications, Problems etc.)
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 */
class ListTemplate extends Component {

    state = {
        listMode: MODE_TABLE,
        anchorEl: null,
        isListOpened: true,
        isFilterOpened: false,
        filterText: null,
        userClinicalQuery: null,
        key: 0,
        hiddenColumns: [],
    };

    /**
     * This function returns create page URL
     *
     * @author Bogdan Shcherban <bsc@piogroup.net>
     * @return {string}
     */
    getCreateUrl = () => {
        return "/" + this.props.resourceUrl + "/create";
    };

    /**
     * This function returns details page URL
     *
     * @author Bogdan Shcherban <bsc@piogroup.net>
     * @return {string}
     */
    getDetailsUrl = () => {
        return "/" + this.props.resourceUrl + "/:id";
    };

    /**
     * This function checks is current create page
     *
     * @author Bogdan Shcherban <bsc@piogroup.net>
     * @return {string}
     */
    isCreatePage = () => {
        return (this.props.location.pathname === this.getCreateUrl());
    };

    /**
     * This function toggle filter input
     *
     * @author Bogdan Shcherban <bsc@piogroup.net>
     */
    toggleFilter = () => {
        this.setState({
            isFilterOpened: !this.state.isFilterOpened,
        })
    };

    toggleListBlock = e => {
        e.stopPropagation();
        this.setState({
            isListOpened: !this.state.isListOpened,
        })
    };

    /**
     * This function check is current page is list page with table (it also used at create and show pages).
     * Settings of <Grid /> component of <ListTemplate /> depends on result of this function.
     *
     * Second part of condition - for the case when list page is a homepage
     *
     * @author Bogdan Shcherban <bsc@piogroup.net>
     * @return {boolean}
     */
    isListPage = () => {
        return (this.props.location.pathname === `/${this.props.resourceUrl}`) || (this.props.location.pathname === '/');
    };

    /**
     * This function set filter string to state
     *
     * @author Bogdan Shcherban <bsc@piogroup.net>
     * @param {shape} e
     */
    filterByText = e => {
        this.setState({
            filterText: e.target.value,
            key: this.state.key + 1,
        })
    };

    filterByUserSearch = () => {
        this.setState((state, props) => {
            if (state.filterText !== props.userSearch) {
                return {
                    filterText: props.userSearch,
                    key: this.state.key + 1,
                }
            }
        });
    };

    filterByUserSearchId = () => {
        this.setState((state, props) => {
            if (state.filterText !== props.userSearchID) {
                return {
                    filterText: props.userSearchID,
                    key: this.state.key + 1,
                }
            }
        });
    };

    filterByUserSearchType = () => {
        this.setState((state, props) => {
            if (state.filterText !== props.userSearchValue) {
                return {
                    filterText: props.userSearchValue,
                    key: this.state.key + 1,
                }
            }
        });
    };

    filterByClinicalQuery = () => {
        this.setState((state, props) => {
            if (state.userClinicalQuery !== props.userClinicalQuery) {
                return {
                    userClinicalQuery: props.userClinicalQuery,
                    key: this.state.key + 1,
                }
            }
        });
    };

    hasNewItem = (resource, newListArray, prevListArray, nextProps, userSearch) => {
        let result = false;
        const newDataArray = Object.values(get(nextProps, 'currentData', {}));
        for (let i = 0, n = newDataArray.length; i < n; i++) {
            let item = newDataArray[i];
            if (resource === 'patients' && get(item, 'isNew', false) && get(item, 'lastName', null) === userSearch) {
                result = true;
                break;
            }
            if (resource !== 'patients' && get(item, 'isNew', false)) {
                result = true;
                break;
            }
        }
        return result;
    };

    componentDidMount() {
        const { resourceUrl, toggleColumnStore, defaultHiddenColumns } = this.props;
        if (defaultHiddenColumns) {
            defaultHiddenColumns.map(item => {
                toggleColumnStore(resourceUrl, item, false);
            });
        }
        this.setState({
            hiddenColumns: defaultHiddenColumns,
        });

        if (defaultHiddenColumns) {
            this.props.updateTableHead();
        }


    }

    componentWillReceiveProps(nextProps, nextContext) {
        const newListArray = Object.values(get(nextProps, 'currentList', {}));
        const prevListArray = Object.values(get(this.props, 'currentList', {}));
        const userSearch = get(nextProps, 'userSearch', null);
        const resource = get(nextProps, 'resource', null);
        const hasNewItem = this.hasNewItem(resource, newListArray, prevListArray, nextProps, userSearch);
        if (newListArray.length === 1 && prevListArray.length === 0 && hasNewItem) {
            this.setState({
                key: this.state.key + 1
            });
        }
    }

    getListModeIcon = () => {
        const { listMode } = this.state;
        let result = TableIcon;
        if (listMode === MODE_CHART) {
            result = ChartIcon;
        } else if (listMode === MODE_TIMELINE) {
            result = TimelineIcon;
        }
        return result;
    };

    getContentBlock = () => {
        const { listMode } = this.state;
        let result = TableContent;
        if (listMode === MODE_CHART) {
            result = ChartContent;
        } else if (listMode === MODE_TIMELINE) {
            result = TimelineContent;
        }
        return result;
    };

    changeListMode = mode => {
        this.setState({
            listMode: mode,
            anchorEl: false,
        });
    };

    popoverOpen = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    popoverClose = () => {
        this.setState({
            anchorEl: false,
        });
    };

    toggleColumn = (columnName, value) => {
        const { resourceUrl, toggleColumnStore, updateTableHead } = this.props;

        let hiddenColumnsArray = this.state.hiddenColumns;
        let key = this.state.key;

        if (hiddenColumnsArray.indexOf(columnName) !== -1) {
            let index = hiddenColumnsArray.indexOf(columnName);
            hiddenColumnsArray.splice(index, 1);
        } else {
            hiddenColumnsArray.push(columnName);
        }
        key++;

        this.setState({
            hiddenColumns: hiddenColumnsArray,
            key: key,
        }, () => {
            updateTableHead();
            toggleColumnStore(resourceUrl, columnName, value)
        });
    };

    getTitleForAdvancedSearh = (userSearchType, userSearchValue) => {

        console.log('userSearchType', userSearchType)
        console.log('userSearchValue', userSearchValue)

        let result = '';
        if (userSearchType === 'by_city') {
            result = `Patients search by City: ${userSearchValue}`;
        }
        if (userSearchType === 'advanced') {
            result = userSearchValue.title;
        }
        return result;
    };

    getTitleForClinicalSearh = (userClinicalQuery) => {
        let result = 'Patients Clinical Query: ';
        const searchType = get(userClinicalQuery, 'searchType', null);
        const searchValue = get(userClinicalQuery, 'searchValue', null);
        const gender = get(userClinicalQuery, 'gender', null);
        const birthDate = get(userClinicalQuery, 'birthDate', null);
        const maxAge = get(userClinicalQuery, 'maxAge', null);
        const minAge = get(userClinicalQuery, 'minAge', null);
        if (searchType && searchValue) {
            result += ` ${searchType}: ${searchValue}, `;
        }
        if (gender) {
            result += ` gender: ${gender}, `;
        }
        if (birthDate) {
            result += ` birthdate: ${birthDate}, `;
        }
        if (maxAge && minAge) {
            result += ` age: ${minAge}-${maxAge}, `;
        }
        return result;
    };

    render() {
        const { create, resourceUrl, title, classes, history, userSearch, userSearchID, userSearchType, userSearchValue, userClinicalQuery, headerFilterAbsent, currentList, hasChart, hasTimetable, isCustomDatagrid } = this.props;
        const { isFilterOpened, isListOpened, anchorEl, hiddenColumns, key, filterText } = this.state;

        const breadcrumbsResource = [
            { url: "/" + resourceUrl, title: title, isActive: false },
        ];
        const CreateBlock = create;
        const createUrl = this.getCreateUrl();

        let titleTable = title;
        if (userSearch) {
            titleTable = `Patients matching '${userSearch}'`;
            this.filterByUserSearch();
        }
        if (userSearchID) {
            titleTable = `Patients with ID: '${userSearchID}'`;
            this.filterByUserSearchId();
        }
        if (userSearchType && userSearchValue) {
            titleTable = this.getTitleForAdvancedSearh(userSearchType, userSearchValue);
            this.filterByUserSearchType();
        }
        if (userClinicalQuery) {
            titleTable = this.getTitleForClinicalSearh(userClinicalQuery);
            this.filterByClinicalQuery();
        }

        const currentListArray = Object.values(currentList);
        const idsNumber = currentListArray.length > 0 ? currentListArray.length : 0;

        const ListModeIcon = this.getListModeIcon();
        const ContentBlock = this.getContentBlock();

        const open = Boolean(anchorEl);

        return (
            <div className={classes.container}>
                <Breadcrumbs resource={breadcrumbsResource} />
                <Grid container spacing={16} className={classes.mainBlock}>
                    { isListOpened &&
                    <Grid className={classes.list} item xs={12} sm={this.isListPage() ? 12 : 6}>
                        <div className={classes.headerBlock}>
                            <div className={classes.blockTitle}>
                                <Typography className={classes.title}>{titleTable}</Typography>
                                <div className={classes.emptyBlock}></div>
                                {!this.isListPage() &&
                                <Tooltip title="Expand">
                                    <IconButton onClick={() => history.push("/" + resourceUrl)} >
                                        <CustomIcon iconClassName="fa fa-expand" />
                                    </IconButton>
                                </Tooltip>
                                }
                                <ColumnsTogglingIcon hiddenColumns={hiddenColumns} toggleColumn={this.toggleColumn} {...this.props} />
                                {
                                    (hasChart || hasTimetable) &&
                                    <React.Fragment>
                                        <Tooltip title="Table">
                                            <IconButton onClick={e => this.popoverOpen(e)}>
                                                <ListModeIcon className={classes.listModeIcon}/>
                                            </IconButton>
                                        </Tooltip>
                                        <ListModePopover
                                            anchorEl={anchorEl}
                                            open={open}
                                            changeListMode={this.changeListMode}
                                            handleClose={this.popoverClose}
                                            resourse={title}
                                            hasChart={hasChart}
                                            hasTimetable={hasTimetable}
                                        />
                                    </React.Fragment>
                                }
                                { !headerFilterAbsent &&
                                <Tooltip title="Search">
                                    <IconButton onClick={() => this.toggleFilter()}>
                                        <FontAwesomeIcon icon={faFilter} className={classes.filterIcon}  size="1x" />
                                    </IconButton>
                                </Tooltip>
                                }
                            </div>
                            {
                                isFilterOpened &&
                                <div className={classes.filterBlock}>
                                    <Paper className={classes.filterInput} elevation={1}>
                                        <FontAwesomeIcon icon={faFilter} className={classes.filterInputIcon}  size="1x" />
                                        <input className={classes.inputBlock} onChange={e => this.filterByText(e)} placeholder="Filter..." />
                                    </Paper>
                                </div>
                            }
                        </div>
                        {
                            (filterText === userSearch || filterText === userSearchID || filterText === userSearchValue || this.state.userClinicalQuery === this.props.userClinicalQuery) &&
                                <ContentBlock
                                    key={key}
                                    filterText={filterText}
                                    hiddenColumns={hiddenColumns}
                                    createUrl={createUrl}
                                    idsNumber={idsNumber}
                                    isCustomDatagrid={isCustomDatagrid}
                                    history={history}
                                    {...this.props}
                                />
                        }

                    </Grid>
                    }
                    {
                        (!this.isCreatePage())
                            ?
                            <Route
                                path={this.getDetailsUrl()}
                                render={({ match }) => <DetailsTemplate mode="show" isListOpened={isListOpened} toggleListBlock={this.toggleListBlock} {...this.props} id={match.params.id} />}
                            />
                            :
                            <Route
                                path={createUrl}
                                render={({ match }) => <CreateBlock isListOpened={isListOpened} toggleListBlock={this.toggleListBlock} id={match.params.id} {...this.props} />}
                            />
                    }
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps)  => {
    return {
        userSearch: get(state, 'custom.userSearch.data', null),
        userSearchID: get(state, 'custom.userSearch.id', null),
        userSearchType: get(state, 'custom.userSearch.type', null),
        userSearchValue: get(state, 'custom.userSearch.value', null),
        userClinicalQuery: get(state, 'custom.clinicalQuery.data', null),
        currentList: get(state, 'admin.resources[' + ownProps.resource + '].list.ids', []),
        currentData: get(state, 'admin.resources[' + ownProps.resource + '].data', []),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleColumnStore(resource, columnName, value) {
            dispatch(columnsTogglingAction.toggle(resource, columnName, value));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(listStyles)(ListTemplate));
