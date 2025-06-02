[**@uplink-protocol/form-controller v0.2.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / ILocalizationService

# Interface: ILocalizationService

Defined in: [interfaces/localization.service.interfaces.ts:5](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/localization.service.interfaces.ts#L5)

Localization service interface
Responsible for providing internationalization and localization functions

## Methods

### formatDate()

> **formatDate**(`date`, `options?`): `string`

Defined in: [interfaces/localization.service.interfaces.ts:36](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/localization.service.interfaces.ts#L36)

Format a date according to the locale

#### Parameters

##### date

`Date`

##### options?

`DateTimeFormatOptions`

#### Returns

`string`

***

### getLocale()

> **getLocale**(): `string`

Defined in: [interfaces/localization.service.interfaces.ts:26](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/localization.service.interfaces.ts#L26)

Get current locale

#### Returns

`string`

***

### getMonthNames()

> **getMonthNames**(`short?`): `string`[]

Defined in: [interfaces/localization.service.interfaces.ts:9](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/localization.service.interfaces.ts#L9)

#### Parameters

##### short?

`boolean`

#### Returns

`string`[]

***

### getShortWeekdayNames()

> **getShortWeekdayNames**(`firstDayOfWeek?`): `string`[]

Defined in: [interfaces/localization.service.interfaces.ts:21](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/localization.service.interfaces.ts#L21)

Get short localized weekday names

#### Parameters

##### firstDayOfWeek?

`number`

Optional first day of week (0=Sunday, 1=Monday, etc.)

#### Returns

`string`[]

***

### getWeekdayNames()

> **getWeekdayNames**(`short?`, `firstDayOfWeek?`): `string`[]

Defined in: [interfaces/localization.service.interfaces.ts:15](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/localization.service.interfaces.ts#L15)

Get localized weekday names

#### Parameters

##### short?

`boolean`

Whether to use short day names

##### firstDayOfWeek?

`number`

Optional first day of week (0=Sunday, 1=Monday, etc.)

#### Returns

`string`[]

***

### getWeekNumber()

> **getWeekNumber**(`date`): `number`

Defined in: [interfaces/localization.service.interfaces.ts:43](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/localization.service.interfaces.ts#L43)

Get the week number of a date
This is based on ISO 8601 where the first week of the year is the week with the first Thursday

#### Parameters

##### date

`Date`

#### Returns

`number`

***

### setLocale()

> **setLocale**(`locale`): `void`

Defined in: [interfaces/localization.service.interfaces.ts:31](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/localization.service.interfaces.ts#L31)

Set locale

#### Parameters

##### locale

`string`

#### Returns

`void`
