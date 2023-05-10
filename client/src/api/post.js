export const getPostRequests = async () => {
  try {
    const response = await fetch("/posts");
    const data = await response.json();
    console.log("getPostRequests response: ", data);
    return data;
  } catch (error) {
    console.error("getPostRequests error: ", error);
    throw error;
  }
};

export const createPostRequest = async (post) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  const options = {
    method: 'POST',
    body: form,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await fetch("/posts", options);
  return await response.json();
};

export const deletePostRequest = async (id) => {
  const options = {
    method: 'DELETE'
  };

  const response = await fetch("/posts/" + id, options);
  return await response.json();
};

export const getPostRequest = async (id) => {
  const response = await fetch("/posts/" + id);
  return await response.json();
};

export const updatePostRequest = async (id, newFields) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(newFields),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`/posts/${id}`, options);
  return await response.json();
};
