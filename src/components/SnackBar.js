import React from 'react'
import { useSnackbar } from 'react-simple-snackbar'
const options = {
    position: 'top-center'
}

export function SnackBar() {
    const [openSnackbar, closeSnackbar] = useSnackbar(options);
    return (<input type="submit" value="Send Message" className="special" onClick={() =>openSnackbar('This is the content of the Snackbar.')}/>
    )
}