import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { IPayrollChecksClientV1 } from './IPayrollChecksClientV1';
import { PayrollCheckV1 } from 'service-payrollchecks-node';
export declare class PayrollChecksHttpClientV1 extends CommandableHttpClient implements IPayrollChecksClientV1 {
    constructor(config?: any);
    getChecks(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<PayrollCheckV1>>;
    getCheckById(correlationId: string, check_id: string): Promise<PayrollCheckV1>;
    createCheck(correlationId: string, check: PayrollCheckV1): Promise<PayrollCheckV1>;
    updateCheck(correlationId: string, check: PayrollCheckV1): Promise<PayrollCheckV1>;
    deleteCheckById(correlationId: string, check_id: string): Promise<PayrollCheckV1>;
}
