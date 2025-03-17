import axios from "axios";

const instance = axios.create({
    baseURL: "https://oexbxyscovmwnnptwxbk.supabase.co/",
    headers: {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9leGJ4eXNjb3Ztd25ucHR3eGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NjYzMTYsImV4cCI6MjA1NTQ0MjMxNn0.cCv9sWKCYXRmezR19ojMvrQVrqTiZSDUt3CIJqQMjVM",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9leGJ4eXNjb3Ztd25ucHR3eGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NjYzMTYsImV4cCI6MjA1NTQ0MjMxNn0.cCv9sWKCYXRmezR19ojMvrQVrqTiZSDUt3CIJqQMjVM",
        "Content-Type": "application/json",
    }
});

export const usersAPI = {
    getUsers(pageSize, offset) {
      const users = `rest/v1/profiles?select=*&limit=${pageSize}&offset=${offset}`;
      
      return Promise.all([
        instance.get(users),
        instance.get('rest/v1/profiles?select=count', {
          headers: {
            'Prefer': 'count=exact',
          },
        })
      ]).then(([response, countResponse]) => {
        return {
          data: response.data,
          totalCount: countResponse.headers['content-range']
            ? parseInt(countResponse.headers['content-range'].split('/')[1], 10)
            : 0
        };
      });
    }
  };
  


export const signUp = async (email, password) => {
  try {
    const response = await instance.post(`auth/v1/signup`, { email, password });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.error_description || "Sign up failed",
    };
  }
};

export const signIn = async (email, password) => {
    try {
       const response = await instance.post(`auth/v1/token?grant_type=password`, {
        email,
        password,
      });
      return { success: true, data: response.data};
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  export const signOut = async () => {
    try {
        await instance.post(`auth/v1/logout`, {}, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
        });
        return { success: true };
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Logout failed",
        };
    }
};
export const getProfile = async () => {
    try {
        const token = localStorage.getItem("access_token");

        const userResponse = await instance.get("auth/v1/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const user = userResponse.data;
        const userEmail = user.email;

        const profileResponse = await instance.get(`rest/v1/profiles?select=*&email=eq.${userEmail}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return {
            ...user,
            ...(profileResponse.data[0] || {}),
        };
        
    } catch (error) {
        console.error("Error:", error.response || error.message);
        return null;
    }
};

