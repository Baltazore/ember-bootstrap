import Application from 'test-app/app';
import config from 'test-app/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import setupSinon from 'ember-sinon-qunit';
import { setRunOptions } from 'ember-a11y-testing/test-support';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

setupSinon();

setRunOptions({
  rules: {
    // color checks unfortunately fail for colors defined in test-app, but are controlled at the end by
    // the user, so not a primary concern of the addon
    'color-contrast': { enabled: false },
  },
});

start();
