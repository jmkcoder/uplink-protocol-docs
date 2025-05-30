[**@uplink-protocol/form-controller v0.2.6**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ValidatorService

# Class: ValidatorService

Defined in: [services/validator.service.ts:6](https://github.com/jmkcoder/uplink-protocol-form-controller/blob/b4197b802291c2a362dd28d04ee111d1534495f5/src/services/validator.service.ts#L6)

Service for managing dynamic validators

## Constructors

### Constructor

> **new ValidatorService**(): `ValidatorService`

Defined in: [services/validator.service.ts:7](https://github.com/jmkcoder/uplink-protocol-form-controller/blob/b4197b802291c2a362dd28d04ee111d1534495f5/src/services/validator.service.ts#L7)

#### Returns

`ValidatorService`

## Methods

### getAvailableValidators()

> **getAvailableValidators**(): `string`[]

Defined in: [services/validator.service.ts:33](https://github.com/jmkcoder/uplink-protocol-form-controller/blob/b4197b802291c2a362dd28d04ee111d1534495f5/src/services/validator.service.ts#L33)

Get all available validators

#### Returns

`string`[]

List of predefined validators

***

### registerValidator()

> **registerValidator**(`name`, `validatorFn`): `void`

Defined in: [services/validator.service.ts:14](https://github.com/jmkcoder/uplink-protocol-form-controller/blob/b4197b802291c2a362dd28d04ee111d1534495f5/src/services/validator.service.ts#L14)

Register a dynamic validator

#### Parameters

##### name

`string`

Validator name

##### validatorFn

[`DynamicValidator`](../type-aliases/DynamicValidator.md)

Validator function

#### Returns

`void`

***

### unregisterValidator()

> **unregisterValidator**(`name`): `boolean`

Defined in: [services/validator.service.ts:24](https://github.com/jmkcoder/uplink-protocol-form-controller/blob/b4197b802291c2a362dd28d04ee111d1534495f5/src/services/validator.service.ts#L24)

Unregister a dynamic validator

#### Parameters

##### name

`string`

Validator name

#### Returns

`boolean`

Success flag
