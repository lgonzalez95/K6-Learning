- #### K6 is known as load impact

- #### K6 is written in GO as the backend but the users/testers write the scripts in JS

- #### Supports recording through chrome plugin

- #### k6 run <file>

## Metrics
1. **http_req_duration**: the end-to-end time of all requests (that is, the total latency)
- p(90): 90% of the requests equal or less than the speficied time...
- p(95): 95% of the requests equal or less than the speficied time...
2. **http_req_failed**: the total number of failed requests
3. **iterations**: the total number of iterations


## Reconding with plugin
1. Install the plugin
2. Hit record and stop recording, an HAR file will be downloaded
3. Install har-to-k6 dependency: npm install --save har-to-k6 
4. Convert the HAR file: ./node_modules/.bin/har-to-k6 file.har -o output.js     

### HTTP methods supported by K6
- get
- post
- put
- patch
- del
- options
- batch
- request