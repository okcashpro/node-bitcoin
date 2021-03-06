# node-okcash

node-okcash is a simple wrapper for the Okcash client's JSON-RPC API.

## Okcash
Okcash is a decentralized network built on the framework of Bitcoin. It provides free, uncensorable end-to-end encrypted messaging and also includes a more anonymous cryptocurrency named Okcash.

## Install and run daemon

You MUST have the okcashd daemon running, else your NodeJS app will return a connection error. Please for the sake of security do this on the same machine that the code will be running on. You can start the okcash daemon with the following command.

Linux:
`./okcashd -daemon`

Windows:
`okcashd.exe -daemon`

A **daemon** is a process that runs in the background after you've started it.

You can download Okcash's graphical interface and daemon for Ubuntu [here](https://okcash.co/gettingstarted).#participate).
We highly recommend building the daemon from source, this option works best for other linux flavours such as Debian. You can find detailed instructions [here](https://okcash.co#linux-daemon-from-source-okcashd)

For numerous security reasons you'll get an error when first running the okcashd daemon. The error will instruct you to create a okcash.conf file in your corresponding directory:

OS | PATH
------------ | -------------
Windows | %appdata%\Okcash
OSX  | ~/Library/Application Support/Okcash/
Linux  | ~/.okcash/

Create the file `okcash.conf`, the linux command line instructions are:
```shell
cd ~/.okcash/
nano okcash.conf
```

and insert the following, make sure to change USERNAME and PASSWORD to something secure:
```json
server=1
rpcuser=USERNAME
rpcpassword=PASSWORD
```
## Install for NodeJS

`npm install okcash`

## API
The API is equivalent to the API document [here](https://okcash.co/#participate).
The documentation on the website is not yet up to date (not all Bitcoin JSON RPC commands are valid), you're better off checking the actual client or in the file `/lib/commands.js`.

The methods are exposed as lower camelcase methods on the `okcash.Client`
object, or you may call the API directly using the `cmd` method.

## Examples

### Create client
```js
// all config options are optional
var client = new okcash.Client({
  host: 'localhost',
  port: 6969,
  user: 'username',
  pass: 'password',
  timeout: 30000
});
```

### Get all unread messages
*Note:* Does not work with GUI wallet, it automatically marks the message as read. Use in combination with okcashd.
```js
  client.smsgInbox('unread', function(err, result, resHeaders) {
    if (err) return console.log(err);
    console.log(JSON.stringify(result));
    for(var i = 0; i < +result.result; i++){
        var sender = result.messages[i].from;
        var receiver = result.messages[i].to;
        var text = result.messages[i].text;
    
    }
  });
```

### Get balance across all accounts with minimum confirmations of 6

```js
client.getBalance('*', 6, function(err, balance, resHeaders) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});
```
### Getting the balance directly using `cmd`

```js
client.cmd('getbalance', '*', 6, function(err, balance, resHeaders){
  if (err) return console.log(err);
  console.log('Balance:', balance);
});
```

### Batch multiple RPC calls into single HTTP request

```js
var batch = [];
for (var i = 0; i < 10; ++i) {
  batch.push({
    method: 'getnewaddress',
    params: ['myaccount']
  });
}
client.cmd(batch, function(err, address, resHeaders) {
  if (err) return console.log(err);
  console.log('Address:', address);
});
```

