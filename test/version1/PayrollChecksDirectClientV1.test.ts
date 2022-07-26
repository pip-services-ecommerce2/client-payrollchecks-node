import { Descriptor, ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { PayrollChecksMemoryPersistence } from 'service-payrollchecks-node';
import { PayrollChecksController } from 'service-payrollchecks-node';
import { PayrollChecksDirectClientV1 } from '../../src/version1/PayrollChecksDirectClientV1';
import { PayrollChecksClientFixtureV1 } from './PayrollChecksClientFixtureV1';

suite('PayrollChecksDirectClientV1', () => {
    let client: PayrollChecksDirectClientV1;
    let fixture: PayrollChecksClientFixtureV1;

    suiteSetup(async () => {
        
        let logger = new ConsoleLogger();
        let paymentmethodsPersistence = new PayrollChecksMemoryPersistence();

        let controller = new PayrollChecksController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-payrollchecks', 'persistence', 'memory', 'default', '1.0'), paymentmethodsPersistence,
            new Descriptor('service-payrollchecks', 'controller', 'default', 'default', '1.0'), controller,
        );

        paymentmethodsPersistence.setReferences(references);
        controller.setReferences(references);

        client = new PayrollChecksDirectClientV1();
        client.setReferences(references);

        fixture = new PayrollChecksClientFixtureV1(client);

        await client.open(null);
    });

    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
