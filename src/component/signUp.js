import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import config from "../aws-exports";
Amplify.configure(config);

export default function signUp() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>

          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
