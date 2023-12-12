export const GET_CLIENTS = "GET_CLIENTS";
export const GET_TOKEN = "GET_TOKEN";
export const GET_ME = "GET_ME";
export const REMOVE_ME = "REMOVE_ME";
export const GET_CARDS = "GET_CARDS";
export const REMOVE_CARDS = "REMOVE_CARDS";

//----------------user
export const registerUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/public/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const token = await resp.json();
        console.log(token);
        dispatch({ type: GET_ME, payload: data });
        console.log("Registrato con successo!");
        dispatch({ type: GET_TOKEN, payload: token.accessToken });
      } else {
        console.log(resp);
      }
    } catch {
      console.log("errore nella registrazione");
    }
  };
};

export const getUserToken = (user) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/public/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (resp.ok) {
        let myToken = await resp.json();
        console.log(myToken.accessToken);
        dispatch({ type: GET_TOKEN, payload: myToken.accessToken });
      } else {
        console.log("error");
        alert("username o password sbagliati!");
      }
    } catch (error) {
      console.log(error);
      alert("username o password sbagliati!");
    }
  };
};

export const getUserInformation = (userId, token) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/private/users/" + userId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        let me = await resp.json();
        console.log(me);
        dispatch({ type: GET_ME, payload: me });
      } else {
        console.log("error");
        alert("username o password sbagliati!");
      }
    } catch (error) {
      console.log(error);
      alert("username o password sbagliati!");
    }
  };
};

//--------------------------cards--------------------

export const getAllCards = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/public/content/cards");
      if (resp.ok) {
        let cards = await resp.json();
        dispatch({ type: GET_CARDS, payload: cards });
      } else {
        console.log("error");
        alert("username o password sbagliati!");
      }
    } catch (error) {
      console.log(error);
      alert("username o password sbagliati!");
    }
  };
};
