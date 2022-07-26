import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { IPayrollChecksClientV1 } from './IPayrollChecksClientV1';
import { PayrollCheckV1 } from 'service-payrollchecks-node';

export class PayrollChecksHttpClientV1 extends CommandableHttpClient implements IPayrollChecksClientV1 {

    constructor(config?: any) {
        super('v1/payroll_checks');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getChecks(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PayrollCheckV1>> {
        let timing = this.instrument(correlationId, 'payroll_checks.get_checks');

        try {
            return await this.callCommand(
                'get_checks',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getCheckById(correlationId: string, check_id: string): Promise<PayrollCheckV1> {
        let timing = this.instrument(correlationId, 'payroll_checks.get_check_by_id');

        try {
            return await this.callCommand(
                'get_check_by_id',
                correlationId,
                {
                    check_id: check_id
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createCheck(correlationId: string, check: PayrollCheckV1): Promise<PayrollCheckV1> {
        let timing = this.instrument(correlationId, 'payroll_checks.create_check');

        try {
            return await this.callCommand(
                'create_check',
                correlationId,
                {
                    check: check
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateCheck(correlationId: string, check: PayrollCheckV1): Promise<PayrollCheckV1> {
        let timing = this.instrument(correlationId, 'payroll_checks.update_check');

        try {
            return await this.callCommand(
                'update_check',
                correlationId,
                {
                    check: check
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteCheckById(correlationId: string, check_id: string): Promise<PayrollCheckV1> {
        let timing = this.instrument(correlationId, 'payroll_checks.delete_check_by_id');

        try {
            return await this.callCommand(
                'delete_check_by_id',
                correlationId,
                {
                    check_id: check_id
                }
            );

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
