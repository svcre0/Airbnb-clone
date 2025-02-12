// Import the json-server package to create a mock REST API server
const jsonServer = require('json-server');
// Import the json-server-auth package to add authentication and authorization capabilities
const auth = require('json-server-auth');
// Import the path module to work with file and directory paths
const path = require('path');

// Create a new JSON Server instance
const server = jsonServer.create();

// Create a router using the db.json file located in the same directory as this script
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Get default middlewares from json-server (such as logger, static, and cors)
const middlewares = jsonServer.defaults();

// Bind the router's database to the server instance
server.db = router.db;

// Use the default middlewares (e.g., logger, static files, cors) in the server
server.use(middlewares);

// Use the authentication middleware from json-server-auth (it should come before router)
server.use(auth);

// Use the router for handling routes (i.e., map HTTP requests to database actions)
server.use(router);

// Set the port for the server to listen on (use the PORT environment variable or default to 5001)
const PORT = process.env.PORT || 5001;

// Start the server and listen on the specified port
server.listen(PORT, () => {
  // Log a message to the console indicating the server is running
  console.log(`JSON Server is running on port ${PORT}`);
});






