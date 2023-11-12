import React from "react";
import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";

function CreateAccount({setWallet, setSeedPhrase}) {
  const [newSeedPhrase, setNewSeedPhrase] = useState(null);
  const navigate = useNavigate();

  function generateWallet(){
    const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    setNewSeedPhrase(mnemonic)
  }


  function setWalletAndMnemonic(){
    setSeedPhrase(newSeedPhrase);
    setWallet(ethers.Wallet.fromPhrase(newSeedPhrase).address)
  }


  return (
      <>
        <div className="content">

        <div className="mnemonic rounded">
            <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
            <div>
              Once you generate the seed phrase, save it securely in order to
              recover your wallet in the future.
            </div>
          </div>

          <Button
            className="frontPageButton bg-black text-white border-none  mt-4"
            onClick={() => generateWallet()}
            
          >
            Generate Seed Phrase
          </Button>
          <Card className="seedPhraseContainer blurr border-none">
          {newSeedPhrase && <pre style={{whiteSpace: "pre-wrap"}}>{newSeedPhrase}</pre>}
          </Card>

          <Button
            className="frontPageButton bg-teal-400 mt-4"
            type="primary"
            onClick={() => setWalletAndMnemonic()}
          >
            Open Your New Wallet
          </Button>
        </div>
      
      </>
    );
  }

  export default CreateAccount;
