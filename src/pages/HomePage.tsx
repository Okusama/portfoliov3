import React from "react";
import {HomeState} from "../interfaces/IHomePage";
import * as HomeData from "../data/home_page_data.json";

export default class HomePage extends React.Component<HomeState> {

    state: HomeState;

    constructor(props: any){
        super(props);
        this.state = {
            presentation_bloc: {
                path: HomeData.presentation_bloc.path,
                color: HomeData.presentation_bloc.color
            },
            realisation_bloc: {
                path: HomeData.realisation_bloc.path,
                color: HomeData.realisation_bloc.color
            },
            project_bloc: {
                path: HomeData.project_bloc.path,
                color: HomeData.project_bloc.color
            },
            contact_bloc: {
                path: HomeData.contact_bloc.path,
                color: HomeData.contact_bloc.color
            }
        };
    }

    render(){
        return(
            <div className="homeMain">
                <section>
                    <svg viewBox="0 0 840 420" preserveAspectRatio="xMinyMin meet">
                        <desc>Présentation de mon profil</desc>
                        <path d={this.state.presentation_bloc.path} stroke={this.state.presentation_bloc.color} fill="none" fillOpacity="0"/>
                        <text x="440" y ="210" textAnchor="middle" stroke={this.state.presentation_bloc.color}>Presentation</text>
                    </svg>
                </section>
                <section>
                    <svg viewBox="0 0 840 420" preserveAspectRatio="xMinyMin meet">
                        <desc>Voir mes réalisations</desc>
                        <path d={this.state.realisation_bloc.path} stroke={this.state.realisation_bloc.color} fill="none" fillOpacity="0"/>
                        <text x="440" y ="210" textAnchor="middle" stroke={this.state.realisation_bloc.color}>Realisation</text>
                    </svg>
                </section>
                <section>
                    <svg viewBox="0 0 840 420" preserveAspectRatio="xMinyMin meet">
                        <desc>Voir mes projets</desc>
                        <path d={this.state.project_bloc.path} stroke={this.state.project_bloc.color} fill="none" fillOpacity="0"/>
                        <text x="440" y ="210" textAnchor="middle" stroke={this.state.project_bloc.color}>Projets</text>
                    </svg>
                </section>
                <section>
                    <svg viewBox="0 0 840 420" preserveAspectRatio="xMinyMin meet">
                        <desc>Me suivre sur Twitter/GitHub/Linkdin ou me laisser un message</desc>
                        <path d={this.state.contact_bloc.path} stroke={this.state.contact_bloc.color} fill="none" fillOpacity="0"/>
                        <text x="440" y ="210" textAnchor="middle" stroke={this.state.contact_bloc.color}>Contact</text>
                    </svg>
                </section>
            </div>
        );
    }
}