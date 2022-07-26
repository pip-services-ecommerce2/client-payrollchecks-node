import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IPayrollChecksClientV1 } from './IPayrollChecksClientV1';
import { PayrollCheckV1 } from 'service-payrollchecks-node';

export class PayrollChecksDirectClientV1 extends DirectClient<any> implements IPayrollChecksClientV1 {

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor('service-payrollchecks', 'controller', '*', '*', '*'));

        if (config)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getChecks(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PayrollCheckV1>> {
        let timing = this.instrument(correlationId, 'payrollchecks.get_checks');

        try {
            return await this._controller.getChecks(correlationId, filter, paging);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getCheckById(correlationId: string, check_id: string): Promise<PayrollCheckV1> {
        let timing = this.instrument(correlationId, 'payrollchecks.get_check_by_id');
        
        try {
            return await this._controller.getCheckById(correlationId, check_id);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createCheck(correlationId: string, check: PayrollCheckV1): Promise<PayrollCheckV1> {
        let timing = this.instrument(correlationId, 'payrollchecks.create_check');
        
        try {
            return await this._controller.createCheck(correlationId, check);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateCheck(correlationId: string, check: PayrollCheckV1): Promise<PayrollCheckV1> {
        let timing = this.instrument(correlationId, 'payrollchecks.update_check');

        try {
            return await this._controller.updateCheck(correlationId, check);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteCheckById(correlationId: string, check_id: string): Promise<PayrollCheckV1> {
        let timing = this.instrument(correlationId, 'payrollchecks.delete_check_by_id');
        
        try {
            return await this._controller.deleteCheckById(correlationId, check_id);

        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}