import React from "react";

interface HomeState {
    path: number;
}

export default class HomePage extends React.Component<HomeState> {

    state: HomeState;

    constructor(props: any){
        super(props);
        this.state = {
            path: 0
        };
    }

    render(){
        return(
            <div>
                <h1>Home page</h1>
                {this.state.path}
            </div>
        );
    }
}