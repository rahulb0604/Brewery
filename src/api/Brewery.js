import axios from "axios";
export async function breweryData(option, text) {
  try {
    const response = await axios.get(
      "https://api.openbrewerydb.org/v1/breweries",
      {
        params: {
          ...(option === "City" ? { by_city: text } : {}),
          ...(option === "Name" ? { by_name: text } : {}),
          ...(option === "Type" ? { by_type: text } : {}),
          page: "1",
          per_page: "20",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
