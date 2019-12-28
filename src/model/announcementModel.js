
class AnnouncementModel {

    constructor(){
        this.state = {
            announcements:[
            {
                id:0,
                name:"Local Council Meeting January 15th",
                image:"councilMeeting.jpg",
                smallDescription:"The Local Council will hold a meeting regarding the city's budgetary decisions for the following year. Feel free to join us!",
                extendedDescription:"The Local Council will hold a meeting regarding the city's budget for the next trimester. Project proposals are encouraged, as well as attendance to this meeting for a better understanding of how the city budgetary planning takes form. " +
                    "Some of the points which will be discussed are: budget planning for the new park area in the Zorilor neighbourhood," +
                    " and reviewing proposals of companies to hire for renovating the facade of the Opera."
            },
            {
                id:1,
                name:"New recycling stations throughout the city",
                image:"recycling.jpg",
                smallDescription:"Where to take paper, plastic bottles, and more, for recycling",
                extendedDescription:"Twenty three new stations for recycling have been place throughout the city. " +
                    "As a reminder, single use plastic should be placed separately in the labeled containers. Other recyclable materials are " +
                    "metal, cardboard, paper and glass. As a warning, plastic/cardboard items should not have food stains on them. Styrofoam isn't recyclable, and neither are mirrors, electronic waste, chemical containers " +
                    ", plastic bags, scrap metals, etc. Should these rules not be followed, the batch of recycled items could be considered contaminated, and thus all items will not be accepted for recycling."
            }
            ],
            projectIndex:2
        }
    }
    addAnnouncement(announcement) {
        announcement.id = this.state.projectIndex;
        this.state.projectIndex = this.state.projectIndex + 1;
        this.state.announcements.push(announcement);
        console.log(this.state.announcements);
    }
}
const announcementModel = new AnnouncementModel();
export default announcementModel;