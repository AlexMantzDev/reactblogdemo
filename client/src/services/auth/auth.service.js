const login = async (user) => {
  try {
    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

const getCurrentUser = async () => {
  try {
    const res = await fetch("/api/v1/auth/me", {
      credentials: "include",
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export { login, getCurrentUser };
