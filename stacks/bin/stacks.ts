#!/usr/bin/env node

import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CloudBuildWebFrontEndStack } from '../lib/cloudbuild-web-frontend-stack';
import { getConfig } from "../lib/config";

const config = getConfig();

const app = new cdk.App();

new CloudBuildWebFrontEndStack(app, 'CloudBuildWebFrontEndStack', {
  env: {
    region: config.REGION,
    account: config.ACCOUNT
  },
  config
});
