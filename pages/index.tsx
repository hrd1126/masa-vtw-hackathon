import * as React from "react";
import type { NextPage } from "next";
// import Head from "next/head";
import { useRecoilState } from "recoil";
import { homePageBookSumState, homePageQueryState } from "atoms";
import { AppBar, Paper, Toolbar } from "@mui/material";

// import CommonLayout from "components/v2/Layout";
// import { FilteredChips } from "components/v2/Chips/FilteredChips";
// import BookList from "components/v2/Cards/ShoppingItemCardList";
// import Pagination from "components/v2/Pagination";
// import { PAGE_SIZE } from "const";

import { ArrowDropDownFilled } from "./ArrowDropDownFilled";
import { ChevronLeftFilled } from "./ChevronLeftFilled";
import { ChevronRightFilled } from "./ChevronRightFilled";
import { FavoriteFilled } from "./FavoriteFilled";
import { Hidden } from "./Hidden";
import { MenuFilled } from "./MenuFilled";
import { ReceiptFilled } from "./ReceiptFilled";
import { ShoppingCartFilled } from "./ShoppingCartFilled";
import { StarSharp } from "./StarSharp";
// import "../styles/mui-style.css";

const Home: NextPage = () => {
  const [homePageQueryData, setHomePageQueryData] =
    useRecoilState(homePageQueryState);
  const [homePageBookSum] = useRecoilState(homePageBookSumState);

  const handleClickPagination = (page: number) => {
    setHomePageQueryData({ ...homePageQueryData, page });
  };

  return (
    <>
      <h1>Test site</h1>

      <AppBar>
        <Paper>
          <Toolbar>AAA</Toolbar>
        </Paper>
      </AppBar>
    </>
  );

  // <div className="android-small">
  //   <div className="div">
  //     <div className="bottom-navigation">
  //       <div className="bottom-navigation-2">
  //         <FavoriteFilled className="icon-instance-node" />
  //         <div className="text-wrapper">
  //           <div className="tab-one">Label</div>
  //         </div>
  //       </div>
  //       <div className="bottom-navigation-2">
  //         <ShoppingCartFilled className="icon-instance-node" />
  //         <div className="text-wrapper">
  //           <div className="tab-one">Products</div>
  //         </div>
  //       </div>
  //       <div className="bottom-navigation-2">
  //         <ReceiptFilled className="icon-instance-node" />
  //         <div className="text-wrapper">
  //           <div className="tab-one-2">Invoices</div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="main">
  //       <div className="container">
  //         <div className="custom-page-heading">
  //           <div className="box">
  //             <div className="title-and-contents">
  //               <div className="page-header">Member status</div>
  //             </div>
  //             <div className="spacing-horizontal">
  //               <div className="frame" />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="div-wrapper">
  //           <div className="paper">
  //             <div className="div-wrapper">
  //               <div className="table">
  //                 <div className="div-2">
  //                   <div className="table-head">
  //                     <div className="checkbox">
  //                       <div className="padding">
  //                         <Hidden className="icon-instance-node-2" />
  //                       </div>
  //                     </div>
  //                     <div className="head">User</div>
  //                   </div>
  //                   <div className="div-wrapper-2">
  //                     <div className="head-2">Account status</div>
  //                   </div>
  //                 </div>
  //                 <div className="div-2">
  //                   <div className="cell">
  //                     <div className="height">
  //                       <div className="padding-wrapper">
  //                         <div className="padding">
  //                           <Hidden className="icon-instance-node-2" />
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div className="box-2">
  //                       <div className="custom-table-custom">
  //                         <div className="avatar">
  //                           <div className="min-width" />
  //                         </div>
  //                         <div className="text-wrapper-2">Xin Yue</div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="cell-2" />
  //                   <div className="div-wrapper-2">
  //                     <div className="box-2">
  //                       <div className="chip">
  //                         <div className="avatar-2">
  //                           <div className="text-wrapper-3">OP</div>
  //                           <div className="min-width-2" />
  //                         </div>
  //                         <div className="typography">
  //                           <div className="text-wrapper-4">Chip</div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="div-2">
  //                   <div className="cell">
  //                     <div className="height">
  //                       <div className="padding-wrapper">
  //                         <div className="padding">
  //                           <Hidden className="icon-instance-node-2" />
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div className="box-2">
  //                       <div className="instance">
  //                         <div className="min-width-wrapper">
  //                           <div className="min-width" />
  //                         </div>
  //                         <div className="xin-yue">Jane Doe</div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="cell-2" />
  //                   <div className="div-wrapper-2">
  //                     <div className="box-2">
  //                       <div className="instance-2">
  //                         <div className="avatar-2">
  //                           <div className="text-wrapper-3">OP</div>
  //                           <div className="min-width-2" />
  //                         </div>
  //                         <div className="typography">
  //                           <div className="text-wrapper-4">Active</div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="div-2">
  //                   <div className="cell">
  //                     <div className="height">
  //                       <div className="padding-wrapper">
  //                         <div className="padding">
  //                           <Hidden className="icon-instance-node-2" />
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div className="box-2">
  //                       <div className="custom-table-custom">
  //                         <div className="avatar-3">
  //                           <div className="min-width" />
  //                         </div>
  //                         <div className="text-wrapper-2">Xin Yue</div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="cell-2" />
  //                   <div className="div-wrapper-2">
  //                     <div className="box-2">
  //                       <div className="chip">
  //                         <div className="avatar-2">
  //                           <div className="text-wrapper-3">OP</div>
  //                           <div className="min-width-2" />
  //                         </div>
  //                         <div className="typography">
  //                           <div className="text-wrapper-4">Chip</div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="div-2">
  //                   <div className="cell">
  //                     <div className="height">
  //                       <div className="padding-wrapper">
  //                         <div className="padding">
  //                           <Hidden className="icon-instance-node-2" />
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div className="box-2">
  //                       <div className="custom-table-custom">
  //                         <div className="avatar-4">
  //                           <div className="min-width" />
  //                         </div>
  //                         <div className="text-wrapper-2">Xin Yue</div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="cell-2" />
  //                   <div className="div-wrapper-2">
  //                     <div className="box-2">
  //                       <div className="chip">
  //                         <div className="avatar-2">
  //                           <div className="text-wrapper-3">OP</div>
  //                           <div className="min-width-2" />
  //                         </div>
  //                         <div className="typography">
  //                           <div className="text-wrapper-4">Chip</div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="native-browser">
  //                   <div className="scroll" />
  //                 </div>
  //                 <div className="table-footer">
  //                   <div className="container-2">
  //                     <div className="rows-per-page">Rows per page:</div>
  //                     <div className="page">
  //                       <div className="text-wrapper-5">10</div>
  //                       <ArrowDropDownFilled className="arrow-drop-down" />
  //                     </div>
  //                   </div>
  //                   <div className="element-of">1-5 of 13</div>
  //                   <div className="div-3">
  //                     <div className="icon-wrapper">
  //                       <div className="div-3">
  //                         <ChevronLeftFilled className="icon-instance-node-2" />
  //                       </div>
  //                     </div>
  //                     <div className="icon-wrapper">
  //                       <div className="div-3">
  //                         <ChevronRightFilled className="icon-instance-node-2" />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="app-bar">
  //       <div className="toolbar-wrapper">
  //         <div className="toolbar">
  //           <div className="left-side">
  //             <div className="icon-wrapper">
  //               <div className="div-3">
  //                 <MenuFilled className="icon-instance-node-2" />
  //               </div>
  //             </div>
  //             <div className="title-wrapper">
  //               <div className="title">Techies!</div>
  //             </div>
  //           </div>
  //           <div className="stack">
  //             <div className="icon-wrapper">
  //               <div className="div-3">
  //                 <StarSharp className="icon-instance-node-2" />
  //               </div>
  //             </div>
  //             <div className="avatar-2">
  //               <div className="min-width" />
  //             </div>
  //           </div>
  //           <div className="min-height" />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>;

  /* =======================================*/
  // return (
  //   <>
  //   <AppBar>
  //   <Paper>
  //     <Toolbar></Toolbar>
  //   </Paper>
  // </AppBar>
  //     <Head>
  //       <title>Bookstore Home</title>
  //       <meta name='description' content='Bookstore Home Page' />
  //       <link rel='icon' href='/favicon.ico' />
  //     </Head>

  //     <CommonLayout>
  //       {(homePageQueryData.sort || homePageQueryData.type) && (
  //         <FilteredChips
  //           data={homePageQueryData}
  //           onChange={setHomePageQueryData}
  //         />
  //       )}
  //       <BookList page={homePageQueryData?.page || 1} pageSize={PAGE_SIZE} />
  //       <div className='flex justify-center pt-6'>
  //         <Pagination
  //           currentPage={homePageQueryData?.page || 1}
  //           pages={Math.round(homePageBookSum / PAGE_SIZE)}
  //           onClick={handleClickPagination}
  //         />
  //       </div>
  //     </CommonLayout>
  //   </>
  // );
};

export default Home;
