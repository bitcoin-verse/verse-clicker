import { v4 as uuidv4 } from "uuid";

import { SignData } from "../context/reducers/sign";

type SignRecords = {
  [address: string]: SignData;
};

/**
 * @typedef {Object} SignRecords
 * @property {string} address - The address of the sign record.
 * @property {SignRecords} SignRecords - The sign data associated with the address.
 */

/**
 * Returns the UUID of the first sign record if it exists, otherwise generates a new UUID.
 *
 * @param {SignRecords} [signRecords] - An optional object of sign records.
 * @returns {string} The UUID of the first sign record or a new UUID.
 */
export const getFirstUuid = (signRecords?: SignRecords): string => {
  if (!signRecords) return uuidv4();
  const entries = Object.values(signRecords);

  if (entries.length > 0) {
    const firstEntry = entries[0];
    if (firstEntry.uuid) {
      return firstEntry.uuid;
    }
  }

  return uuidv4();
};
