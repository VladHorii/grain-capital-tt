import { User } from "@/types";

export const createInitialValues = (fields?: User) => ({
  name: fields?.name || "",
  username: fields?.username || "",
  email: fields?.email || "",

  addressStreet: fields?.address.street || "",
  addressSuite: fields?.address.suite || "",
  addressCity: fields?.address.city || "",
  addressZipcode: fields?.address.zipcode || "",

  addressGeoLat: fields?.address.geo.lat || "",
  addressGeoLng: fields?.address.geo.lng || "",

  phone: fields?.phone || "",
  website: fields?.website || "",

  companyName: fields?.company.name || "",
  companyCatchPhrase: fields?.company.catchPhrase || "",
  companyBs: fields?.company.bs || "",
});

export const fieldsMask = Object.keys(createInitialValues());
