/* eslint-disable react/jsx-fragments */
import * as React from "react"
import Button from "@mui/material/Button"
import {styled} from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"

import Image from "next/image"
// import UserForm from "../Form"
// import contactIphone from "../../../../../../../public/svg/contact-iphone.svg"

const BootstrapDialog = styled(Dialog)(({theme}) => ({
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}))

export default function CustomizedDialogs({title, firstletter}) {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<React.Fragment>
			<Button onClick={handleClickOpen} className="animation myFont text-white hover:scale-105 duration-200 font-semibold">
				{firstletter}
				<div className="myFont lowercase">{title}</div>
			</Button>
			<BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} PaperProps={{sx: {padding: "2rem 1rem", maxWidth: "100%"}}}>
				<DialogTitle className="md:pl-9 p-0" sx={{m: 0, p: 0, pl: "56px"}} id="customized-dialog-title">
					<p className="font-semibold text-2xl md:text-left text-center">Me contacter</p>
				</DialogTitle>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					className="md:flex hidden"
					sx={{
						position: "absolute",
						right: 38,
						top: 38,
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogContent
					dividers
					className="md:p-9 p-0"
					sx={{
						display: "flex",
					}}
				>
					<p>Mon tel: 0699197324</p>
					<p>Mon email: romain.flori-cantrelle@epitech.eu</p>

				</DialogContent>
			</BootstrapDialog>
		</React.Fragment>
	)
}
