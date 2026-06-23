// src/lib/analytics.js

import { env } from "../config/env";
import ReactGA from "react-ga4";

ReactGA.initialize(env.gaMeasurementId);

export function trackEvent(name, params = {}) {
  ReactGA.event(name, params);
}