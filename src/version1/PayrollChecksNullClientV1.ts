import { IPayrollChecksClientV1 } from './IPayrollChecksClientV1';

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { PayrollCheckV1 } from 'service-payrollchecks-node';

export class PayrollChecksNullClientV1 implements IPayrollChecksClientV1 {
    public async getChecks(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PayrollCheckV1>> {
        return null;
    }

    public async getCheckById(correlationId: string, check_id: string): Promise<PayrollCheckV1> {
        return null;
    }

    public async createCheck(correlationId: string, check: PayrollCheckV1): Promise<PayrollCheckV1> {
        return null;
    }

    public async updateCheck(correlationId: string, check: PayrollCheckV1): Promise<PayrollCheckV1> {
        return null;
    }

    public async deleteCheckById(correlationId: string, check_id: string): Promise<PayrollCheckV1> {
        return null;
    }
}
