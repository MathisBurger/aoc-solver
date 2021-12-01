import { useHistory } from 'react-router';
import './ChallangeDashboard.css';

export type ChallangeCardType = {
    route: string;
    heading: string;
    description: string;
};

type ChallangeDashboardProps = {
    cards: ChallangeCardType[];
}

const ChallangeDashboard = ({cards}: ChallangeDashboardProps) => {
    const history = useHistory();

    return (
        <div className="dashboard">
            <div className="dashboard-container">
                {cards.map((card) => (
                    <div className="content-card" onClick={() => history.push(card.route)}>
                    <h2>{card.heading}</h2>
                    <p>
                        {card.description}
                    </p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default ChallangeDashboard;