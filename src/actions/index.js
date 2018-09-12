const url = `http://localhost:3001`;

export function latestNews() {
  const request = fetch(`${url}/articles?_order=desc&_end=3`, {
    method: "GET"
  }).then(response => response.json());

  return {
    type: "GET_LATEST",
    payload: request
  };
}

export function otherNews() {
  const request = fetch(`${url}/articles?_order=desc&_start=3&_end=10`, {
    method: "GET"
  }).then(response => response.json());

  return {
    type: "GET_OTHERS",
    payload: request
  };
}

export function latestGallery() {
  const request = fetch(`${url}/galleries`, {
    method: "GET"
  }).then(response => response.json());

  return {
    type: "GET_LATEST_GALLERY",
    payload: request
  };
}

export function selectedNew(id) {
  const request = fetch(`${url}/articles?id=${id}`, {
    method: "GET"
  }).then(response => response.json());

  return {
    type: "GET_SELECTED",
    payload: request
  };
}

export function clearSelectedNew() {
  return {
    type: "CLEAR_SELECTED",
    payload: []
  };
}

export function selectedGallery(id) {
  const request = fetch(`${url}/galleries?id=${id}`, {
    method: "GET"
  }).then(response => response.json());

  return {
    type: "GET_SELECTED_GALLERY",
    payload: request
  };
}

export function clearSelectedGallery() {
  return {
    type: "GET_SELECTED_GALLERY",
    payload: []
  };
}

export function handleLikes(array, id, section, type) {
  const request = fetch(`${url}/${section}/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ likes: array })
  }).then(response => response.json());

  return {
    type: type,
    payload: request
  };
}
