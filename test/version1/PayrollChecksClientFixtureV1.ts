const assert = require('chai').assert;

import { IPayrollChecksClientV1 } from '../../src/version1/IPayrollChecksClientV1';
import { TestModel } from '../data/TestModel';
import { PagingParams } from 'pip-services3-commons-nodex';
import { PayrollCheckV1, PayrollCheckStateV1 } from 'service-payrollchecks-node';

let PAYROLL_CHECK1: PayrollCheckV1 = TestModel.createPayrollCheck1();
let PAYROLL_CHECK2: PayrollCheckV1 = TestModel.createPayrollCheck2();

export class PayrollChecksClientFixtureV1 {
    private _client: IPayrollChecksClientV1;

    constructor(client: IPayrollChecksClientV1) {
        this._client = client;
    }

    public async testCrudOperations() {
        let payrollCheck1, payrollCheck2: PayrollCheckV1;

        // Create one payroll check
        let payrollCheck = await this._client.createCheck(null, PAYROLL_CHECK1);

        assert.isObject(payrollCheck);
        TestModel.assertEqualPayrollCheckV1(payrollCheck, PAYROLL_CHECK1);

        payrollCheck1 = payrollCheck;

        // Create another credit_card
        payrollCheck = await this._client.createCheck(null, PAYROLL_CHECK2);

        assert.isObject(payrollCheck);
        TestModel.assertEqualPayrollCheckV1(payrollCheck, PAYROLL_CHECK2);

        payrollCheck2 = payrollCheck;

        // Get all payroll checks
        let page = await this._client.getChecks(
            null,
            null,
            new PagingParams(0, 5, false)
        );

        assert.isObject(page);
        assert.isTrue(page.data.length >= 2);

        // Update the payroll check
        payrollCheck1.state = PayrollCheckStateV1.Paid;

        payrollCheck = await this._client.updateCheck(null, payrollCheck1);

        assert.isObject(payrollCheck);
        assert.equal(payrollCheck.state, PayrollCheckStateV1.Paid);
        assert.equal(payrollCheck.id, PAYROLL_CHECK1.id);

        payrollCheck1 = payrollCheck;

        // Delete payroll check
        await this._client.deleteCheckById(null, payrollCheck1.id);

        // Try to get deleted payroll check
        payrollCheck = await this._client.getCheckById(null, payrollCheck1.id);

        assert.isNull(payrollCheck || null);
    }
}
