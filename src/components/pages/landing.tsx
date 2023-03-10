import styled from '@emotion/styled';
import { Button } from '@mantine/core';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectOpenAIApiKey } from '../../store/api-keys';
import { openOpenAIApiKeyPanel } from '../../store/settings-ui';
import { Page } from '../page';

const Container = styled.div`
    flex-grow: 1;
    padding-bottom: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Work Sans", sans-serif;
    line-height: 1.7;
    gap: 1rem;
`;

export default function LandingPage(props: any) {
    const openAIApiKey = useAppSelector(selectOpenAIApiKey);
    const dispatch = useAppDispatch();
    const onConnectButtonClick = useCallback(() => dispatch(openOpenAIApiKeyPanel()), [dispatch]);

    return <Page id={'landing'} showSubHeader={true}>
        <Container>
            <p>Hello, how can I help you today?</p>
            {!openAIApiKey && (
                <Button size="xs" variant="light" compact onClick={onConnectButtonClick}>
                    Connect your OpenAI account to get started
                </Button>
            )}
        </Container>
    </Page>;
}
