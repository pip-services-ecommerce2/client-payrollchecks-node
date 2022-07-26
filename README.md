# <img src="https://github.com/pip-services/pip-services/raw/master/design/Logo.png" alt="Pip.Services Logo" style="max-width:30%"> <br/> Payments Microservice Client SDK for Node.js

This is a Node.js client SDK for [service-payrollchecks-node](https://github.com/pip-services-ecommerce2/service-payrollchecks-node) microservice.
It provides an easy to use abstraction over communication protocols:

* Direct client
* HTTP client
* Seneca client (see http://www.senecajs.org)
* AWS Lambda client (see https://aws.amazon.com/lambda)

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-payrollchecks-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-payrollchecks-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.PayrollChecksHttpClientV1(config);

// Connect to the microservice
await client.open(null);

// Work with the microservice
    ...
```

Now the client is ready to perform operations
```javascript
// Create a new payroll check
let payrollCheck = {
    id: '2',
    party_id: '2',
    income: [
        {
            description: 'task 3',
            total: 700,
            hours: 50,
            rate: 14
        },
        {
            description: 'task 4',
            total: 1680,
            hours: 120,
            rate: 14
        },
    ],
    deductions: [
        {
            description: 'commission 5',
            total: 35,
            ytd_total: 5
        }
    ],
    state: PayrollCheckStateV1.New,
    income_total: 0,
    net_total: 2340
};

payrollCheck = await client.createCheck(
    null,
    payrollCheck
);
```

```javascript
// Get the list of payroll checks
let page = await client.getChecks(
    null,
    {
        party_id: '1',
        state: 'new'
    },
    {
        total: true,
        skip: 0,
        take: 10
    }
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Denis Kuznetsov*.

