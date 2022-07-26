"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollChecksNullClientV1 = void 0;
class PayrollChecksNullClientV1 {
    getChecks(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    getCheckById(correlationId, check_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    createCheck(correlationId, check) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    updateCheck(correlationId, check) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    deleteCheckById(correlationId, check_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
}
exports.PayrollChecksNullClientV1 = PayrollChecksNullClientV1;
//# sourceMappingURL=PayrollChecksNullClientV1.js.map