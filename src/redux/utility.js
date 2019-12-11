export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const db = "https://asia-east2-portfolio-server-65b51.cloudfunctions.net/api/portfolios";
