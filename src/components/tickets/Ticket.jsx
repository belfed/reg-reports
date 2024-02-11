import styled, { css } from "styled-components";

import { useStopwatch } from "react-timer-hook";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

import { getTimeString } from "../../utils/time-utils";

const Ticket = ({ ticket }) => {
    const { hours, minutes, seconds, totalSeconds, isRunning, start, reset } = useStopwatch({ autoStart: false });

    const onStart = () => {
        start();
    }

    const onStop = () => {
        reset(null, false);
        ticket.elapsedTime = ticket.elapsedTime ? ticket.elapsedTime + totalSeconds : totalSeconds;
    }

    const onControlClickHandler = () => {
        isRunning ? onStop() : onStart();
    }

    const controlIcon = isRunning ? faStop : faPlay;

    return (
        <Container $isRunning={isRunning}>
            <Infos>
                <Id>{ticket.id}</Id>
                <Title>{ticket.title}</Title>
                <Customer>{ticket.customer}</Customer>
            </Infos>
            <Activity $isRunning={isRunning}/>
            <TimeControls>
                <Time>{getTimeString(hours, minutes, seconds)}</Time>
                <Controls>
                    <Control onClick={onControlClickHandler} $isRunning={isRunning}>
                        <FontAwesomeIcon icon={controlIcon} />
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
    background-color: ${props => props.$isRunning ? "var(--primary-dark)" : "#3B3B3B"};
    transition: background-color 0.1s;
`;

const Infos = styled.div`
    display: flex;
    flex-direction: column;

    width: 20vw;

    line-height: 1.4;
`;

const Id = styled.span`
    font-size: 1.2em;

    color: var(--primary)
`;

const Title = styled.span`
    font-size: 1em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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
    background-color: ${props => props.$isRunning ? "var(--primary-dark)" : "#3B3B3B"};
    transition: background-color 0.1s;
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
    display: flex;
    align-items: center;
    justify-content: center;

    width: 35px;
    height: 35px;

    border-radius: 50%;
    border: none;

    cursor: pointer;

    background-color: var(--primary);
    background-color: ${props => props.$isRunning ? "#f44336" : "var(--primary)"};
    transition: background-color 0.1s;
    color: #FFFFFF;

    &:hover {
        background-color: ${props => props.$isRunning ? "#FF614E" : "var(--primary-light)"};
    }

    &:active {
        background-color: ${props => props.$isRunning ? "#D0191D" : "var(--primary-dark)"};
    }
`;

export default Ticket;