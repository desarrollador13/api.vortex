import express from 'express';
import routes from '../api';

export default ({ app }: { app: express.Application }) => {
	console.log('kkkkkkkkkkkkkkkk')
    app.use('/api', routes)
};