// here we have made the configuration of the appwrite client and database
import { Client,Databases } from 'appwrite';
const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_ENDPOINT)
    .setProject(import.meta.env.VITE_PROJECT_ID);

    // making a instance of Databases
    const databases = new Databases(client);

    
    
export { client,databases};
    