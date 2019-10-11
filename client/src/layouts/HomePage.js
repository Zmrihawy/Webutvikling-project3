import React from "react";
import Item from "../components/Item";

// Material Ui elements
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

// Database linking
import {useEffect} from "react";
import {connect} from "react-redux";
import {getComponents} from "../redux/actions/componentActions";


// HomePage layout
const HomePage = props => {

    // eslint-disable-next-line react/prop-types
    const {getComponents, components} = props;
    // const [open, setOpen] = useState({}); didnt need this ? maybe ? - Rahim


    useEffect(() => {
        getComponents();
    }, [getComponents]);


    // eslint-disable-next-line react/prop-types
    const mappedItems = components.map(component => (
        <Grid key={component.id}>
            <Item
                img={component.pictureURL}
                title={component.name}
                description={component.description}
                category={component.category}
                price={component.price}/>
        </Grid>
    ));


    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <CssBaseline/>
                <Typography
                    component="div"
                    style={{backgroundColor: "", height: "100vh", marginTop: "20px", borderRadius: "4px"}}>

                    <Typography variant="h3" style={{margin: "20px"}}>
                        Welcome to our website
                    </Typography>

                    <Divider/>
                    <div className="_homepage">
                        <Typography variant="subtitle1" style={{marginTop: "20px"}}>
                            {" "} Featured Items {" "}
                        </Typography>

                      <Grid container spacing={2} justify="center" className="_homepage_featured">
                        {mappedItems}
                      </Grid>

                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
};

// Map redux state and actionCreators to props
function mapStateToProps(state) {
    const {component} = state;
    return {components: component.components};
}

const actionCreators = {
    getComponents
};

export default connect(mapStateToProps, actionCreators)(HomePage);
