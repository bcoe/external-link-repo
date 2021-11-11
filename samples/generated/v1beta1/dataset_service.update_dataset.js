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

function main(dataset, updateMask) {
  // [START aiplatform_v1beta1_generated_DatasetService_UpdateDataset_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Dataset which replaces the resource on the server.
   */
  // const dataset = {}
  /**
   *  Required. The update mask applies to the resource.
   *  For the `FieldMask` definition, see google.protobuf.FieldMask google.protobuf.FieldMask.
   *  Updatable fields:
   *    * `display_name`
   *    * `description`
   *    * `labels`
   */
  // const updateMask = {}

  // Imports the Aiplatform library
  const {DatasetServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new DatasetServiceClient();

  async function callUpdateDataset() {
    // Construct request
    const request = {
      dataset,
      updateMask,
    };

    // Run request
    const response = await aiplatformClient.updateDataset(request);
    console.log(response);
  }

  callUpdateDataset();
  // [END aiplatform_v1beta1_generated_DatasetService_UpdateDataset_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
