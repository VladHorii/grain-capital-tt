import { createInitialValues } from "@/components/UserModal/utils/createInitialValues";
import { User } from "@/types";
import { nanoid } from "@reduxjs/toolkit";

export const createUserFromInitialValues = (
  initialValues: ReturnType<typeof createInitialValues>,
  id = nanoid()
) => {
  const newUser: User = {
    id,
    name: initialValues.name,
    username: initialValues.username,
    email: initialValues.email,

    address: {
      street: initialValues.addressStreet,
      suite: initialValues.addressSuite,
      city: initialValues.addressCity,
      zipcode: initialValues.addressZipcode,
      geo: {
        lat: initialValues.addressGeoLat,
        lng: initialValues.addressGeoLng,
      },
    },

    phone: initialValues.phone,
    website: initialValues.website,
    company: {
      name: initialValues.companyName,
      catchPhrase: initialValues.companyCatchPhrase,
      bs: initialValues.companyBs,
    },
  };

  return newUser;
};
