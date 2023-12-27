export const GET_CLIENTS = "GET_CLIENTS";
export const GET_TOKEN = "GET_TOKEN";
export const GET_ME = "GET_ME";
export const GET_USERS = "GET_USERS";
export const REMOVE_ME = "REMOVE_ME";
export const GET_CARDS = "GET_CARDS";
export const GET_ARTICLE = "GET_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const DELETE_USER = "DELETE_USER";
export const REMOVE_CARDS = "REMOVE_CARDS";
export const POST_COMMENT = "POST_COMMENT";
export const GET_COMMENTS = "GET_COMMENTS";
export const PUT_COMMENT = "PUT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const LOADING_FALSE = "LOADING_FALSE";
export const LOADING_TRUE = "LOADING_TRUE";
export const ERROR_FALSE = "ERROR_FALSE";
export const ERROR_TRUE = "ERROR_TRUE";
export const SUCCESS_FALSE = "SUCCESS_FALSE";
export const SUCCESS_TRUE = "SUCCESS_TRUE";
export const GET_PAGINATION = "GET_PAGINATION";
export const ACTIVE_PAGE = "ACTIVE_PAGE";

//----------------user
export const registerUser = (data) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_TRUE, payload: true });
    try {
      let resp = await fetch("http://localhost:8080/public/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        const token = await resp.json();
        console.log(token);
        dispatch({ type: GET_TOKEN, payload: token.accessToken });
      } else {
        console.log(resp);
      }
    } catch (error) {
      dispatch({ type: ERROR_TRUE, payload: error.message });
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

export const getUserToken = (user) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_TRUE, payload: true });
    try {
      let resp = await fetch("http://localhost:8080/public/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        let myToken = await resp.json();
        console.log(myToken.accessToken);
        dispatch({ type: GET_TOKEN, payload: myToken.accessToken });
      }
    } catch (error) {
      dispatch({ type: ERROR_TRUE, payload: error.message });
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};
export const getAllUser = (token, page) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_TRUE, payload: true });
    try {
      let resp = await fetch("http://localhost:8080/private/users?page=" + page, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        let users = await resp.json();
        dispatch({ type: GET_PAGINATION, payload: users.totalPages });
        dispatch({ type: GET_USERS, payload: users.content });
      }
    } catch (error) {
      dispatch({ type: ERROR_TRUE, payload: error.message });
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

export const getUserInformation = (userId, token) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_TRUE, payload: true });
    try {
      let resp = await fetch("http://localhost:8080/private/users/" + userId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        let me = await resp.json();
        console.log(me);
        dispatch({ type: GET_ME, payload: me });
      }
    } catch (error) {
      dispatch({ type: ERROR_TRUE, payload: error.message });
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

export const putUserProfile = (body, token) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_TRUE, payload: true });
    try {
      let resp = await fetch("http://localhost:8080/private/users/" + body.id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        let user = await resp.json();
        dispatch({ type: GET_ME, payload: user });
      } else {
        console.log("error");
        alert("errore nel post!");
      }
    } catch (error) {
      dispatch({ type: ERROR_TRUE, payload: error.message });
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

export const changeProfileImage = (token, profileImg) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_TRUE, payload: true });
    const formData = new FormData();
    formData.append("avatar", profileImg);
    console.log(formData);
    const resp = await fetch("http://localhost:8080/private/users/me/upload", {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (resp.ok) {
      dispatch({ type: ERROR_FALSE, payload: "" });
      const me = await resp.json();
      dispatch({ type: GET_ME, payload: me });
    } else {
      dispatch({ type: ERROR_TRUE, payload: resp.text });
      console.log(resp.text);
    }
  };
};
export const deleteUser = (token, userId) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_TRUE, payload: true });
    try {
      let resp = await fetch("http://localhost:8080/private/users/" + userId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        dispatch({ type: DELETE_USER, payload: userId });
      } else {
        console.log("error");
        alert("errore nel reperimento dati!");
      }
    } catch (error) {
      console.log(error);
      alert("errore nel reperimento dati!");
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

//--------------------------cards--------------------

export const getAllCards = (page) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_TRUE, payload: true });
    try {
      let resp = await fetch("http://localhost:8080/public/content/cards?page=" + page);
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        let cards = await resp.json();
        dispatch({ type: GET_PAGINATION, payload: cards.totalPages });

        dispatch({ type: GET_CARDS, payload: cards });
      } else {
        dispatch({ type: ERROR_TRUE, payload: resp.text });
        console.log(resp.text);
      }
    } catch (error) {
      dispatch({ type: ERROR_TRUE, payload: error.message });
      console.log(error);
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

//---------------------article------------------

export const getArticle = (articleId) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_TRUE, payload: true });
    try {
      let resp = await fetch("http://localhost:8080/public/content/articles/" + articleId);
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        let article = await resp.json();
        const reversedComment = article.comments.reverse();
        dispatch({ type: GET_ARTICLE, payload: article });
        dispatch({ type: GET_COMMENTS, payload: reversedComment });
      } else {
        console.log("error");
        dispatch({ type: ERROR_TRUE, payload: resp.text });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

export const postArticle = (body, token) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/private/articles", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
      } else {
        console.log("error");
        dispatch({ type: ERROR_TRUE, payload: resp.text });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

export const putArticle = (articleId, body, token) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_TRUE, payload: true });
    try {
      let resp = await fetch("http://localhost:8080/private/articles/" + articleId, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        let article = await resp.json();
        dispatch({ type: GET_ARTICLE, payload: article });
      } else {
        console.log("error");
        dispatch({ type: ERROR_TRUE, payload: resp.text });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

export const deleteArticle = (articleId, token) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING_TRUE, payload: true });
    try {
      let resp = await fetch("http://localhost:8080/private/articles/" + articleId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        dispatch({ type: DELETE_ARTICLE, payload: null });
      } else {
        console.log("error");
        alert("errore nel reperimento dati!");
      }
    } catch (error) {
      console.log(error);
      alert("errore nel reperimento dati!");
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

// ---------------------article images-------------------------------

export const changeCoverArticle = (token, coverImg, id) => {
  return async (dispatch, getState) => {
    try {
      const formData = new FormData();
      formData.append("picture", coverImg);
      console.log(formData);
      const resp = await fetch("http://localhost:8080/private/articles/" + id + "/secondary", {
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        const article = await resp.json();
        dispatch({ type: GET_ARTICLE, payload: article });
      }
    } catch (error) {
      dispatch({ type: ERROR_TRUE, payload: error.message });
    }
  };
};

export const changeimageArticle = (token, coverImg, id) => {
  return async (dispatch, getState) => {
    try {
      const formData = new FormData();
      formData.append("picture", coverImg);
      console.log(formData);
      const resp = await fetch("http://localhost:8080/private/articles/" + id + "/primary", {
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        const article = await resp.json();
        dispatch({ type: GET_ARTICLE, payload: article });
      }
    } catch (error) {
      dispatch({ type: ERROR_TRUE, payload: error.message });
    }
  };
};

//----------------------comment---------------

export const postComment = (comment, token) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/private/comments", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        let myComment = await resp.json();
        dispatch({ type: POST_COMMENT, payload: myComment });
      } else {
        console.log("error");
        alert("errore nel post!");
      }
    } catch (error) {
      dispatch({ type: ERROR_TRUE, payload: error.message });
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

export const deleteComment = (id, token) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/private/comments/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        dispatch({ type: DELETE_COMMENT, payload: id });
      } else {
        console.log("error");
        alert("errore nel post!");
      }
    } catch (error) {
      dispatch({ type: ERROR_TRUE, payload: error.message });
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};

export const changeComment = (body, token) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/private/comments/" + body.id, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        dispatch({ type: ERROR_FALSE, payload: "" });
        const putComment = resp.json();
        dispatch({ type: PUT_COMMENT, payload: putComment });
      } else {
        console.log("error");
      }
    } catch (error) {
      dispatch({ type: ERROR_TRUE, payload: error.message });
    } finally {
      dispatch({ type: LOADING_FALSE, payload: false });
    }
  };
};
