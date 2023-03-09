const apiRequest = async (uri = "", options = null, errMessage = null) => {
  try {
    const response = await fetch(uri, options);
    if (!response.ok) throw Error("Please reload the app");
  } catch (error) {
    errMessage = error.message;
  } finally {
    return errMessage;
  }
};

export default apiRequest;
