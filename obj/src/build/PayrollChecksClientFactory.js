"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollChecksClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const PayrollChecksNullClientV1_1 = require("../version1/PayrollChecksNullClientV1");
const PayrollChecksDirectClientV1_1 = require("../version1/PayrollChecksDirectClientV1");
const PayrollChecksHttpClientV1_1 = require("../version1/PayrollChecksHttpClientV1");
class PayrollChecksClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(PayrollChecksClientFactory.NullClientV1Descriptor, PayrollChecksNullClientV1_1.PayrollChecksNullClientV1);
        this.registerAsType(PayrollChecksClientFactory.DirectClientV1Descriptor, PayrollChecksDirectClientV1_1.PayrollChecksDirectClientV1);
        this.registerAsType(PayrollChecksClientFactory.HttpClientV1Descriptor, PayrollChecksHttpClientV1_1.PayrollChecksHttpClientV1);
    }
}
exports.PayrollChecksClientFactory = PayrollChecksClientFactory;
PayrollChecksClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-payrollchecks', 'factory', 'default', 'default', '1.0');
PayrollChecksClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-payrollchecks', 'client', 'null', 'default', '1.0');
PayrollChecksClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-payrollchecks', 'client', 'direct', 'default', '1.0');
PayrollChecksClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-payrollchecks', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=PayrollChecksClientFactory.js.map