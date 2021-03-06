import accessMatrix from "./access-matrix.json" assert { type: "json" };
import express from "express";
import routeGuard from "./routeGuard.js";
import settings from "./setting.js";
import { BearerStrategy } from "passport-azure-ad";
import passport from "passport";

const app = express();

const {
  authority,
  tenantId,
  loggingLevel,
  validateIssuer,
  passReqToCallback,
  version,
  discovery,
  clientId,
} = settings.app;

const options = {
  identityMetadata: `https://${authority}/${tenantId}/${version}/${discovery}`,
  issuer: `https://${authority}/${tenantId}/${version}`,
  clientID: clientId,
  audience: clientId, // audience is this application
  validateIssuer,
  passReqToCallback,
  loggingLevel,
};

const bearerStrategy = new BearerStrategy(options, (token, done) => {
  // Send user info using the second argument
  done(null, {}, token);
});

app.use(passport.initialize());

passport.use(bearerStrategy);

// Validates token, checks for role and serve
app.use(
  "/",
  passport.authenticate("oauth-bearer", { session: false }),
  routeGuard(accessMatrix)
);

app.get("/", (request, response) => {
  response.status(200).send();
});

app.listen(80, () => console.log("Token validation service is up and running"));
