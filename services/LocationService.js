// const url_endpoint = "http://172.16.94.92:8000/api/location";
const url_endpoint = "https://ckartisan.com/api/location";

const getItems = async () => {
  try {
    let response = await fetch(url_endpoint);
    let items = await response.json();
    return items;
  } catch (error) {
    console.log(error);
  }
};

const getItemDetail = async (item) => {
  try {
    let response = await fetch(url_endpoint + "/" + item.id);
    item = await response.json();
    return item;
  } catch (error) {
    console.log(error);
  }
};

const storeItem = async (item) => {
  try {
    let body = {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    };
    let response = await fetch(url_endpoint, body);
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateItem = async (item) => {
  try {
    let body = {
      method: "PUT", //PUT or PATCH
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    };
    let response = await fetch(url_endpoint + "/" + item.id, body);
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const destroyItem = async (item) => {
  try {
    let body = {
      method: "DELETE",
      // body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    };
    let response = await fetch(url_endpoint + "/" + item.id, body);
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default { getItems, getItemDetail , storeItem , updateItem , destroyItem};