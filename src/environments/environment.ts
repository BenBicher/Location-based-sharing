// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyCxS4ZWJvCFTNaJa0X-R9lml66XrOtwBE4",
    authDomain: "location-base-sh-1530431619237.firebaseapp.com",
    databaseURL: "https://location-base-sh-1530431619237.firebaseio.com",
    projectId: "location-base-sh-1530431619237",
    storageBucket: "location-base-sh-1530431619237.appspot.com",
    messagingSenderId: "958486345638"
},
  auth: {
    clientID: 'jfvBOfigNYtdDxw7A7I8Kz7VdiiY4FIH',
    domain: 'ben-bicher.auth0.com/',
    audience: 'http://localhost:3001',
    redirect: 'http://location-base-sh-1530431619237.firebaseapp.com/callback',
    scope: 'openid profile email'
  }
};

// user.firebase_data = {
//   user_id: new Buffer(user.email).toString('base64'),
//   company: !user.isSocial ? context.connection.replace(/\./g, '-') : null,
//   foo: 'bar'
// };
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
