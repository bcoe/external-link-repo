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

function main(name) {
  // [START aiplatform_v1_generated_MetadataService_DeleteContext_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Context to delete.
   *  Format:
   *  `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}`
   */
  // const name = 'abc123'
  /**
   *  The force deletion semantics is still undefined.
   *  Users should not use this field.
   */
  // const force = true
  /**
   *  Optional. The etag of the Context to delete.
   *  If this is provided, it must match the server's etag. Otherwise, the
   *  request will fail with a FAILED_PRECONDITION.
   */
  // const etag = 'abc123'

  // Imports the Aiplatform library
  const {MetadataServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new MetadataServiceClient();

  async function callDeleteContext() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await aiplatformClient.deleteContext(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteContext();
  // [END aiplatform_v1_generated_MetadataService_DeleteContext_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
