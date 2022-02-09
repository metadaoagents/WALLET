import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  // const isInchDex = useMemo(() => (Moralis.Plugins?.oneInch ? true : false), [Moralis.Plugins?.oneInch]);

  return (
    // <div style={{ display: "flex", gap: "10px" }}>
    //   <Card
    //     style={styles.card}
    //     title={
    //       <>
    //         📝 <Text strong>To-Do List </Text>
    //       </>
    //     }
    //   >
      
    //   </Card>


      <div>

        <img src='https://daoagents.s3.amazonaws.com/meta-dao-wallet2.jpg'></img>

        {/* <h4 class='white'>1. Transfer tokens and assets<br></br>
        2. Swap token on all chains <br></br>
        3.Check balances on all chains</h4> */}


        {/* <Card
          style={styles.card}
          title={
            <>
              💣 <Text strong>Starting Local Chain (optional)</Text>
            </>
          }
        >
          
        </Card> */}
        {/* <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              📡 <Text strong> Connecting your Local Chain to the Moralis DB</Text>
            </>
          }
        >
         
        </Card> */}
      </div>
    
  );
}
