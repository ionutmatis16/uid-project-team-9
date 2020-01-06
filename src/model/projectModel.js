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
                    extendedDescription: "A mobile application that notifies the users of their city when events are taking place. The application allows the users to choose the types of events they are enjoying the most, so that the application will send them personalized notifications about the most relevant events for them.",
                    nrOfVotes: 201,
                    favorite: false,
                    voted: true,
                    status: "Design phase",
                    approved: true,
                    viewed: 301,
                    rating: 4
                },
                {
                    id: 1,
                    name: "Smart Pedestrian Crossing",
                    category: "Smart street",
                    image: "smart_pedestrian_crossing.jpg",
                    smallDescription: "Pedestrian crossing that changes the colors depending on the traffic lights.",
                    extendedDescription: "Smart pedestrian crossings have been designed to reduce the number of traffic accidents that occur in many busy areas and increase in this way safety for pedestrians. This technical solution functions with a series of sensors which detect  movement every time someone is crossing or about to cross.",
                    nrOfVotes: 76,
                    favorite: true,
                    voted: false,
                    status: "Design phase",
                    approved: true,
                    viewed: 501,
                    rating: 5
                },
                {
                    id: 2,
                    name: "Smart Traffic Lights",
                    category: "Smart street",
                    image: "smart_traffic_lights.jpg",
                    smallDescription: "Artificial intelligence and traffic sensors to allow much shorter traffic periods.",
                    extendedDescription: "Smart Traffic Lights that use artificial intelligence and traffic sensors to allow much shorter traffic periods. They reduce everyday congestion by smoothing traffic flows and prioritising traffic in response to demand in real time.",
                    nrOfVotes: 401,
                    favorite: false,
                    voted: false,
                    status: "Design phase",
                    approved: true,
                    viewed: 1,
                    rating: 4
                },
                {
                    id: 3,
                    name: "Smart Garbage Bin",
                    category: "Eco city",
                    image: "smart_garbage_bin.jpg",
                    smallDescription: "Garbage bins that automatically sort the contents.",
                    extendedDescription: "Smart trash bins or receptacles equipped with sensors under the lid that monitor when the bins are filling up and alert the sanitation department to empty them before they are full and automatically sort the contents into categories.",
                    nrOfVotes: 97,
                    favorite: false,
                    voted: false,
                    status: "Finished",
                    approved: true,
                    viewed: 0,
                    rating: 2
                },
                {
                    id: 4,
                    name: "Smart Public Transport Machines",
                    category: "Smart transport",
                    image: "smart_public_transport_machines.jpg",
                    smallDescription: "Smart Machines that offer aid in choosing what type of public transport or what line to take.",
                    extendedDescription: "Replace the current ticket machines for public transport with Smart Machines that can also offer aid in choosing what type of public trasnport or what line to take. They use GPS systems to notify the position of vehicles in real time and can suggest the optimal route to a chosen destination.",
                    nrOfVotes: 639,
                    favorite: false,
                    voted: false,
                    status: "Design phase",
                    approved: true,
                    viewed: 37,
                    rating: 4
                },
                {
                    id: 5,
                    name: "City Wifi",
                    category: "Smart city",
                    image: "city_wifi.jpg",
                    smallDescription: "Wifi Internet connection everywhere in the city.",
                    extendedDescription: "A municipal wireless network is a citywide wireless network. This usually works by providing municipal broadband via Wi-Fi to large parts or all of a municipal area by deploying a wireless mesh network. The typical deployment design uses hundreds of wireless access points deployed outdoors, often on poles.",
                    nrOfVotes: 21,
                    favorite: false,
                    voted: false,
                    status: "Implementation phase",
                    approved: true,
                    viewed: 55,
                    rating: 1
                },
                {
                    id: 6,
                    name: "Parking Lot Tracker",
                    category: "Smart transport",
                    image: "parking_lot_tracker.jpg",
                    smallDescription: "Tracking application that helps you find a parking lot.",
                    extendedDescription: "The application will connect all smart parking slots throughout the city and will offer an overview of them. From this application, the user will be able to reserve a spot and then park in it.",
                    nrOfVotes: 140,
                    favorite: false,
                    voted: false,
                    status: "Make a selection",
                    approved: undefined,
                    viewed: 301,
                    rating: 4
                },
                {
                    id: 7,
                    name: "Voting Application",
                    category: "Smart politics",
                    image: "voting_application.jpg",
                    smallDescription: "Web application that allows citizens to vote more easily.",
                    extendedDescription: "This application will allow citizens to vote different projects from the comfort of their house. By doing this, the process will be faster, more precise and less wasteful.",
                    nrOfVotes: 21,
                    favorite: false,
                    voted: false,
                    status: "Make a selection",
                    approved: undefined,
                    viewed: 301,
                    rating: 3
                }
            ],
            projectIndex: 8,
            search: {
                category: "",
                text: ""
            },
            projectToUpdate: {
                id: -1,
                name: "",
                category: "",
                smallDescription: "",
                extendedDescription: "",
                nrOfVotes: -1,
                favorite: false,
                voted: false,
                status: "",
                approved: true,
                validName: true,
                validSmallDescription: true,
                validExtendedDescription: true,
                validStatus: true,
                viewed: -1,
                rating: -1
            }
        }
    }

    getRating = (id) => {
        let i;
        let ratingResult='';
        let project;
        for (i=0; i<this.state.projects.length; i++){
            if (id === this.state.projects[i].id)
                project = this.state.projects[i];
        }
        for (i=0; i<project.rating; i++){
            ratingResult += '★';
        }
        return ratingResult + ' ' + project.rating + '/5';
    };

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

    setProjectToUpdate = (projectId) => {
        let foundProject = this.state.projects[parseInt(projectId)];

        this.state.projectToUpdate = {
            ...foundProject,
            validName: true,
            validSmallDescription: true,
            validExtendedDescription: true,
            validStatus: true
        };
    };

    onProjectUpdateChange = (property, value) => {
        this.state = {
            ...this.state,
            projectToUpdate: {
                ...this.state.projectToUpdate,
                [property]: value
            }
        };

        this.emit("changedUpdatedProject", this.state);
    };

    projectUpdateHasValidField = (property, invalidValue) => {
        if (this.state.projectToUpdate[property] === invalidValue) {
            return false;
        }

        return true;
    };

    onProjectUpdateSave = () => {
        let validName = this.projectUpdateHasValidField("name", "");
        let validSelection = this.projectUpdateHasValidField("status", "Make a selection");
        let validSmallDescription = this.projectUpdateHasValidField("smallDescription", "");
        let validExtendedDescription = this.projectUpdateHasValidField("extendedDescription", "");

        this.onProjectUpdateChange("validName", validName);
        this.onProjectUpdateChange("validStatus", validSelection);
        this.onProjectUpdateChange("validSmallDescription", validSmallDescription);
        this.onProjectUpdateChange("validExtendedDescription", validExtendedDescription);

        if (validName && validSelection && validSmallDescription && validExtendedDescription) {
            let projectId = this.state.projectToUpdate.id;
            this.state.projects[projectId] = this.state.projectToUpdate;

            this.emit("changedUpdatedProject", this.state);
            window.location.assign("#/projects");
        }

        this.emit("changedUpdatedProject", this.state);
    };

    onProjectUpdateCancel = () => {
        this.state = {
            ...this.state,
            projectToUpdate: {
                id: -1,
                name: "",
                category: "",
                smallDescription: "",
                extendedDescription: "",
                nrOfVotes: -1,
                favorite: false,
                voted: false,
                status: "",
                approved: true,
                validName: true,
                validSmallDescription: true,
                validExtendedDescription: true,
                validStatus: true,
                viewed: -1,
                rating: -1
            }
        };

        this.emit("changedUpdatedProject", this.state);
        window.location.assign("#/projects");
    };

    onProjectApproval = (projectId, approval) => {
        let project = this.state.projects[projectId];

        project.approved = approval;

        this.emit("changedProjectDetails", this.state);
    };

    addProject(project) {
        project.id = this.state.projectIndex;
        project.nrOfVotes = 0;
        project.voted = false;
        project.favorite = false;
        project.status = "Make a selection";
        project.rating = 0;
        project.viewed = 0;
        project.approved = undefined;
        this.state.projectIndex = this.state.projectIndex + 1;
        this.state.projects.push(project);
        userModel.state.myProjects.push(project.id);
        console.log(this.state.projects);
    }

    extractFilename(path) {
        if (path.substr(0, 12) === "C:\\fakepath\\")
            return path.substr(12); // modern browser
        let x;
        x = path.lastIndexOf('/');
        if (x >= 0) // Unix-based path
            return path.substr(x + 1);
        x = path.lastIndexOf('\\');
        if (x >= 0) // Windows-based path
            return path.substr(x + 1);
        return path; // just the file name
    }
}

const projectModel = new ProjectModel();

export default projectModel;