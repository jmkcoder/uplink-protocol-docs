[**@uplink-protocol/form-controller v0.2.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarGenerationOptions

# Interface: CalendarGenerationOptions

Defined in: [interfaces/calendar.service.interfaces.ts:71](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L71)

Options for calendar generation

## Properties

### disabledDates

> **disabledDates**: `Date`[]

Defined in: [interfaces/calendar.service.interfaces.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L78)

***

### disabledDaysOfWeek

> **disabledDaysOfWeek**: `number`[]

Defined in: [interfaces/calendar.service.interfaces.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L79)

***

### firstDayOfWeek

> **firstDayOfWeek**: `number`

Defined in: [interfaces/calendar.service.interfaces.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L75)

***

### focusedDate

> **focusedDate**: `null` \| `Date`

Defined in: [interfaces/calendar.service.interfaces.ts:74](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L74)

***

### fullWeekdays?

> `optional` **fullWeekdays**: `boolean`

Defined in: [interfaces/calendar.service.interfaces.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L85)

***

### hideOtherMonthDays

> **hideOtherMonthDays**: `boolean`

Defined in: [interfaces/calendar.service.interfaces.ts:82](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L82)

***

### isDateDisabledFn()

> **isDateDisabledFn**: (`date`) => `boolean`

Defined in: [interfaces/calendar.service.interfaces.ts:81](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L81)

#### Parameters

##### date

`Date`

#### Returns

`boolean`

***

### isRangeSelection

> **isRangeSelection**: `boolean`

Defined in: [interfaces/calendar.service.interfaces.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L80)

***

### locale?

> `optional` **locale**: `string`

Defined in: [interfaces/calendar.service.interfaces.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L83)

***

### maxDate

> **maxDate**: `null` \| `Date`

Defined in: [interfaces/calendar.service.interfaces.ts:77](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L77)

***

### minDate

> **minDate**: `null` \| `Date`

Defined in: [interfaces/calendar.service.interfaces.ts:76](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L76)

***

### selectedDate

> **selectedDate**: `null` \| `Date`

Defined in: [interfaces/calendar.service.interfaces.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L72)

***

### selectedDateRange

> **selectedDateRange**: `object`

Defined in: [interfaces/calendar.service.interfaces.ts:73](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L73)

#### end?

> `optional` **end**: `null` \| `Date`

#### endDate?

> `optional` **endDate**: `null` \| `Date`

#### start?

> `optional` **start**: `null` \| `Date`

#### startDate?

> `optional` **startDate**: `null` \| `Date`

***

### weekNumbers?

> `optional` **weekNumbers**: `boolean`

Defined in: [interfaces/calendar.service.interfaces.ts:84](https://github.com/jmkcoder/uplink-protocol-calendar/blob/311e0b81efba7399cf1c367c0a2007aa66f3b830/src/interfaces/calendar.service.interfaces.ts#L84)
