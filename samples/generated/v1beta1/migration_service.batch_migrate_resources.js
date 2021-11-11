// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(parent, migrateResourceRequests) {
  // [START aiplatform_v1beta1_generated_MigrationService_BatchMigrateResources_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The location of the migrated resource will live in.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Required. The request messages specifying the resources to migrate.
   *  They must be in the same location as the destination.
   *  Up to 50 resources can be migrated in one batch.
   */
  // const migrateResourceRequests = 1234

  // Imports the Aiplatform library
  const {MigrationServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new MigrationServiceClient();

  async function callBatchMigrateResources() {
    // Construct request
    const request = {
      parent,
      migrateResourceRequests,
    };

    // Run request
    const [operation] = await aiplatformClient.batchMigrateResources(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchMigrateResources();
  // [END aiplatform_v1beta1_generated_MigrationService_BatchMigrateResources_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
