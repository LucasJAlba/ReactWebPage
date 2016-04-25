import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Links from './data/URLLinks';

const app = document.getElementById('app');
ReactDOM.render(<Layout links={Links}/>, app);