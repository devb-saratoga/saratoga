# Saratoga Logs Analyzer
### Copyright DevB 2016-2021

![Logo](img/saratoga01.png)

### License MIT

## Makefile
### build, clean, run, prune, status. test
#### Ensure you change the folder name in S_INSTALL in Makefile 
```
    make [cmd]
    ## Examples
    make build
    make test1 ARGS="vpcId"
```

### Parameters in curl post
```
accessKeyId, accountId, arn, creationDate, dBInstanceArn
eventName, eventSource, eventTime, principalId
recipientAccountId, awsRegion, sourceIPAddress
subnetIdentifier, vpcId
```
# Log nouns count
```
    make test1 ARGS="vpcId"
```

# Find in logs
### Searching in all logs requires two or more arguments for start, intermediates and end
```
    make test2 ARG1="sg-d3260ecc" ARG2="is associated" ARG3="chainbeldb"
    make test3 ARG1="sg-d3260ecc" ARG2="is associated"
```

# Copy logs
### Copy filtered logs. Requires two or more arguments for start, intermediates and end
```
    make test4 ARG1="sg-d3260ecc" ARG2="is associated"
    make test4 ARG1="AROAJ4Z5B7AFJ23E334N2" ARG2="east-2"
```

# License
### MIT License

### Copyright (c) Devb Inc 2016-2021

<pre>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</pre>