import React from 'react';
import MacWindow from './MacWindow';
import Terminal from 'react-console-emulator';

const Cli = () => {
    return (
        <MacWindow>
            <div className="cli-window">
                <Terminal
                    commands={null}
                    welcomeMessage={'Welcome to the React terminal!'}
                    promptLabel={'saniyapawar:~$'}
                />
            </div>
        </MacWindow>
    );
};

export default Cli;
