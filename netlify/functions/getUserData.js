import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default async (event, context) => {
    const KEYS = {
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        PROJECT_ID: process.env.PROJECT_ID,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
        APP_ID: process.env.APP_ID,
        USER_ID: process.env.USER_ID
    }

    for (const [key,value] of Object.entries(KEYS)) {
        if (!value) {
            console.error(`Failed to get env var ${key} is undefined`);
            
            return new Response(
                JSON.stringify({error: "Token no valid"})
                , {
                    statusCode: 500
                }
            )
        }
    }

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: KEYS.API_KEY,
      authDomain: KEYS.AUTH_DOMAIN,
      projectId: KEYS.PROJECT_ID,
      storageBucket: KEYS.STORAGE_BUCKET,
      messagingSenderId: KEYS.MESSAGING_SENDER_ID,
      appId: KEYS.APP_ID,
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    try {
    const userDocRef = doc(db, "user_id", USER_ID);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      console.error("User document does not exist!");
      return null;
    }

    const userData = {
      name: userDocSnap.data()?.name || "",
      role: userDocSnap.data()?.role || "",
      bio: userDocSnap.data()?.bio || "",
      education: [],
    };

    const educationCollectionRef = collection(db, "education");
    const educationDocsSnap = await getDocs(educationCollectionRef);
    educationDocsSnap.forEach((doc) => {
      userData.education.push({
        title: doc.data().title || "",
        sub: doc.data().sub || "",
        content: doc.data().content || "",
      });
    });

    return new Response(
      JSON.stringify(userData)
      ,{
      statusCode: 200
    });

  } catch (error) {
    console.error(`failed to fetch user Data ${error}`);
   return new Response(
      JSON.stringify({ error: "Failed to fetch repos" })
      ,{
      statusCode: 500
    });
  }
}