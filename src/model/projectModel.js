import {EventEmitter} from "events";

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
                    voted: false
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
                    voted: false
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
                    voted: false
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
                    voted: false
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
                    voted: false
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
                    voted: false
                },
                {
                    id: 6,
                    name: "Parking Lot Tracker",
                    category: "Smart transport",
                    image: "parking_lot_tracker.jpg",
                    smallDescription: "Tracking application that helps you find a parking lot.",
                    extendedDescription: "extend the descr",
                    nrOfVotes: 140,
                    favorite: false,
                    voted: false
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
                    voted: false
                }
            ],
            projectIndex: 8
        }
    }

    getAllCategories = () => {
        let categoriesSet = new Set();
        this.state.projects.forEach(project => categoriesSet.add(project.category));

        return Array.from(categoriesSet).sort((a, b) => a.localeCompare(b));
    }
}


const projectModel = new ProjectModel();

export default projectModel;