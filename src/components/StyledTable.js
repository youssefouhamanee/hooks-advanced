import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TableRow, TableCell } from "@material-ui/core";
import { Translate } from "@material-ui/icons";
export const useStyles = makeStyles((theme) => ({
	container: {
		width: "50%"
	},
	completedTask: {
		textDecoration: "line-through",
		backgroundColor: "#fbb",
		color: "#555"
	}
}));
export const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.black,
		fontWeight: 600
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover
		}
	}
}))(TableRow);

export const classesModal = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.black,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		top: "30%",
		left: "30%"
	},
	root: {
		"& > *": {
			marginRight: theme.spacing(1)
		}
	},
	contentUpdate: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		height: "120px"
	}
}));
