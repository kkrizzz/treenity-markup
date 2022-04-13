import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import '../sass/main.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
