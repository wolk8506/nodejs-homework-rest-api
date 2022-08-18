const express = require("express");
const router = express.Router();

const { users: ctrl } = require("../../controllers");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiSubscriptionSchema } = require("../../models/user");

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/subscription",
  auth,
  validation(joiSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

module.exports = router;
