import axios from "axios";

const api = axios.create({
  baseURL:
    "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app",
});

export const fetchData = async () =>
  await api.get("/activities").then((res) => res.data);

export const setArchived = async (activityID, archived) => {
  const activityURL = `/activities/${activityID}`;
  // console.log("ActURL:", activityURL);
  await api
    .patch(activityURL, {
      is_archived: archived,
    })
    .then()
    .catch((e) => console.log(e.response));
};

export const archiveActivities = async (activities) => {
  const requests = activities.map((activity) => {
    const activityURL = `/activities/${activity.id}`;

    // console.log(activityURL);

    return api.patch(activityURL, {
      is_archived: !activity.is_archived,
    });
  });
  await axios.all(requests);
};
