

var express = require('express');
const app = express();
const server = require('http').Server(app);
require('./configure')(app); 
const path = require('path');
const routes = require('./routes');

const port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));

app.use('/api', routes);

// Might want to add a * after app.get('/') => app.get('/*')
// If something breaks that was working prev.
app.get('/', (req, res, next) => res.sendFile(app.get('indexHTMLPath')));
server.listen(port, () => console.log('Creeping on Port: ', port));

