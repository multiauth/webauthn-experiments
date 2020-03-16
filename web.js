import { create } from "@github/webauthn-json";

async function register() {
  await create({
    publicKey: {
      challenge: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
      rp: { name: "Localhost, Inc." },
      user: {
        id: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII",
        name: "test_user",
        displayName: "Test User"
      },
      pubKeyCredParams: [{ type: "public-key", alg: -7 }],
      authenticatorSelection: {
        authenticatorAttachment: "platform"
      }
    }
  });
}

register();
