import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
    
      }}
      defaultSelectedKeys={[pathname]}
    > 
      <Menu.Item key="/quickstart">
      <NavLink to="/quickstart"><p><img class='newoo1' src='https://daoagents.s3.amazonaws.com/logo.jpg' /> Multi-chain web wallet</p></NavLink>
      </Menu.Item>
      <Menu.Item key="/wallet">
        <NavLink to="/wallet"><p><img class='newoo1'src='transfer.png' /> Transfer</p></NavLink>
      </Menu.Item>
      <Menu.Item key="/barter-swap">
        <NavLink to="/barter-swap"><p><img class='newoo'src='/barter.png' /> Barter-Swap</p></NavLink> 
      </Menu.Item>
      <Menu.Item key="onramp">
      <NavLink to="/onramp"><p><img class='newoo2'src='/card.png' /> Buy crypto</p></NavLink> 
      </Menu.Item>
      <Menu.Item key="/erc20balance">
      <NavLink to="/erc20balance"><p><img class='newoo3'src='/bag.png' /> Balances</p></NavLink> 
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
      <NavLink to="/erc20transfers"><p><img class='newoo3'src='/transactions.png' /> History Transactions</p></NavLink> 
      </Menu.Item>
      <Menu.Item key="/nftBalance">
      <NavLink to="/nftBalance"><p><img class='newoo3'src='/nft.png' /> NFT Collection</p></NavLink> 
      </Menu.Item>
      <Menu.Item key="/AI-Rating">
      <p><img class='newoo3'src='/fire.gif' /><a href="https://google.com"> AI crypto Ranking</a></p>
      </Menu.Item>
      <Menu.Item key="/Alpha-social">
      <p><img class='newoo3'src='/alpha.png' /><a href="https://google.com"> Alpha-social</a></p>
      </Menu.Item>
      <Menu.Item key="/Metaverse-VR">
      <p><img class='newoo3'src='/vr.jpg' /><a href="https://google.com"> Metaverse VR</a></p>
      </Menu.Item>
      <Menu.Item key="/Arcade">
      <p><img class='newoo3'src='https://freepngimg.com/thumb/mario_bros/91876-square-art-bros-mario-allstars-super-thumb.png' /><a href="https://google.com"> Arcade</a></p>
      </Menu.Item>
      <Menu.Item key="/Staking">
      <p><img class='newoo3'src='https://icon-library.com/images/farmer-icon-png/farmer-icon-png-10.jpg' /><a href="https://google.com"> Staking (coming soon)</a></p>
      </Menu.Item>
     
    </Menu>
  );
}

export default MenuItems;
