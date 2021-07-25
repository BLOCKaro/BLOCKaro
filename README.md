# BLOCKaro(Group chat using Blockchain)

  BLOCKaro is a decentralized group chat app running on basic blockchain which is built from scratch. It allows us to send encrypted messages which can only be decrypted by the people in the network. No one outside the network can decrypt the messages and hence this platform provides a secure network for a group of people to run their business and carry on their work. The messages sent in this chat application are can't be edited or changed and hence immutable because of the blockchain. This keeps a check on everyone inside the network and allows complete transparency.

## What is blockchain?  

  Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.

## How is Blockchain implemented?
  A well-designed blockchain stores records in blocks that are linked to one another using a cryptographic technique that creates a digital, distributed ledger. The cryptographic “signature” on each block links to the previous block in a way that makes the blockchain virtually tamper-proof after the blocks are created

## How Blockchain works?
  ![Blockchain Architecture](https://cdn.guru99.com/images/1/053018_0719_BlockchainT2.png)
  Using cryptography to keep exchanges secure, blockchain provides a decentralized database, or “digital ledger”, of transactions that everyone on the network can see. This network is essentially a chain of computers that must all approve an exchange before it can be verified and recorded.

## Instructions to run

Clone the project,

```sh
$ git clone https://github.com/BLOCKaro/BLOCKaro.git 
```

Install the dependencies,

```sh
$ cd BLOCKaro
$ pip install -r requirements.txt
```

Start a blockchain node server,

```sh
## For windows
$ set FLASK_APP=server.py
## For MAC
$ export FLASK_APP=server.py
$ flask run --port 8000
```

One instance of our blockchain node is now up and running at port 8000.


Run the application on a different terminal session,

```sh
$ python run.py
```

The application should be up and running at [http://localhost:5000](http://localhost:5000).

Here are a few screenshots
1.Landing Page

![image.png](https://github.com/BLOCKaro/BLOCKaro/blob/main/Screenshots/screen1.png)

2. Posting some content

![image.png](https://github.com/BLOCKaro/BLOCKaro/blob/main/Screenshots/screen2.png)

3. Requesting the node to mine

![image.png](https://github.com/BLOCKaro/BLOCKaro/blob/main/Screenshots/screen3.png)

4. Resyncing with the chain for updated chat

![image.png](https://github.com/BLOCKaro/BLOCKaro/blob/main/Screenshots/screen4.png)

5. Displaying chain using Postman

![image.png](https://github.com/BLOCKaro/BLOCKaro/blob/main/Screenshots/screen5.png)

To play around by spinning off multiple custom nodes, use the `register_with/` endpoint to register a new node. 

Here's a sample scenario that you might wanna try,

```sh
# already running
$ flask run --port 8000 &
# spinning up new nodes
$ flask run --port 8001 &
$ flask run --port 8002 &
```

You can use the following cURL requests to register the nodes at port `8001` and `8002` with the already running `8000`.

```sh
curl -X POST \
  http://127.0.0.1:8001/register_with \
  -H 'Content-Type: application/json' \
  -d '{"node_address": "http://127.0.0.1:8000"}'
```

```sh
curl -X POST \http://127.0.0.1:8002/register_with \
  -H 'Content-Type: application/json' \
  -d '{"node_address": "http://127.0.0.1:8000"}'
```

This will make the node at port 8000 aware of the nodes at port 8001 and 8002, and make the newer nodes sync the chain with the node 8000, so that they are able to actively participate in the mining process post registration.

To update the node with which the frontend application syncs (default is localhost port 8000), change `CONNECTED_NODE_ADDRESS` field in the [views.py](/app/views.py) file.

Once you do all this, you can run the application, create transactions (post messages via the web inteface), and once you mine the transactions, all the nodes in the network will update the chain. The chain of the nodes can also be inspected by inovking `/chain` endpoint using cURL.

```sh
$ curl -X GET http://localhost:8001/chain
$ curl -X GET http://localhost:8002/chain
```
