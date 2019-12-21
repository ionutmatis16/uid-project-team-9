import {EventEmitter} from "events";
import userModel from "./userModel";

class ProjectModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    id: 0,
                    name: "Event Tracker",
                    category: "Smart community",
                    image: "event_tracker.jpg",
                    smallDescription: "Application that notifies the users of their city when events are taking place.",
                    extendedDescription: "extend the descr",
                    nrOfVotes: 201,
                    favorite: false,
                    voted: true,
                    status: "Make a selection"
                },
                {
                    id: 1,
                    name: "Smart Pedestrian Crossing",
                    category: "Smart street",
                    image: "smart_pedestrian_crossing.jpg",
                    smallDescription: "Pedestrian crossing that changes the colors depending on the traffic lights.",
                    extendedDescription: "extend the descr",
                    nrOfVotes: 76,
                    favorite: true,
                    voted: false,
                    status: "Make a selection"
                },
                {
                    id: 2,
                    name: "Smart Traffic Lights",
                    category: "Smart street",
                    image: "smart_traffic_lights.jpg",
                    smallDescription: "Artificial intelligence and traffic sensors to allow much shorter traffic periods.",
                    extendedDescription: "extend the descr",
                    nrOfVotes: 401,
                    favorite: false,
                    voted: false,
                    status: "Make a selection"
                },
                {
                    id: 3,
                    name: "Smart Garbage Bin",
                    category: "Eco city",
                    image: "smart_garbage_bin.jpg",
                    smallDescription: "Garbage bins that automatically sort the contents.",
                    extendedDescription: "extend the descr",
                    nrOfVotes: 97,
                    favorite: false,
                    voted: false,
                    status: "Finished"
                },
                {
                    id: 4,
                    name: "Smart Public Transport Machines",
                    category: "Smart transport",
                    image: "smart_public_transport_machines.jpg",
                    smallDescription: " Smart Machines that offer aid in choosing what type of public transport or what line to take.",
                    extendedDescription: "extend the descr",
                    nrOfVotes: 639,
                    favorite: false,
                    voted: false,
                    status: "Make a selection"
                },
                {
                    id: 5,
                    name: "City Wifi",
                    category: "Smart city",
                    image: "city_wifi.jpg",
                    smallDescription: "Wifi Internet connection everywhere in the city.",
                    extendedDescription: "extend the descr",
                    nrOfVotes: 21,
                    favorite: false,
                    voted: false,
                    status: "Make a selection"
                },
                /*{
                    id: 6,
                    name: "Parking Lot Tracker",
                    category: "Smart transport",
                    image: "parking_lot_tracker.jpg",
                    smallDescription: "Tracking application that helps you find a parking lot.",
                    extendedDescription: "extend the descr",
                    nrOfVotes: 140,
                    favorite: false,
                    voted: false,
                    status: "Make a selection"
                },
                {
                    id: 7,
                    name: "Voting Application",
                    category: "Smart politics",
                    image: "voting_application.jpg",
                    smallDescription: "Web application that allows citizens to vote more easily.",
                    extendedDescription: "extend the descr",
                    nrOfVotes: 21,
                    favorite: false,
                    voted: false,
                    status: "Make a selection"
                }*/
            ],
            projectIndex: 6,
            search: {
                category: "",
                text: ""
            },
            updatedProject: {
                id: -1,
                name: "",
                category: "",
                smallDescription: "",
                extendedDescription: "",
                status: ""
            }
        }
    }

    getAllCategories = () => {
        let categoriesSet = new Set();
        this.state.projects.forEach(project => categoriesSet.add(project.category));

        return Array.from(categoriesSet).sort((a, b) => a.localeCompare(b));
    };

    onProjectAddToFavorites = (event, projectId) => {
        event.stopPropagation();
        let project = this.state.projects[projectId];
        project.favorite = !project.favorite;
        userModel.addToFavorites(projectId);

        this.emit("changedProject", this.state);
    };

    onProjectVote = (projectId) => {
        let project = this.state.projects[projectId];
        if (project.voted) {
            project.nrOfVotes--;
        } else {
            project.nrOfVotes++;
        }

        project.voted = !project.voted;

        userModel.addToVotedProjects(projectId);
        this.emit("changedProjectDetails", this.state);
    };

    onProjectSearchChange = (property, value) => {
        this.state = {
            ...this.state,
            search: {
                ...this.state.search,
                [property]: value
            }
        };

        this.emit("changedSearch", this.state);
    };
}


const projectModel = new ProjectModel();

export default projectModel;