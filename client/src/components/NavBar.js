import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';



function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div">
                <Button color = "inherit">
                    <TypoGraphy color="inherit" variant="title">
                        Home
                    </TypoGraphy>
                </Button>
                
                <Button color = "inherit">
                    <TypoGraphy color="inherit" variant="title">
                        Categories
                    </TypoGraphy>
               </Button>
                </ListItem >

        </List>
    )
}


export default NavBar;