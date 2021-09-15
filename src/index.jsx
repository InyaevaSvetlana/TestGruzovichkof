import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import ReactDOM from 'react-dom';

 export default function Page(props) {
    return <MyWonderfulComponent props={props}>I'm text from a component</MyWonderfulComponent>}

function MyWonderfulComponent(id, options, children, other) {
const [ summ, setSumm ] = useState(other);
const titleStyle = {
    color: 'red'
}
useEffect(() => {
if (id && options) {
   setSumm (summ + 1);
}
});
return (
    <><h1 style={titleStyle}>Hello World!</h1><Grid>
        <Grid xs={12}>{children}</Grid>;
        <Grid>{summ}</Grid>;
    </Grid></>
);
}
ReactDOM.render(
    <Page />,
    document.getElementById('app'),
 );
 

 