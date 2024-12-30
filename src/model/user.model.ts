import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import db from "./db";

export interface Education {
  title: string;
  sub: string;
  content: string;
}

export interface UserData {
  name: string;
  role: string;
  bio: string;
  education: Education[];
}

export async function getUserData(): Promise<UserData | null> {
  try {
    const userDocRef = doc(db, "user_id", import.meta.env.VITE_USER_ID);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      console.error("User document does not exist!");
      return null;
    }

    const userData: UserData = {
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

    return userData;
  } catch (error) {
    console.error(`failed to fetch user Data ${error}`);
    return null;
  }
}
