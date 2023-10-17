#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { InfraStack } from '../lib/infra/infra-stack';

const app = new cdk.App();
const config = app.node.tryGetContext("cicd");

new InfraStack(app, 'AwsCoreStack', {
  env: {
    account: config.account,
    region: config.region,
  },
});
