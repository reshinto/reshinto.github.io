export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const db = "http://localhost:5000/portfolio-server-65b51/asia-east2/api";
