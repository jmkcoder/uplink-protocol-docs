[**@uplink-protocol/form-controller v0.1.1**](../README.md)

***

[@uplink-protocol/form-controller](../globals.md) / CalendarControllerClass

# Class: CalendarControllerClass

Defined in: [controller.ts:63](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L63)

CalendarControllerClass - A full featured date picker controller class.
Provides functionality for date picking and calendar display.

This controller uses a service-oriented architecture where all the core
functionality is delegated to specialized services.

## Implements

- [`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md)

## Constructors

### Constructor

> **new CalendarControllerClass**(`options?`): `CalendarControllerClass`

Defined in: [controller.ts:102](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L102)

Constructor - initializes the controller with optional configuration

#### Parameters

##### options?

[`CalendarOptions`](../interfaces/CalendarOptions.md)

Calendar configuration options

#### Returns

`CalendarControllerClass`

## Properties

### \_\_adapter?

> `optional` **\_\_adapter**: `ControllerAdapter`

Defined in: [controller.ts:68](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L68)

#### Implementation of

`CalendarControllerInterface.__adapter`

***

### \_currentDate

> **\_currentDate**: `Date`

Defined in: [controller.ts:71](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L71)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_currentDate`](../interfaces/CalendarControllerInterface.md#_currentdate)

***

### \_currentYearRangeBase

> **\_currentYearRangeBase**: `number` = `0`

Defined in: [controller.ts:84](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L84)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_currentYearRangeBase`](../interfaces/CalendarControllerInterface.md#_currentyearrangebase)

***

### \_dateFormat

> **\_dateFormat**: `null` \| `string` = `null`

Defined in: [controller.ts:79](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L79)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_dateFormat`](../interfaces/CalendarControllerInterface.md#_dateformat)

***

### \_dateFormatOptions

> **\_dateFormatOptions**: `null` \| `DateTimeFormatOptions` = `null`

Defined in: [controller.ts:82](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L82)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_dateFormatOptions`](../interfaces/CalendarControllerInterface.md#_dateformatoptions)

***

### \_disabledDates

> **\_disabledDates**: `Date`[] = `[]`

Defined in: [controller.ts:77](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L77)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_disabledDates`](../interfaces/CalendarControllerInterface.md#_disableddates)

***

### \_firstDayOfWeek

> **\_firstDayOfWeek**: `number` = `0`

Defined in: [controller.ts:78](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L78)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_firstDayOfWeek`](../interfaces/CalendarControllerInterface.md#_firstdayofweek)

***

### \_focusedDate

> **\_focusedDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:74](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L74)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_focusedDate`](../interfaces/CalendarControllerInterface.md#_focuseddate)

***

### \_hideOtherMonthDays

> **\_hideOtherMonthDays**: `boolean` = `false`

Defined in: [controller.ts:81](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L81)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_hideOtherMonthDays`](../interfaces/CalendarControllerInterface.md#_hideothermonthdays)

***

### \_isRangeSelection

> **\_isRangeSelection**: `boolean` = `false`

Defined in: [controller.ts:80](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L80)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_isRangeSelection`](../interfaces/CalendarControllerInterface.md#_israngeselection)

***

### \_locale

> **\_locale**: `string` = `'en-US'`

Defined in: [controller.ts:85](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L85)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_locale`](../interfaces/CalendarControllerInterface.md#_locale)

***

### \_maxDate

> **\_maxDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:76](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L76)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_maxDate`](../interfaces/CalendarControllerInterface.md#_maxdate)

***

### \_minDate

> **\_minDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:75](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L75)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_minDate`](../interfaces/CalendarControllerInterface.md#_mindate)

***

### \_selectedDate

> **\_selectedDate**: `null` \| `Date` = `null`

Defined in: [controller.ts:72](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L72)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_selectedDate`](../interfaces/CalendarControllerInterface.md#_selecteddate)

***

### \_selectedDateRange

> **\_selectedDateRange**: [`DateRange`](../interfaces/DateRange.md)

Defined in: [controller.ts:73](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L73)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_selectedDateRange`](../interfaces/CalendarControllerInterface.md#_selecteddaterange)

***

### \_yearRangeSize

> **\_yearRangeSize**: `number` = `12`

Defined in: [controller.ts:83](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L83)

#### Implementation of

[`CalendarControllerInterface`](../interfaces/CalendarControllerInterface.md).[`_yearRangeSize`](../interfaces/CalendarControllerInterface.md#_yearrangesize)

***

### bindings

> **bindings**: `Record`\<`string`, `Binding`\<`any`\>\>

Defined in: [controller.ts:64](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L64)

#### Implementation of

`CalendarControllerInterface.bindings`

***

### events?

> `optional` **events**: `Record`\<`string`, `EventEmitter`\<`any`\>\>

Defined in: [controller.ts:66](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L66)

#### Implementation of

`CalendarControllerInterface.events`

***

### meta?

> `optional` **meta**: `ControllerMetadata`

Defined in: [controller.ts:67](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L67)

#### Implementation of

`CalendarControllerInterface.meta`

***

### methods?

> `optional` **methods**: `Record`\<`string`, (...`args`) => `any`\>

Defined in: [controller.ts:65](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L65)

#### Implementation of

`CalendarControllerInterface.methods`

## Methods

### clearFocusedDate()

> **clearFocusedDate**(): `void`

Defined in: [controller.ts:739](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L739)

Clear the focused date

#### Returns

`void`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [controller.ts:579](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L579)

Clear the current selection using DateSelectionService

#### Returns

`void`

***

### formatDate()

> **formatDate**(`date`): `string`

Defined in: [controller.ts:748](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L748)

Get formatted date for display

#### Parameters

##### date

`Date`

Date to format

#### Returns

`string`

Formatted date string

***

### getCurrentYearRange()

> **getCurrentYearRange**(): [`YearRange`](../interfaces/YearRange.md)

Defined in: [controller.ts:762](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L762)

Get information about the current year range

#### Returns

[`YearRange`](../interfaces/YearRange.md)

Year range object with start and end years

***

### getDateFormatOptions()

> **getDateFormatOptions**(): `null` \| `DateTimeFormatOptions`

Defined in: [controller.ts:715](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L715)

Get the current date format options

#### Returns

`null` \| `DateTimeFormatOptions`

Current date format options or null

***

### getFormattedDate()

> **getFormattedDate**(): `null` \| `string`

Defined in: [controller.ts:605](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L605)

Get formatted selected date using DateFormattingService

#### Returns

`null` \| `string`

Formatted date string or null

***

### getLocale()

> **getLocale**(): `string`

Defined in: [controller.ts:698](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L698)

Get the current locale

#### Returns

`string`

Current locale string

***

### goToDate()

> **goToDate**(`date`): `void`

Defined in: [controller.ts:422](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L422)

Go to a specific date using NavigationService

#### Parameters

##### date

`Date`

Date to navigate to

#### Returns

`void`

***

### goToMonth()

> **goToMonth**(`month`): `void`

Defined in: [controller.ts:399](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L399)

Go to a specific month using NavigationService

#### Parameters

##### month

`number`

Month (0-11)

#### Returns

`void`

***

### goToToday()

> **goToToday**(): `void`

Defined in: [controller.ts:430](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L430)

Go to today using NavigationService

#### Returns

`void`

***

### goToYear()

> **goToYear**(`year`): `void`

Defined in: [controller.ts:408](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L408)

Go to a specific year using NavigationService

#### Parameters

##### year

`number`

Year

#### Returns

`void`

***

### goToYearRange()

> **goToYearRange**(`baseYear`): `void`

Defined in: [controller.ts:492](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L492)

Go to specific year range

#### Parameters

##### baseYear

`number`

The base year for the range

#### Returns

`void`

***

### isDateDisabled()

> **isDateDisabled**(`date`): `boolean`

Defined in: [controller.ts:303](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L303)

Check if a date should be disabled using ConstraintsService

#### Parameters

##### date

`Date`

Date to check

#### Returns

`boolean`

Boolean indicating if the date is disabled

***

### nextMonth()

> **nextMonth**(): `void`

Defined in: [controller.ts:367](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L367)

#### Returns

`void`

***

### nextYear()

> **nextYear**(): `void`

Defined in: [controller.ts:383](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L383)

Navigate to next year using NavigationService

#### Returns

`void`

***

### nextYearRange()

> **nextYearRange**(): `void`

Defined in: [controller.ts:437](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L437)

Navigate to next year range

#### Returns

`void`

***

### prevMonth()

> **prevMonth**(): `void`

Defined in: [controller.ts:375](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L375)

Navigate to previous month using NavigationService

#### Returns

`void`

***

### prevYear()

> **prevYear**(): `void`

Defined in: [controller.ts:391](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L391)

Navigate to previous year using NavigationService

#### Returns

`void`

***

### prevYearRange()

> **prevYearRange**(): `void`

Defined in: [controller.ts:464](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L464)

Navigate to previous year range

#### Returns

`void`

***

### selectDate()

> **selectDate**(`year`, `month`, `day`): `void`

Defined in: [controller.ts:317](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L317)

Select a date

#### Parameters

##### year

`number`

Year

##### month

`number`

Month (0-11)

##### day

`number`

Day of month

#### Returns

`void`

***

### selectMonth()

> **selectMonth**(`month`, `year`): `void`

Defined in: [controller.ts:795](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L795)

Select a specific month from the month view

#### Parameters

##### month

`number`

Month to select (0-11)

##### year

`number`

Year of the month

#### Returns

`void`

***

### selectYear()

> **selectYear**(`year`): `void`

Defined in: [controller.ts:817](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L817)

Select a specific year from the year view

#### Parameters

##### year

`number`

Year to select

#### Returns

`void`

***

### setDateFormatOptions()

> **setDateFormatOptions**(`options`): `void`

Defined in: [controller.ts:706](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L706)

Set date format options for internationalized formatting

#### Parameters

##### options

`DateTimeFormatOptions`

Intl.DateTimeFormatOptions

#### Returns

`void`

***

### setDisabledDates()

> **setDisabledDates**(`dates`): `void`

Defined in: [controller.ts:661](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L661)

Set disabled dates

#### Parameters

##### dates

`Date`[]

Array of disabled dates

#### Returns

`void`

***

### setFocusedDate()

> **setFocusedDate**(`date`): `void`

Defined in: [controller.ts:722](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L722)

Set the focused date

#### Parameters

##### date

Focused date or null to clear focus

`null` | `Date`

#### Returns

`void`

***

### setLocale()

> **setLocale**(`locale`): `void`

Defined in: [controller.ts:682](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L682)

Set the locale for the calendar

#### Parameters

##### locale

`string`

Locale string (e.g., 'en-US', 'fr-FR', 'ja-JP')

#### Returns

`void`

***

### setMaxDate()

> **setMaxDate**(`date`): `void`

Defined in: [controller.ts:640](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L640)

Set maximum selectable date

#### Parameters

##### date

Maximum date

`null` | `Date`

#### Returns

`void`

***

### setMinDate()

> **setMinDate**(`date`): `void`

Defined in: [controller.ts:619](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L619)

#### Parameters

##### date

`null` | `Date`

#### Returns

`void`

***

### setRangeSelectionMode()

> **setRangeSelectionMode**(`isRange`): `void`

Defined in: [controller.ts:562](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L562)

Set the date selection mode

#### Parameters

##### isRange

`boolean`

Whether to use range selection mode

#### Returns

`void`

***

### setYearRangeSize()

> **setYearRangeSize**(`size`): `void`

Defined in: [controller.ts:776](https://github.com/jmkcoder/uplink-protocol-calendar/blob/38fef3d5c9ea8d85876f78e9f7a77f710bb13ac6/src/controller.ts#L776)

Set the size of the year range (number of years to display in year view)

#### Parameters

##### size

`number`

Number of years to display

#### Returns

`void`
