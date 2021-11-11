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

function main(parent, execution) {
  // [START aiplatform_v1beta1_generated_MetadataService_CreateExecution_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the MetadataStore where the Execution should
   *  be created.
   *  Format:
   *  `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
   */
  // const parent = 'abc123'
  /**
   *  Required. The Execution to create.
   */
  // const execution = {}
  /**
   *  The {execution} portion of the resource name with the format:
   *  `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}`
   *  If not provided, the Execution's ID will be a UUID generated by the
   *  service.
   *  Must be 4-128 characters in length. Valid characters are `/[a-z][0-9]-/`.
   *  Must be unique across all Executions in the parent MetadataStore.
   *  (Otherwise the request will fail with ALREADY_EXISTS, or PERMISSION_DENIED
   *  if the caller can't view the preexisting Execution.)
   */
  // const executionId = 'abc123'

  // Imports the Aiplatform library
  const {MetadataServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new MetadataServiceClient();

  async function callCreateExecution() {
    // Construct request
    const request = {
      parent,
      execution,
    };

    // Run request
    const response = await aiplatformClient.createExecution(request);
    console.log(response);
  }

  callCreateExecution();
  // [END aiplatform_v1beta1_generated_MetadataService_CreateExecution_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
