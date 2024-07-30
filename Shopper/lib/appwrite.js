import { Client } from 'react-native-appwrite';
export const appwriteConfig ={
    endPoint:"https://cloud.appwrite.io/v1", //hosted version of appwrite
    projectId:"66a6da870013f6083172",
    platform:"com.billy.fashionsale",
    databaseId:"66a6df4c000368e884b5",
    usersCollectionId:"66a6df9c00241389dd5d",
    videoCollectionId:"66a6e17a0030f950ef88",
    storageId:"66a89fb900088ca54ca5"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endPoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;