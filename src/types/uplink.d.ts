declare module '@uplink-protocol/react' {
  export function useUplink(controller: any, options?: any): any;
}

declare module '@uplink-protocol/form-controller' {
  export interface FormConfig {
    initialValues: Record<string, any>;
    steps?: Array<{
      id: string;
      title: string;
      fields: Array<string>;
    }>;
    validators?: Record<string, (value: any) => string | null>;
  }
  
  export class FormController {
    constructor(config: FormConfig);
  }
}

declare module '@uplink/react' {
  export function useUplinkController<T>(controller: any, options?: any): {
    bindings: any;
    methods: any;
    state: T;
  };
}

declare module '@uplink/form' {
  export class FormController {
    constructor(config: any);
  }
}

declare module '@uplink/vue' {
  export function useUplinkController(controller: any, options?: any): any;
}

declare module '@uplink/svelte' {
  export function useUplinkController(controller: any, options?: any): any;
}

declare module '@uplink/core' {
  export function createController(controller: any, options?: any): any;
}

declare module '@uplink/datepicker' {
  export class DatePickerController {
    constructor(config: any);
  }
}

declare module '@uplink-protocol/core' {
  export function createUplink(controller: any, options?: any): any;
}
