import React, { useState } from 'react';
import Joyride, { STATUS } from 'react-joyride';

const Tour = ({ run, setRun }) => {
    const [steps] = useState([
        {
            target: '.cd-player',
            content: 'Click to open the door, and then click again to start recording.',
            disableBeacon: true,
        },
        {
            target: '.transcript-output',
            content: 'Your speech transcript will appear here. You can edit it if needed.',
        },
        {
            target: '.analyze-button',
            content: 'After recording, click this button to analyze your speech.',
        },
        {
            target: '.review-output',
            content: 'The analysis of your speech will be displayed here.',
        },
        {
            target: '.clear-button',
            content: 'Use this button to clear the current review and add it to your history.',
        },
        {
            target: '.review-history',
            content: 'Your previous reviews will be stored here for reference.',
        },
    ]);

    const handleJoyrideCallback = (data) => {
        const { status } = data;
        if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
            setRun(false);
        }
    };

    return (
        <Joyride
            steps={steps}
            run={run}
            continuous
            showSkipButton
            showProgress
            styles={{
                options: {
                    primaryColor: '#f97316',
                },
            }}
            callback={handleJoyrideCallback}
        />
    );
};

export default Tour;