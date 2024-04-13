import { VerifaliaRestClient } from "verifalia";

const verifalia = new VerifaliaRestClient({
  username: process.env.NEXT_VERIFALIA_API_KEY!,
});
const validateEmail = async ({ email }: { email: string }) => {
  try {
    const result = await verifalia.emailValidations.submit(email);
    const entry = result?.entries[0];
    return entry;
  } catch (error) {
    console.error("Error validating email: ", error);
  }
};
export default validateEmail;
