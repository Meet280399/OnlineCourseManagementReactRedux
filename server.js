// This should already be declared in your API file
var app = express();

// ADD THIS
var cors = require('cors');
app.use(cors());