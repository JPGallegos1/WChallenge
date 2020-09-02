import { useState } from "react";
import { API, LOGIN_ENDPOINT } from "../constants";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useRouter } from "next/router";

export function useSubmit () {
  const [localUser, setLocalUser] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const { setSession, user } = useLocalStorage("session", {});
  const router = useRouter();

  const onSubmit = async (formData) => {
    // * Prevent the user to submit twice
    setSubmitting(true);

    // * post data to server
    const response = await fetch(`${API}/${LOGIN_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.name,
        password: formData.password,
        remember: formData.remember
      })
    });
    // * get token and user
    const data = await response.json();
    const { token } = data;
    const { email, remember } = formData;
    // * put it inside an object and validate for local state or localStorage
    const session = {
      email,
      token,
      remember
    };

    if (remember) {
      setLocalUser(null);
      setSession(session);
      setTimeout(() => {
        router.push("/tecnologias");
      }, 2000);
    } else {
      setLocalUser(session);
      setSession(null);
    }

    setSubmitting(false);
  };

  return {
    onSubmit,
    localUser,
    submitting,
    user,
    router
  };
};
