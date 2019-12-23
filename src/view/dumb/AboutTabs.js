import { Card, CardText, CardTitle, Col, Row, TabContent, TabPane} from "reactstrap";
import React from "react";
import "../../style/aboutpage.css";
import CardImg from "reactstrap/es/CardImg";

const AboutTabs = ({activeTab}) => (
    <div>

        <TabContent className={"tabContent"} activeTab={activeTab} >
            <TabPane tabId="1">
                <Row>
                    <Col sm="6">
                        <Card className={"aboutCard"} body >
                            <CardTitle><h4>What is participative budgeting?</h4></CardTitle>
                            <CardText className={"cardText"}>
                                Participative budgeting is a budgeting process under which those people impacted by a budget are actively involved
                                in the budget creation process. This bottom-up approach to budgeting tends to create budgets that are more
                                achievable than are top-down budgets that are imposed on a company by senior management, with much less participation
                                by employees. Participatory budgeting is also better for morale, and tends to result in greater efforts by employees to
                                achieve what they predicted in the budget. However, a purely participative budget does not take high-level strategic
                                considerations into account, so management needs to provide employees with guidelines regarding the overall
                                direction of the company and how their individual departments fit into that direction.

                            </CardText>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card className={"aboutCard"} body >
                            <CardImg src="/images/budgetAbout.jpg" alt="Budget" />
                        </Card>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="2">
                <Row>
                    <Col sm="6">
                        <Card body className={"aboutCard"}>
                            <CardTitle><h4>Why should you get involved?</h4></CardTitle>
                            <CardText className={"cardText"}>
                                By giving communities real decision-making power in a collaborative process,
                                participatory budgeting can strengthen ties between citizens and officials.
                                First implemented in Brazil in 1989, it has been employed by more than 1,500
                                cities worldwide and made its U.S. debut in Chicago in 2009. This reform has
                                won support from the White House and officials of all political stripes, as
                                well as from social justice coalitions like the Right to the City Alliance.
                                <br/>
                                Greater inclusion allows people in poor and marginalized communities to voice
                                    previously ignored needs. In Brazil, participatory budgeting has led to
                                    more funding for health services and sanitation, improving public health
                                    outcomes. A study of Chicago’s 49th Ward found that even though voters
                                    endorsed typical government projects like road repairs, they also supported
                                    funding for community gardens, murals, and playgrounds.
                            </CardText>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body className={"aboutCard"}>
                            <CardImg src="/images/motivationAbout.jpg" alt="Motivation" />
                        </Card>
                    </Col>
                </Row>
            </TabPane>
        </TabContent>

    </div>
);

export default AboutTabs;