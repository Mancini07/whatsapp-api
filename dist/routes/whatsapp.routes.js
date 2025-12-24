"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const whatsapp_controller_1 = require("../controller/whatsapp.controller");
const router = (0, express_1.Router)();
router.post("/alert", whatsapp_controller_1.sendAlertController);
exports.default = router;
//# sourceMappingURL=whatsapp.routes.js.map