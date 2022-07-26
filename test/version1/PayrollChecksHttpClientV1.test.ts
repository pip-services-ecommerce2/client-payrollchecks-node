import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { PayrollChecksMemoryPersistence } from 'service-payrollchecks-node';
import { PayrollChecksController } from 'service-payrollchecks-node';
import { PayrollChecksHttpServiceV1 } from 'service-payrollchecks-node';
import { PayrollChecksHttpClientV1 } from '../../src/version1/PayrollChecksHttpClientV1';
import { PayrollChecksClientFixtureV1 } from './PayrollChecksClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('PayrollChecksHttpClientV1', () => {
    let service: PayrollChecksHttpServiceV1;
    let client: PayrollChecksHttpClientV1;
    let fixture: PayrollChecksClientFixtureV1;

    suiteSetup(async () => {

        let logger = new ConsoleLogger();
        let persistence = new PayrollChecksMemoryPersistence();
        let controller = new PayrollChecksController();

        service = new PayrollChecksHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-payrollchecks', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-payrollchecks', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-payrollchecks', 'service', 'http', 'default', '1.0'), service
        );

        persistence.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new PayrollChecksHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new PayrollChecksClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });

    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
