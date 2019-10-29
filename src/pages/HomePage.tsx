import React from "react";
import {HomeState} from "../interfaces/IHomePage";
import * as HomeData from "../data/home_page_data.json";

export default class HomePage extends React.Component<HomeState> {

    state: HomeState;

    constructor(props: any){
        super(props);
        this.state = {
            presentation_bloc: {
                path: HomeData.presentation_bloc["1920"].path,
                color: HomeData.presentation_bloc["1920"].color
            },
            realisation_bloc: {
                path: "",
                color: ""
            },
            project_bloc: {
                path: "",
                color: ""
            },
            contact_bloc: {
                path: "",
                color: ""
            }
        };
    }

    render(){
        return(
            <div>
                <h1>Home page</h1>
            </div>
        );
    }
}