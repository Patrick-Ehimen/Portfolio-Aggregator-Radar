import { createThirdwebClient } from "thirdweb";

const clientID = process.env.NEXT_THIRDWEB_CLIENT_ID;

if (!clientID) {
  throw new Error("clientID not found");
}

export const client = createThirdwebClient({
  clientId: clientID,
});
