const express = require("express");
const router = express.Router();

const { contacts: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const { contactSchema } = require("../../schemas");

const validateMiddleware = validation(contactSchema);

router.get("/", ctrlWrapper(ctrl.listContacts));
router.get("/:contactId", ctrlWrapper(ctrl.getContactById));
router.post("/", validateMiddleware, ctrlWrapper(ctrl.addContact));
router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));
router.put("/:contactId", validateMiddleware, ctrlWrapper(ctrl.updateContact));

module.exports = router;
