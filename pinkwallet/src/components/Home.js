import React from "react";
import pinkwallet from "../PinkWallet.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function Home() {
const navigate = useNavigate(); 
  return (
    <>
     <div class="container mx-auto flex flex-col items-center gap-y-10">
      

<div class="inputwallet p-5 flex flex-col items-center justify-center gap-y-12">

<h2 class="pinkwallet text-3xl">Stylish Web3 Crypto Wallet</h2>


<div class="flex gap-2 w-full justify-center">

<Button
        onClick={()=> navigate("/yourwallet")}
        className="bg-black text-white"
       >
          CREATE A WALLET
        </Button>
        <Button
         onClick={()=> navigate("/recover")}
        className="bg-white"
        >
          SIGN IN WITH METAMASK SEED PHRASE
        </Button>

       
</div>

</div>

</div>
    </>
  );
}

export default Home;
