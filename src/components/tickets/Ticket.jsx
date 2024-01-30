import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

const Ticket = ({ ticket }) => {
    return (
        <Container>
            <Infos>
                <Id>{ticket.id}</Id>
                <Title>{ticket.title}</Title>
                <Customer>{ticket.customer}</Customer>
            </Infos>
            <Activity />
            <TimeControls>
                <Time>00:01:30</Time>
                <Controls>
                    <Control>
                        <FontAwesomeIcon icon={faPlay} />
                    </Control>
                    <Control>
                        <FontAwesomeIcon icon={faStop} />
                    </Control>
                </Controls>
            </TimeControls>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;
    padding: 12px 16px;

    border: 1px solid #767676;
    border-radius: 8px;

    background-color: #3B3B3B;
`;

const Infos = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 20vw;

    line-height: 1.4;
`;

const Id = styled.span`
    font-size: 1.2em;

    color: var(--primary)
`;

const Title = styled.span`
    font-size: 1em;
    color: #CCCCCC;
`;

const Customer = styled.span`
    font-size: 0.8em;
    color: #777777;
`;

const Activity = styled.textarea`
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;

    padding: 6px;

    font-size: 1em;
    font-family: inherit;

    border: 1px solid #767676;
    border-radius: 2px;

    resize: none;

    background-color: #3B3B3B;
`;

const TimeControls = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
`;

const Time = styled.span`
    font-size: 1.3em;
    color: #CCCCCC
`;

const Controls = styled.span`
    display: flex;
    gap: 8px;
`;

const Control = styled.button`
    width: 30px;
    height: 30px;

    border: none;
    border-radius: 50%;

    line-height: 30px;

    background-color: var(--primary);
    color: #FFFFFF;
`;

export default Ticket;