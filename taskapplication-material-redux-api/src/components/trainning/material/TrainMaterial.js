import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import stylesCustom from './styles';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import theme from './common';

class TrainMaterial extends Component {

    render() {
        console.log(this.props);
        const { classes } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <div className="row">
                    <Button variant="contained" color="primary"> Primary</Button>
                    <hr />
                    <Button variant="outlined" color="primary" className={classes.root}> Custom style</Button>
                    <div className={classes.customDiv}>
                        Angular
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default withStyles(stylesCustom)(TrainMaterial);