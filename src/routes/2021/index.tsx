import ChallangeDashboard, { ChallangeCardType } from "../../components/challangeDashboard/ChallangeDashboard";


const Index2021 = () => {

    const cards: ChallangeCardType[] = [
        {
            route: '/2021-day1',
            heading: 'Day1',
            description: 'Its about the sonar of the submarine'
        }
    ];

    return (
        <ChallangeDashboard cards={cards} />
    );
};

export default Index2021;