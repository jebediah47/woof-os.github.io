import { Avatar, Layout, Menu } from "antd";

function Home() {
  return (
    <>
      <Layout>
        <Layout.Header
          style={{
            display: "flex",
            backgroundColor: "#141414",
          }}
        >
          <div
            style={{
              float: "left",
              margin: "16px 24px 16px 0",
              height: "32px",
              width: "240px",
              display: "flex",
              justifyContent: "flex-start",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://github.com/woof-os.png"
              style={{ marginRight: "10px" }}
            />
            <strong style={{ fontSize: "1rem" }}>Woof OS</strong>
          </div>
          <Menu
            mode="horizontal"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              border: "none",
              width: "100%",
            }}
            items={[
              {
                key: "home",
                label: "Home",
              },
              {
                key: "downloads",
                label: "Downloads",
              },
              {
                key: "donate",
                label: "Donate",
              },
            ]}
          />
        </Layout.Header>
      </Layout>
    </>
  );
}

export default Home;
