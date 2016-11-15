/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

// Note: launch dates need to be parsed in 'Dec 1, 2016' formatted.
// Date('yyyy-mm-dd') produces a UTC date. We want local dates.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Differences_in_assumed_time-zone

window.HOUSES = [{
  module: "airport",  // TODO(samthor): reorder to right of scene
  iced: true,
  launchDate: new Date('Dec 1, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  hideDate: true,
  category: "explore"
}, {
  module: "traditions",
  iced: true,
  launchDate: new Date('Dec 1, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  hideDate: true,
  category: "learn"
}, {
  module: "codeboogie",
  iced: true,
  launchDate: new Date('Dec 1, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  hideDate: true,
  category: "play"
}, {
  module: "app",
  iced: true,
  launchDate: new Date('Dec 1, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  hideDate: true,
  category: "play",
  link: 'https://play.google.com/store/apps/details?id=com.google.android.apps.santatracker'
}, {
  module: "presentbounce",
  iced: true,
  launchDate: new Date('Dec 1, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "santasback",
  iced: true,
  launchDate: new Date('Dec 2, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "watch"
}, {
  module: "translations",
  iced: true,
  launchDate: new Date('Dec 3, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "learn"
}, {
  module: "postcardly",  // TODO(madCode): change route name?
  iced: true,
  launchDate: new Date('Dec 4, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "learn"
}, {
  module: "seasonofgiving",
  iced: true,
  launchDate: new Date('Dec 5, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "learn"
}, {
  module: "santaselfie",
  iced: true,
  launchDate: new Date('Dec 6, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "windtunnel",  // TODO(samthor): switch to "penguindash"
  iced: true,
  launchDate: new Date('Dec 7, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "santasearch",
  iced: true,
  launchDate: new Date('Dec 8, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "codelab",
  iced: true,
  launchDate: new Date('Dec 9, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "learn"
}, {
  module: "postcard",
  iced: true,
  launchDate: new Date('Dec 10, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "gumball",
  iced: true,
  launchDate: new Date('Dec 11, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "jamband",
  iced: true,
  launchDate: new Date('Dec 12, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "factory",  // TODO(samthor): switch to "wrapbattle"
  iced: true,
  launchDate: new Date('Dec 13, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "boatload",
  iced: true,
  launchDate: new Date('Dec 14, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "runner",
  iced: true,
  launchDate: new Date('Dec 15, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "jetpack",
  iced: true,
  launchDate: new Date('Dec 16, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "carpool",
  iced: true,
  launchDate: new Date('Dec 17, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "watch"
}, {
  module: "briefing",
  iced: true,
  launchDate: new Date('Dec 18, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "explore"
}, {
  module: "presentdrop",
  iced: true,
  launchDate: new Date('Dec 19, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "mercator",
  iced: true,
  launchDate: new Date('Dec 20, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "learn"
}, {
  module: "racer",
  iced: true,
  launchDate: new Date('Dec 21, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "matching",
  iced: true,
  launchDate: new Date('Dec 22, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "play"
}, {
  module: "liftoff",
  iced: true,
  launchDate: new Date('Dec 23, 2016'),
  portalLaunchDate: new Date('Dec 1, 2016'),
  category: "watch"
}];