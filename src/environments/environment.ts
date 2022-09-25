// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'https://vaata-back.jcloud.ik-server.com/api/v1',
  // api_url: 'http://localhost:8000/api/v1',
  FRONT_END_URL: 'http://localhost:4200/#/',
  BIDDING_SOCKET: 'wss://vaata-back.jcloud.ik-server.com/ws/live-bid/',
  mapbox: {
    accessToken: 'pk.eyJ1IjoidmFhdGEiLCJhIjoiY2theG8zMzF3MGExOTJxbmx6Mm43a2dtdCJ9.9IbYCLOqSAv8dpW3iYFAnA'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
