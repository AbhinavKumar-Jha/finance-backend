const authorize = (permittedRoles) => {
  return (req, res, next) => {
    // 1. req.user will be populated by Auth middleware later
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthenticated' });
    }

    // 2. Checking if the user's role is in the list of allowed roles
    if (permittedRoles.includes(req.user.role)) {
      next(); // User is allowed! Now we can proceed to the controller.
    } else {
      return res.status(403).json({ 
        message: `Forbidden: You need ${permittedRoles.join(' or ')} permissions.` 
      });
    }
  };
};

module.exports = authorize;