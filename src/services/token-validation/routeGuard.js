const routeGuard = (accessMatrix) => (request, response, next) => {
  // if (request.authInfo.roles === undefined) {
  //   return response.status(403).json({ error: "No roles claim found!" });
  // }
  // const { roles } = request.authInfo;

  // if (request.path.includes(accessMatrix.faculties.path)) {
  //   if (accessMatrix.faculties.methods.includes(request.method)) {
  //     const intersection = accessMatrix.faculties.roles.filter((role) =>
  //       roles.includes(role)
  //     );
  //
  //     if (intersection.length < 1) {
  //       return response
  //         .status(403)
  //         .json({ error: "User does not have the role" });
  //     }
  //   } else {
  //     return response.status(403).json({ error: "Method not allowed" });
  //   }
  // } else {
  //   return response.status(403).json({ error: "Unrecognized path" });
  // }

  next();
};

export default routeGuard;
