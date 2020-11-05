const styles = (theme) => ({
    taskForm: {
        width: '100%',
    },
    textField: {
        width: '80%',
        fontSize: 15,
        fontFamily: "FontAwesome"
    },
    textForm: {
        width: '80%',
    },
    formControl: {
        marginTop: theme.spacing(3),
        width: '100%',
    },
    textSearchControl: {
        width: '100%',
    },
    inputTaskSearch: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: 17
    },
    iconSearch: {
        // padding: 10,
        fontSize: 20,
        color: "#0062cc",
    },
    lblStatus: {
        fontSize: 17
    },
    selectStatus: {
        fontSize: 15,
        fontFamily: "FontAwesome",
        width: "50%",
        marginTop: 16
    },
    tableHead: {
        fontWeight: "bold",
        fontSize: 15,
        fontFamily: "FontAwesome"
    },
    tableCellName: {
        margin: "auto",
        fontSize: 15,
        fontFamily: "FontAwesome",
        whiteSpace: "nowrap",
        width: 100,
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    tableCell: {
        fontSize: 15,
        fontFamily: "FontAwesome",
    },
    btnSort: {
        fontSize: 12,
        fontWeight: "bold",
        backgroundColor: "#0062cc",
        color: "white",
        "&:hover": {
            backgroundColor: "#0062cc"
        },
        fontFamily: "FontAwesome"
    },
    btnAddJob: {
        fontSize: 12,
        paddingLeft: theme.spacing(1),
        fontFamily: "FontAwesome"
    },
    iconAddJob: {
        fontSize: 20,
        marginRight: 3,
        marginTop: -4,
    },
    iconSort: {
        fontSize: 15,
        marginLeft: 5,
    },
    iconAction: {
        fontSize: 13,
        marginRight: 2,
    },
    btnAction: {
        fontSize: 10,
        fontFamily: "FontAwesome",
        margin: 1,
        width: 30
    },
    btnActionEdit: {
        fontSize: 10,
        fontFamily: "FontAwesome",
        margin: 1,
        width: 30,
        backgroundColor: "#f57c00",
        "&:hover": {
            backgroundColor: "#ff9800"
        },
    },
    lblNote: {
        fontSize: 17,
        fontFamily: "FontAwesome"
    },
    iconCloseForm: {
        cursor: "pointer",
        "&:hover": {
            color: "red"
        },
        float: "right",
    },
    btnSearch: {
        marginLeft: "auto"
    }
})

export default styles;