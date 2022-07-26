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
exports.PayrollChecksHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class PayrollChecksHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/payroll_checks');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getChecks(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'payroll_checks.get_checks');
            try {
                return yield this.callCommand('get_checks', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getCheckById(correlationId, check_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'payroll_checks.get_check_by_id');
            try {
                return yield this.callCommand('get_check_by_id', correlationId, {
                    check_id: check_id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createCheck(correlationId, check) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'payroll_checks.create_check');
            try {
                return yield this.callCommand('create_check', correlationId, {
                    check: check
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateCheck(correlationId, check) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'payroll_checks.update_check');
            try {
                return yield this.callCommand('update_check', correlationId, {
                    check: check
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteCheckById(correlationId, check_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'payroll_checks.delete_check_by_id');
            try {
                return yield this.callCommand('delete_check_by_id', correlationId, {
                    check_id: check_id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.PayrollChecksHttpClientV1 = PayrollChecksHttpClientV1;
//# sourceMappingURL=PayrollChecksHttpClientV1.js.map