export interface ShipmentResponse {
  CurrentStatus: {
    state: string;
    timestamp: string;
  };
  PromisedDate?: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: [string];
  TransitEvents: [
    {
      state: string;
      timestamp: string;
      hub?: string;
      reason?: string;
    },
  ];
  CreateDate: string;
}
