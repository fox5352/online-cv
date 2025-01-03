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

function isUserData(data: any): data is UserData {
  return (
    typeof data === "object" &&
    typeof data.name === "string" &&
    typeof data.role === "string" &&
    typeof data.bio === "string" &&
    Array.isArray(data.education) &&
    data.education.every(
      (edu: any) =>
        typeof edu.title === "string" &&
        typeof edu.sub === "string" &&
        typeof edu.content === "string",
    )
  );
}

export async function getUserData(): Promise<UserData | null> {
  try {
    const res = await fetch(`/.netlify/functions/getUserData`); // Call the function

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        `HTTP error! status: ${res.status} error: ${errorData.error}`,
      );
    }

    const data = await res.json();

    if (isUserData(data)) {
      return data;
    } else {
      throw new Error("Invalid user data format");
    }
  } catch (error) {
    console.error(`failed to fetch user Data ${error}`);
    return null;
  }
}
