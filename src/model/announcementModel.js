
class AnnouncementModel {

    constructor(){
        this.state = {
            announcements:[
            {
                id:0,
                name:"Local Council Meeting January 15th",
                image:"councilMeeting.jpg",
                smallDescription:"The Local Council will hold a meeting regarding the city's budgetary decisions for the following year. Feel free to join us!",
                extendedDescription:""
            },
            {
                id:1,
                name:"New recycling stations throughout the city",
                image:"recycling.jpg",
                smallDescription:"Where to take paper, plastic bottles, and more, for recycling",
                extendedDescription:""
            }
            ]
        }
    }
}
const announcementModel = new AnnouncementModel();
export default announcementModel;