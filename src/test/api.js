import axios from "axios";

const response = await axios({
    url: `https://work.weixin.qq.com/wework_admin/im/getConverse`,
    method: 'GET',
    params: {
        limit: 10,
        vid: 1688855173322208,
        appid: 5629501839600456,
        mark_readed: true,
        random: 0.4848949172396744
    },
    headers: {
        cookie: "pgv_info=ssid=s8649861845; pgv_pvid=1450837350; qm_authimgs_id=2; qm_verifyimagesession=h01ccedbe33adb0938f9a1f68c8c05778317c16d0075d4d347797e044752e144ee795602cf33f690b5f; logout_page=dm_loginpage; wwrtx.i18n_lan=zh; wwrtx.c_gdpr=0; wwrtx.refid=20951327302984499; wwrtx.sid=kWkTyYb4URujzCJKNvR2YZIKZ8xTE8G4IDokv69oO9bls4ofOxEw-TLO0aRv1B4v; wwrtx.ltype=1; wwrtx.ref=direct; wwrtx.vst=YQ2CCOBxFIKe7hGYgti3hfjMdaCoL3vRiCfH3BDg259gVubdF-TD1RYgT3NYfInM8boPK4NCkAOZfW9p2017zlIYGGl3Tj_wusB1AfPFYnCsNuBi0dNWOciO3sDagecbfsiQCp1azWGRqRezXkD_7NH0O5lNIby6dAJpOrvyAfPUoqa1pkBwEG2ogGUxU_vR-2MhMFjAP-33_JUJG0sI1Dwugf8Xt9_7ZWPoVUw3kjOvhlI6C8hSMyO0r1lg2SFKFX784mUMnGjP4bz0e4CS5w; wwrtx.vid=1688855173322208; wxpay.corpid=1970326129980224; wxpay.vid=1688855173322208; wwrtx.cs_ind=; wwrtx.logined=true; _ga=GA1.2.484075405.1644806986; _gid=GA1.2.1304336411.1644806986; wwopen.open.sid=wuB_XEoeJqdMdwHfvBCN0FT1MbxmTdn5As0PfU15sSZE; wwapidoc.gst2=AQAAq6k6B1o_xHtKvqeOVXDu8dbVn3liCmQ4mOBx28--f3yXEa_y4yztF3Dqk7HsSM42_xVe3Adr_JEV9GQpDtbMaLol95PbsBiHF8VUyGaCNBZywpoi-1y8jWebYr6r2t5GMF5puRWgxxHLCfM0YofdFT5-J3krbMl0Jrk1f_6nL381h4631LkEnn0yP0vty7LRANcksAW4ziStqP0lWrhDYMxbzAk2TF2fiOQNEKE0Qpga9D3o4ZkO74LJPprWqsuy; wwapidoc.vst2=AQAAjdOtUIr5M6TSGx5AH-y3ovYTGxEOTT8842eCwOkZQ-H5sUBa2faFH6-IRSPHgZXE5zI_gN21d5P7y6MNIjD_o8iDEpEgFSzz4NNFdtWmrL-9pU8NRtqX1uMH_CEJTgh1LwDGhnKFw_6_VIjqV44rWf6Pp8Z4VxCxe10jDpxyMYi1qkvrTzr36HQ61GBf0GbH6TUeFwowNrOjONRDyRrqSHlscjKvPowNakrlWctHG4jErzgbcZGwAC8nfXbyI3Mgj_Wg2ipp2MO23y__yQ2rvw; wwapidoc.sid=yes8287pG_WbOv7JDau0T_rzpMK5muzyrTh0S5pVJarMN9O5JnSIc0JKyHQUBlN_"
    }
}).then(res => {
    console.log(res.data)
})
