// // // eslint-disable-next-line no-unused-vars
// // import React, { useState } from "react";
// // import { Layout, Menu, Button, Typography, Image } from "antd";
// // import {
// //   ClockCircleOutlined,
// //   CalculatorOutlined,
// //   DollarOutlined,
// //   FileTextOutlined, 
// //   MenuUnfoldOutlined,
// //   MenuFoldOutlined,
// // } from "@ant-design/icons";
// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// // import Pomodoro from "./Pomodoro/App.jsx";
// // import HelloWorld from "./HelloWorld/App.jsx"
// // import Calculator from "./Calculator/App.jsx";
// // import Converter from "./Converter/App.jsx";
// // import ChessBoard from "./ChessBoard/App.jsx";
// // import Quote from "./Quote/App.jsx";
// // import "./App.css";
// // import Chess from "./Chess.jsx"
// // const { Header, Content, Sider, Footer } = Layout;
// // const { Text } = Typography;

// // const App = () => {
// //   const [collapsed, setCollapsed] = useState(false);
// //   const [logoSize, setLogoSize] = useState(100); 
  
// //   const toggleCollapsed = () => {
// //     setCollapsed(!collapsed);
// //     setLogoSize(collapsed ? 100 : 50); 
// //   }

// //   return (
// //     <Router>
// //       <Layout style={{ minHeight: "100vh" }}>
// //         <Sider
// //           trigger={null}
// //           collapsible
// //           collapsed={collapsed}
// //           theme="dark"
// //           width={160}
// //           collapsedWidth={100}
         
// //         >
// //           <div className="logo" style={{ padding:"15px 25px",height: logoSize }}>
// //             <Image
// //               width={logoSize}
// //               src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
// //             />
           
// //           </div>
// //           <Menu
// //             theme="dark"
// //             mode="inline"
// //             style={{ padding: "25px 0px" }}
// //             items={[
// //               {
// //                 icon: <FileTextOutlined />,
// //                 label: <Link to={"/HelloWorld"}>HelloWorld</Link>,
// //               },
// //               {
// //                 icon: <CalculatorOutlined />,
// //                 label: <Link to={"/calculator"}>Calculator</Link>,
// //               },
// //               {
// //                 icon: <ClockCircleOutlined />,
// //                 label: <Link to={"/Pomodoro"}>Pomodoro</Link>,
// //               },
// //               {
// //                 icon: <DollarOutlined />,
// //                 label: <Link to={"/Converter"}>Converter</Link>,
// //               },
// //               {
// //                 icon: (
// //                   <span >
// //                     <Chess />
// //                   </span>
// //                 ),
// //                 label: <Link to={"/ChessBoard"}>ChessBoard</Link>,
// //               },
// //               // {
// //               //   icon: <SlackSquareOutlined />,
// //               //   label: <Link to={"/Quote"}>Quote</Link>,
// //               // },
// //             ]}
// //           />
// //         </Sider>
// //         <Layout>
// //           <Header style={{ background: "#fff", paddingLeft: "16px" }}>
// //             <Button
// //               type="text"
// //               icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
// //               onClick={toggleCollapsed}
// //               style={{
// //                 fontSize: "16px",
// //                 margin: "8px",
// //                 marginLeft: "16px",
// //               }}
// //             />
// //             <Text
// //               style={{
// //                 fontSize: "20px",
// //                 fontWeight: "bold",
// //                 margin: "8px",
// //                 marginLeft: "16px",
// //               }}
// //             >
// //               My Project
// //             </Text>
// //           </Header>
// //           <Content
// //             style={{
// //               margin: "16px",
// //               padding: "24px",
// //               background: "#fff",
// //               minHeight: 280,
// //             }}
// //           >
// //             <Routes>
// //               <Route path="/HelloWorld" element={<HelloWorld />} />
// //               <Route path="/calculator" element={<Calculator />} />
// //               <Route path="/pomodoro" element={<Pomodoro />} />
// //               <Route path="/converter" element={<Converter />} />
// //               <Route path="/chessboard" element={<ChessBoard />} />
// //               <Route path="/quote" element={<Quote />} />
// //             </Routes>
// //           </Content>
// //           <Footer
// //             style={{
// //               textAlign: "center",
// //               padding: "24px",
// //               position: "fixed",
// //               bottom: 0,
// //               width: "93%",
// //             }}
// //           >
// //             My project ©2023 Created by Quang
// //           </Footer>
// //         </Layout>
// //       </Layout>
// //     </Router>
// //   );
// // };

// // export default App;
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { Layout, Menu, Button, Typography, Image, Input } from "antd";
// import {
//   ClockCircleOutlined,
//   CalculatorOutlined,
//   DollarOutlined,
//   FileTextOutlined, 
//   SearchOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
// } from "@ant-design/icons";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Pomodoro from "./Pomodoro/App.jsx";
// import HelloWorld from "./HelloWorld/App.jsx"
// import Calculator from "./Calculator/App.jsx";
// import Converter from "./Converter/App.jsx";
// import ChessBoard from "./ChessBoard/App.jsx";
// import Quote from "./Quote/App.jsx";
// import "./App.css";
// import Chess from "./Chess.jsx"
// const { Header, Content, Sider, Footer } = Layout;
// const { Text } = Typography;

// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [logoSize, setLogoSize] = useState(100);
//   const [searchValue, setSearchValue] = useState("");

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//     setLogoSize(collapsed ? 100 : 50); 
//   }

//   const handleSearch = (e) => {
//     setSearchValue(e.target.value);
//   };

//   return (
//     <Router>
//       <Layout style={{ minHeight: "100vh" }}>
//         <Sider
//           trigger={null}
//           collapsible
//           collapsed={collapsed}
//           theme="dark"
//           width={160}
//           collapsedWidth={100}
         
//         >
//           <div className="logo" style={{ padding:"15px 25px",height: logoSize }}>
//             <Image
//               width={logoSize}
//               src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
//             />
           
//           </div>
         
//           <Menu
//             theme="dark"
//             mode="inline"
//             style={{ padding: "25px 0px" }}
//             items={[
//               {
//                 icon: <FileTextOutlined />,
//                 label: <Link to={"/HelloWorld"}>HelloWorld</Link>,
//               },
//               {
//                 icon: <CalculatorOutlined />,
//                 label: <Link to={"/calculator"}>Calculator</Link>,
//               },
//               {
//                 icon: <ClockCircleOutlined />,
//                 label: <Link to={"/Pomodoro"}>Pomodoro</Link>,
//               },
//               {
//                 icon: <DollarOutlined />,
//                 label: <Link to={"/Converter"}>Converter</Link>,
//               },
//               {
//                 icon: (
//                   <span>
//                     <Chess />
//                   </span>
//                 ),
//                 label: <Link to={"/ChessBoard"}>ChessBoard</Link>,
//               },
//               // {
//               //   icon: <SlackSquareOutlined />,
//               //   label: <Link to={"/Quote"}>Quote</Link>,
//               // },
//             ].filter((item) =>
//               item.label.props.children
//                 .toLowerCase()
//                 .includes(searchValue.toLowerCase())
//             )}
//           />
//         </Sider>
//         <Layout>
//           <Header style={{ background: "#fff", paddingLeft: "16px" }}>
//             <Button
//               type="text"
//               icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//               onClick={toggleCollapsed}
//               style={{
//                 fontSize: "16px",
//                 margin: "8px",
//                 marginLeft: "16px",
//               }}
//             />
//             <Text
//               style={{
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 margin: "8px",
//                 marginLeft: "16px",
//               }}
//             >
//               My Project
//             </Text>
//             <Input
//               placeholder="Search"
//               value={searchValue}
//               onChange={handleSearch}
//               suffix={<SearchOutlined />}
//               style={{ width: "200px", marginLeft: "16px", border:"1px solid #000" }}
//             />
//           </Header>
//           <Content
//             style={{
//               margin: "16px",
//               padding: "24px",
//               background: "#fff",
//               minHeight: 280,
//             }}
//           >
//             <Routes>
//               <Route path="/HelloWorld" element={<HelloWorld />} />
//               <Route path="/calculator" element={<Calculator />} />
//               <Route path="/pomodoro" element={<Pomodoro />} />
//               <Route path="/converter" element={<Converter />} />
//               <Route path="/chessboard" element={<ChessBoard />} />
//               <Route path="/quote" element={<Quote />} />
//             </Routes>
//           </Content>
//           <Footer
//             style={{
//               textAlign: "center",
//               padding: "24px",
//               position: "fixed",
//               bottom: 0,
//               width: "93%",
//             }}
//           >
//             My project ©2023 Created by Quang
//           </Footer>
//         </Layout>
//       </Layout>
//     </Router>
//   );
// };

// export default App;
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Layout, Menu, Button, Typography, Image, Input } from "antd";
import {
  ClockCircleOutlined,
  CalculatorOutlined,
  DollarOutlined,
  FileTextOutlined, 
  SearchOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Pomodoro from "./Pomodoro/App.jsx";
import HelloWorld from "./HelloWorld/App.jsx"
import Calculator from "./Calculator/App.jsx";
import Converter from "./Converter/App.jsx";
import ChessBoard from "./ChessBoard/App.jsx";
import Quote from "./Quote/App.jsx";
import "./App.css";
import Chess from "./Chess.jsx"
const { Header, Content, Sider, Footer } = Layout;
const { Text } = Typography;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [logoSize, setLogoSize] = useState(100);
  const [searchValue, setSearchValue] = useState("");
  const [language, setLanguage] = useState("en");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setLogoSize(collapsed ? 100 : 50); 
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="dark"
          width={160}
          collapsedWidth={100}
         
        >
          <div className="logo" style={{ padding:"15px 25px",height: logoSize }}>
            <Image
              width={logoSize}
              src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
           
          </div>
         
          <Menu
            theme="dark"
            mode="inline"
            style={{ padding: "25px 0px" }}
            items={[
              {
                icon: <FileTextOutlined />,
                label: <Link to={"/HelloWorld"}>{language === "en" ? "HelloWorld" : "Xin chào"}</Link>,
              },
              {
                icon: <CalculatorOutlined />,
                label: <Link to={"/calculator"}>{language === "en" ? "Calculator" : "Máy tính"}</Link>,
              },
              {
                icon: <ClockCircleOutlined />,
                label: <Link to={"/Pomodoro"}>{language === "en" ? "Pomodoro" : "Hẹn giờ"}</Link>,
              },
              {
                icon: <DollarOutlined />,
                label: <Link to={"/Converter"}>{language === "en" ? "Converter" : "Đổi tiền tệ"}</Link>,
              },
              {
                icon: (
                  <span>
                    <Chess />
                  </span>
                ),
                label: <Link to={"/ChessBoard"}>{language === "en" ? "ChessBoard" : "Bàn cờ"}</Link>,
              },
              // {
              //   icon: <SlackSquareOutlined />,
              //   label: <Link to={"/Quote"}>{language === "en" ? "Quote" : "Trích dẫn"}</Link>,
              // },
            ].filter((item) =>
              item.label.props.children
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            )}
          />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", paddingLeft: "16px" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleCollapsed}
              style={{
                fontSize: "16px",
                padding: "10px",
                
              }}
            />
            <Text
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "20px 15px 20px 10px",
               // marginLeft: "10px",
              }}
            >
              My Project
            </Text>
            <Input
              placeholder={
                language === "en" ? "Search menu items" : "Tìm kiếm các mục"
              }
              prefix={<SearchOutlined />}
              style={{ width: 200 }}
              onChange={handleSearch}
            />
            <Button
              type="text"
              onClick={handleLanguage}
              style={{ fontSize: "16px", float: "right", margin: "15px" }}
            >
              {language === "en" ? "Tiếng Việt" : "English"}
            </Button>
          </Header>
          <Content style={{ margin: "16px" }}>
            <Routes>
              <Route path="/HelloWorld" element={<HelloWorld />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/Pomodoro" element={<Pomodoro />} />
              <Route path="/Converter" element={<Converter />} />
              <Route path="/ChessBoard" element={<ChessBoard />} />
              <Route path="/Quote" element={<Quote />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <Text >My project ©2023 Created by Quang</Text>
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;