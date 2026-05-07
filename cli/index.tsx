import React from 'react';
import { render, Text, Box } from 'ink';
import figlet from 'figlet';
import gradient from 'gradient-string';

const AlienHeader = () => {
    // Generate ASCII text synchronously
    const asciiText = figlet.textSync('ALIEN-BUILD', { font: 'Standard' });
    // Apply gradient string
    const coloredText = gradient.pastel.multiline(asciiText);

    return (
        <Box flexDirection="column" alignItems="center" marginBottom={2}>
            <Text>{coloredText}</Text>
            <Text color="cyan">--- Terminal UI Framework ---</Text>
        </Box>
    );
};

const App = () => (
    <Box flexDirection="column" padding={2}>
        <AlienHeader />
        <Text>Welcome to the Alien-Build-TUI interface.</Text>
        <Text color="green">Your termcn environment is running flawlessly on Node 25!</Text>
    </Box>
);

render(<App />);
