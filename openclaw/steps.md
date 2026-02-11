Open Claw
Obtained a Contabo VPS Server then got the key on email

STEP 1. VPS SETUP

ssh root@84.247.***.***
Contabo password 5qz5****

Step 2 — Install OpenClaw

#### openclaw --version 

loginctl enable-linger $USER

loginctl enable-linger $USER

openclaw setup

cd ~/.openclaw/workspace
git clone https://github.com/rishavmukherji/farcaster-agent.git
cd farcaster-agent
npm install

node src/auto-setup.js

export CUSTODY_PK="0xYOUR_CUSTODY_PRIVATE_KEY"

node src/register-fid.js

export PRIVATE_KEY="0x..."

// vi /root/.openclaw/farcaster-credentials.json

cat /root/.openclaw/farcaster-credentials.json

cd agents/

// ~/.openclaw/workspace/farcaster-agent# 

*** block
node - <<'NODE'
const { Wallet } = require('ethers');
const fs = require('fs');
const path = require('path');

const out = path.join(process.env.HOME, '.openclaw', 'secrets', 'farcaster-wallet.json');
fs.mkdirSync(path.dirname(out), { recursive: true });

const w = Wallet.createRandom();
fs.writeFileSync(out, JSON.stringify({ address: w.address, privateKey: w.privateKey }, null, 2), { mode: 0o600 });

console.log('Address:', w.address);
console.log('Saved:', out);
NODE
***

cat /root/.openclaw/secrets/farcaster-wallet.json

***block
export PRIVATE_KEY=$(node -p "require(process.env.HOME + '/.openclaw/secrets/farcaster-wallet.json').privateKey")
node src/auto-setup.js "gm from Base East Africa build streaks bot"
***

node src/auto-setup.js "gm from the trenches anons"

***block
cd ~/.openclaw/workspace/farcaster-agent
export PRIVATE_KEY=$(node -p "require(process.env.HOME + '/.openclaw/secrets/farcaster-wallet.json').privateKey")
***

node src/register-fid.js

node src/add-signer.js

node src/add-signer.js

***block
export SIGNER_PRIVATE_KEY=...   # paste from credentials.js get
export FID=...                  # paste from credentials.js get
node src/post-cast.js "gm from the base openclaw workshop"
***
export SIGNER_PRIVATE_KEY= 0x081b8d369b25518fc2e34dc7038957****   # paste from credentials.js get

export FID=270****                 # paste from credentials.js get

node src/post-cast.js "gm from the base ea openclaw workshop"

export SIGNER_PRIVATE_KEY= 0x081b8d369b25518fc2e34dc703895****   # paste from credentials.js get

export FID=270****                 # paste from credentials.js get

node src/post-cast.js "gm from the base ea openclaw workshop"export SIGNER_PRIVATE_KEY= 0x081b8d369b25518fc2e34dc7038957c7****   # paste from credentials.js get

export FID=270****                  # paste from credentials.js get

node src/post-cast.js "gm from the base ea openclaw workshop"

export SIGNER_PRIVATE_KEY=081b8d369b25****

export FID=270****

node src/post-cast.js "gm from the base ea openclaw workshop"


*****
PRIVATE_KEY=0x... SIGNER_PRIVATE_KEY=0x081b8d369b25518fc2e34**** FID=270**** node post-cast.js "Your cast text"


