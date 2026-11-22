// HealthSure — Vercel Serverless Function Handler
// api/index.js

import { createApp } from '../backend/dist/app.js';

let cachedApp = null;

function getApp() {
  if (!cachedApp) {
    cachedApp = createApp();
  }
  return cachedApp;
}

export default async function handler(req, res) {
  try {
    const app = getApp();
    return app(req, res);
  } catch (err) {
    console.error('[Vercel Serverless Handler Error]:', err);
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        error: 'Serverless Function Execution Error',
        message: err?.message || String(err),
      });
    }
  }
}
